import * as React from "react";
import { SVGProps } from "react";
export const StarSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#FFF495"
      stroke="#FFE500"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="m37.5 6.25 9.656 19.563 21.594 3.156-15.625 15.218 3.688 21.5L37.5 55.532 18.187 65.688l3.688-21.5L6.25 28.968l21.594-3.155L37.5 6.25Z"
    />
  </svg>
);
export const SmallStarSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FFF495"
      stroke="#FFE500"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
    />
  </svg>
);
