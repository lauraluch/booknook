import * as React from "react";
import { SVGProps } from "react";
export const CoffeeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      stroke="#A7A7A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M53.125 25h3.125a12.5 12.5 0 0 1 0 25h-3.125"
    />
    <path
      fill="#E6E6E6"
      stroke="#A7A7A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M9.375 25h43.75v28.125a12.5 12.5 0 0 1-12.5 12.5h-18.75a12.5 12.5 0 0 1-12.5-12.5V25Z"
    />
    <path
      stroke="#CACACA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M18.75 6.25v6.25M31.25 6.25v6.25M43.75 6.25v6.25"
    />
  </svg>
);

export const SmallCoffeeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#A7A7A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8h1a4 4 0 1 1 0 8h-1"
    />
    <path
      fill="#E6E6E6"
      stroke="#A7A7A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z"
    />
    <path
      stroke="#CACACA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 2v2M10 2v2M14 2v2"
    />
  </svg>
);
