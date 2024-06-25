import * as React from "react";
import { SVGProps } from "react";
export const DefaultSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      stroke="#BFB0C2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="m28.125 28.125 15.625 37.5 5.625-16.25 16.25-5.625-37.5-15.625Z"
    />
    <path
      stroke="#E0D7E1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="m22.5 6.875 2.5 9.063M15.938 25l-9.063-2.5M43.75 12.813 37.5 18.75M18.75 37.5l-5.938 6.25"
    />
  </svg>
);
