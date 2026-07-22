import type { SvgProps } from "./SvgProps";

export const HeartSvg = ({ size, cls, thickness }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={cls}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9346 4.5C19.4427 4.5 21.4999 6.59534 21.5 9.20996V9.45508C21.4999 10.7736 20.9902 12.0357 20.0879 12.9639L12 21.2822L3.91211 12.9639C3.00975 12.0357 2.50007 10.7736 2.5 9.45508V9.20996L2.50586 8.9668C2.62879 6.46663 4.63552 4.5 7.06543 4.5C8.44679 4.5 9.75749 5.14607 10.626 6.2627L11.6055 7.52148L12 8.02832L12.3945 7.52148L13.374 6.2627C14.2425 5.14609 15.5531 4.50002 16.9346 4.5Z"
        stroke="currentColor"
        strokeWidth={thickness}
      />
    </svg>
  );
};
