import type { SvgProps } from "./SvgProps";

export const Divider = ({ size, cls, thickness }: SvgProps) => {
  return (
    <svg
      width={size / 3}
      height={size}
      className={cls}
      viewBox="-5 -5 20 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        d="M1.41422 0.707092L11.4142 10.7071L1.41422 20.7071L11.4142 30.7071L1.41422 40.7071L11.4142 50.7071L1.41422 60.7071L11.4142 70.7071L1.41422 80.7071L11.4142 90.7071L1.41422 100.707L11.4142 110.707L1.41422 "
        stroke="currentColor"
        stroke-width={thickness}
      />
    </svg>
  );
};
