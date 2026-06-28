export const OilIcon = ({
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
   <svg width={width} height={height} viewBox="0 0 129 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.9621 15.2503H46.4535M25.9621 15.2503L5.47082 3.20264L2.23535 22.9169L25.9621 32.2264M25.9621 15.2503V32.2264M46.4535 15.2503H63.7093L71.2588 22.9169L106.849 11.7298L116.555 8.67883L121.948 15.2503M106.849 11.7298L79.8867 49.2026H25.9621V32.2264M34.5901 3.20264H46.4535M58.3169 3.20264H46.4535M46.4535 3.20264V15.2503M121.948 28.3931C118.712 34.2344 114.183 45.9169 121.948 45.9169C129.713 45.9169 125.183 34.2344 121.948 28.3931Z" stroke="currentColor" className={cls} stroke-width={thickness} stroke-linecap="round"/>
</svg>

  );
};
