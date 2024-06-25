import * as React from "react";
import { SVGProps } from "react";
export const LoveheartSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#FFB7EB"
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M59.375 43.75c4.656-4.563 9.375-10.031 9.375-17.188A17.187 17.187 0 0 0 51.562 9.375c-5.5 0-9.374 3.125-14.062 7.813-4.688-4.688-8.563-7.813-14.063-7.813A17.187 17.187 0 0 0 6.25 26.563c0 7.187 4.688 12.656 9.375 17.187L37.5 65.625 59.375 43.75Z"
    />
  </svg>
);

export const SmallLoveheartSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FFB7EB"
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 1-4.5 2.5C10.5 4 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7Z"
    />
  </svg>
);
