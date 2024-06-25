import * as React from "react";
import { SVGProps } from "react";
export const BluefireSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#AEE2FF"
      stroke="#00A8F0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M26.563 45.313a7.813 7.813 0 0 0 7.812-7.813c0-4.313-1.563-6.25-3.125-9.375-3.35-6.697-.7-12.669 6.25-18.75 1.563 7.813 6.25 15.313 12.5 20.313 6.25 5 9.375 10.937 9.375 17.187a21.875 21.875 0 1 1-43.75 0c0-3.603 1.353-7.169 3.125-9.375a7.813 7.813 0 0 0 7.813 7.813Z"
    />
  </svg>
);

export const SmallBluefireSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#AEE2FF"
      stroke="#00A8F0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7.001 7.001 0 0 1-11.95 4.95A7 7 0 0 1 5 15c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z"
    />
  </svg>
);
