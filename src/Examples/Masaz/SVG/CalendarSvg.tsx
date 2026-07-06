import React from 'react'

export const CalendarSvg = ({
  width,
  height,
  cls,
  thickness
}: {
  width: string;
  height: string;
  cls: string;
  thickness:number;
})  => {
  return (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width={thickness}
    className={cls}
    stroke-linecap="round"
    stroke-linejoin="round" >

    <rect x="3" y="5" width="18" height="16" rx="2"/>

    <path d="M3 9H21"/>

    <path d="M8 3V7"/>
    <path d="M16 3V7"/>

    <path d="M8 13H8.01"/>
    <path d="M12 13H12.01"/>
    <path d="M16 13H16.01"/>

    <path d="M8 17H8.01"/>
    <path d="M12 17H12.01"/>
    <path d="M16 17H16.01"/>
</svg>
  )
}
