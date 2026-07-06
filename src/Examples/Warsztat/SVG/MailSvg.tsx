import type { SvgProps } from "./SvgProps";

export const MailSvg = ({ size, cls, thickness }: SvgProps) => {
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
      <path d="M2 6H22V19H2V6Z" stroke="currentColor" />
      <path
        d="M2 6L12.5 13L22 6M2 19L8.5 13M16.5 13L22 19"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
};
