import { useEffect, useRef, useState } from "react";

export default function RadialProgress({
  size = 150,
  stroke = 10,
  value = 75,
  delay = "0s",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  // наблюдение за появлением во viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // анимация заполнения
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 900; // ms
    const startTime = performance.now();

    function animate(time: number) {
      const progressTime = (time - startTime) / duration;
      const current = Math.min(progressTime, 1) * value;

      setProgress(current);

      if (progressTime < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [visible, value]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="jet" ref={ref} style={{ width: size, height: size,position:"relative" }}>
      <svg width={size} height={size} style={{ overflow: "visible" }}>
        {/* фон */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#eee"
          strokeWidth={stroke}
          fill="none"
        />

        {/* прогресс */}
        <circle
          cx={size / 2}
          cy={size / 2}
          className="glow"
          r={radius}
          stroke="#5954E3"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
             transition: "stroke-dashoffset 0.3s linear, stroke-width 0.3s ease",
            animationDelay: delay,
          }}
        />
      </svg>

      {/* текст */}
      <div className="text">
        <span>{Math.round(progress)}</span>
        <span className="sub">/100</span>
      </div>
    </div>
  );
}
