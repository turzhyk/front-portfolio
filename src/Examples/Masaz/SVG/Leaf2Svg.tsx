import type { SvgProps } from "./SvgProps";

export const Leaf2Svg = ({ size, cls, thickness }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={cls}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
     <path d="M3.46503 22.6973C4.40399 21.7934 7.18879 18.6363 7.18879 18.6363M12.4162 12.6732C11.793 13.4527 7.18879 18.6363 7.18879 18.6363M7.18879 18.6363C7.18879 18.6363 13.8531 20.7249 16.1207 17.0111C18.3883 13.2973 20.0232 7.77314 20.0232 2.67251C14.3889 6.041 10.3087 6.42573 7.18861 10.0826C4.08243 13.7233 7.18879 18.6363 7.18879 18.6363Z" strokeWidth={thickness} stroke="currentColor" strokeLinecap="round"/>

    </svg>
  );
};
