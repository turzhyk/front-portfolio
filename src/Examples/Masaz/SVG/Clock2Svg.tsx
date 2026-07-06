export const Clock2Svg = ({
  width,
  height,
  cls,
  thickness,
}: {
  width: string;
  height: string;
  cls: string;
  thickness: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.93 3.47V10.67L15.73 13.87M21.07 10.93C21.07 5.34 16.53 0.8 10.93 0.8C5.34 0.8 0.8 5.34 0.8 10.93C0.8 16.53 5.34 21.07 10.93 21.07C16.46 21.07 20.96 16.63 21.07 11.11L21.07 10.93Z"
        className={cls}
        stroke="currentColor"
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};