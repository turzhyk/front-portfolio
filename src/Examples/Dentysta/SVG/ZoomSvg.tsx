import type { SvgProps } from "./SvgProps";

export const ZoomSvg = ({ size, cls, thickness }: SvgProps) => {
  return (
  <svg width={size} height={size} className={cls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={thickness}>
<circle cx="9.67857" cy="9.67857" r="7.55089" transform="rotate(-45 9.67857 9.67857)" stroke="currentColor"/>
<path d="M4.40363 8.5C4.61907 7.53146 5.10357 6.61071 5.85715 5.85714C6.61071 5.10357 7.53146 4.61907 8.5 4.40363" stroke="currentColor" strokeLinecap="round"/>
<rect x="14.6071" y="15.4286" width="1.16168" height="9.2934" rx="0.580838" transform="rotate(-45 14.6071 15.4286)" stroke="currentColor"/>
</svg>

  );
};
