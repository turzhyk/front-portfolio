// WorkflowConnector.tsx
import { useEffect, useRef, useCallback } from "react";

interface WorkflowConnectorProps {
  activeIndex: number;
  stepCount?: number;
  /** Refs на DOM-элементы шагов в левой колонке */
  stepRefs: React.RefObject<HTMLButtonElement | null>[];
  colors: string[];
  /** Ref на карточку справа */
  cardRef: React.RefObject<HTMLElement | null>;
}

const ANIM_DURATION = 200;

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function buildPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
): string {
  const dx = to.x - from.x;
  return `M ${from.x} ${from.y} C ${from.x + dx * 0.55} ${from.y}, ${to.x - dx * 0.55} ${to.y}, ${to.x} ${to.y}`;
}

export function WorkflowConnector({
  activeIndex,
}: WorkflowConnectorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const animRef = useRef<number | null>(null);
  const dotStartRef = useRef<SVGCircleElement>(null);
  const dotEndRef = useRef<SVGCircleElement>(null);

  const currentFromRef = useRef<{ x: number; y: number } | null>(null);
  const updatePath = useCallback(
    (from: { x: number; y: number }, to: { x: number; y: number }) => {
      pathRef.current?.setAttribute("d", buildPath(from, to));
      dotStartRef.current?.setAttribute("cx", String(from.x));
      dotStartRef.current?.setAttribute("cy", String(from.y));
      dotEndRef.current?.setAttribute("cx", String(to.x));
      dotEndRef.current?.setAttribute("cy", String(to.y));
    },
    [],
  );
  const stepCount = 4;
  const getStepAnchor = useCallback(
    (index: number, height: number) => {
      return {
        x: 0,
        y: ((index + 0.5) / stepCount) * height,
      };
    },
    [stepCount],
  );

  const getCardAnchor = useCallback((width: number, height: number) => {
    return {
      x: width,
      y: height / 2,
    };
  }, []);

  const animateTo = useCallback(
    (
      from: { x: number; y: number },
      to: { x: number; y: number },
      cardAnchor: { x: number; y: number },
    ) => {
      if (animRef.current !== null) cancelAnimationFrame(animRef.current);

      // Фиксируем from в замыкании — он не изменится во время анимации
      const fixedFrom = { ...from };
      let startTime: number | null = null;

      const frame = (ts: number) => {
        if (startTime === null) startTime = ts;
        const raw = Math.min((ts - startTime) / ANIM_DURATION, 1);
        const t = easeInOut(raw);

        const cur = {
          x: lerp(fixedFrom.x, to.x, t),
          y: lerp(fixedFrom.y, to.y, t),
        };

        currentFromRef.current = cur;
        updatePath(cur, cardAnchor);

        if (raw < 1) {
          animRef.current = requestAnimationFrame(frame);
        } else {
          animRef.current = null;
        }
      };

      animRef.current = requestAnimationFrame(frame);
    },
    [updatePath],
  );
  const getSize = () => {
    const el = containerRef.current;
    if (!el) return null;

    return {
      width: el.clientWidth,
      height: el.clientHeight,
    };
  };
  // При смене activeIndex — анимируем стартовую точку
useEffect(() => {
  const size = getSize();
  if (!size) return;

  const toAnchor = getStepAnchor(activeIndex, size.height);
  const cardAnchor = getCardAnchor(size.width, size.height);

  const prevFrom = currentFromRef.current;

  if (!prevFrom) {
    currentFromRef.current = toAnchor;
    updatePath(toAnchor, cardAnchor);
    return;
  }

  requestAnimationFrame(() => {
    animateTo(prevFrom, toAnchor, cardAnchor);
  });
}, [activeIndex, getStepAnchor, getCardAnchor, animateTo]);

  // Пересчёт при ресайзе без анимации
  useEffect(() => {
    const recalc = () => {
      const size = getSize();
      if (!size) return;

      const anchor = getStepAnchor(activeIndex, size.height);
      const cardAnchor = getCardAnchor(size.width, size.height);

      // НЕ трогаем во время анимации
      if (animRef.current !== null) return;

      currentFromRef.current = anchor;
      updatePath(anchor, cardAnchor);
    };
    const observer = new ResizeObserver(recalc);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [activeIndex, getStepAnchor, getCardAnchor, updatePath]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <defs>
          <linearGradient
            id="wf-connector-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#000" stopOpacity="1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          fill="none"
          stroke="url(#wf-connector-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* <circle ref={dotStartRef} r={6} fill="#000000" z={10} /> */}
        <circle ref={dotEndRef} r={6} fill="#000000" z={10} />
      </svg>
    </div>
  );
}
