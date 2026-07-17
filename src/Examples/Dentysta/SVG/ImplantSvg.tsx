import type { SvgProps } from "./SvgProps";

export const ImplantSvg = ({ size, cls, thickness }: SvgProps) => {
  return (
  <svg width={size} height={size} className={cls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={thickness}>
<rect x="3" y="4" width="18" height="7" rx="2" stroke="currentColor"/>
<rect x="8" y="11" width="8" height="5" rx="1" stroke="currentColor"/>
<rect x="8" y="16" width="8" height="5" rx="1" stroke="currentColor"/>
</svg>

  );
};
