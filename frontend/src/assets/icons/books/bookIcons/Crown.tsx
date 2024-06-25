import * as React from "react";
import { SVGProps } from "react";
export const CrownSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#FFF495"
      d="M6.25 12.5 15.625 50h43.75l9.375-37.5L50 34.375 37.5 12.5 25 34.375 6.25 12.5Zm9.375 50h43.75Z"
    />
    <path
      stroke="#FFE500"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M15.625 62.5h43.75M6.25 12.5 15.625 50h43.75l9.375-37.5L50 34.375 37.5 12.5 25 34.375 6.25 12.5Z"
    />
  </svg>
);

export const SmallCrownSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#FFF495" d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7Zm3 16h14H5Z" />
    <path
      stroke="#FFE500"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 20h14M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7Z"
    />
  </svg>
);
