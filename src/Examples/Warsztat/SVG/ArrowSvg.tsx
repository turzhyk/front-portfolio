import type { SvgProps } from "./SvgProps";

export const ArrowSvg = ({ size, cls, thickness }: SvgProps) => {
  return (
    <svg
      strokeWidth={thickness}
      className={cls}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
     <path d="M3 17L12.4737 7L21 17" stroke="currentColor"/>
    </svg>
  );
};
