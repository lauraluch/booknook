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
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <path
      fill="#FFF495"
      stroke="#FFE500"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m22.5 3.75 5.794 11.738L41.25 17.38l-9.375 9.131 2.212 12.9L22.5 33.32l-11.588 6.093 2.213-12.9-9.375-9.13 12.956-1.895L22.5 3.75Z"
    />
  </svg>
);
