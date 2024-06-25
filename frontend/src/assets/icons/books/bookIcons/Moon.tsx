import * as React from "react";
import { SVGProps } from "react";
export const MoonSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#FFF495"
      stroke="#FFE600"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M37.5 9.375A19.887 19.887 0 1 0 65.625 37.5 28.125 28.125 0 1 1 37.5 9.375Z"
    />
  </svg>
);

export const SmallMoonSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FFF495"
      stroke="#FFE600"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3a6.364 6.364 0 1 0 9 9 9 9 0 1 1-9-9Z"
    />
  </svg>
);
