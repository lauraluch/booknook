import * as React from "react";
import { SVGProps } from "react";
export const CloudSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#C2C2C2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M54.688 59.375H28.125A21.875 21.875 0 1 1 49.094 31.25h5.593a14.063 14.063 0 0 1 0 28.125Z"
    />
  </svg>
);
export const SmallCloudSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#C2C2C2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
    />
  </svg>
);
