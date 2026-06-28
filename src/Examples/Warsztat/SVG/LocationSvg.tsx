export const LocationSvg = ({
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
   <svg className={cls} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 8.80073C20 17.7619 12 23 12 23C12 23 4 18.2857 4 8.80073C4 4.49251 7.58172 1 12 1C16.4183 1 20 4.49251 20 8.80073Z" strokeWidth={thickness} stroke="currentColor"/>
<circle cx="12" cy="9" r="4" fill="currentColor"/>
</svg>

  );
};