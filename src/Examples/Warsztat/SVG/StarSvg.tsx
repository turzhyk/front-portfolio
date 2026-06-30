import type { SvgProps } from "./SvgProps";

export const StarSvg = ({ size, cls, thickness }: SvgProps) => {
  return (
    <svg
    
      className={cls}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1L15.0647 7.78179L22.4616 8.60081L16.9588 13.6112L18.4656 20.8992L12 17.214L5.53436 20.8992L7.04119 13.6112L1.53838 8.60081L8.93529 7.78179L12 1Z" fill="currentColor"/>
    </svg>
  );
};
