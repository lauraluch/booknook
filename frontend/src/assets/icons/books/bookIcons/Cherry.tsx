import * as React from "react";
import { SVGProps } from "react";
export const CherrySVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      stroke="#45D664"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M21.875 43.75C31.938 34.656 35.281 16.406 37.5 6.25c5.188 7.438 15.438 28.125 15.625 37.5"
    />
    <path
      fill="#FFA5A5"
      stroke="#FF6464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M6.25 53.125a15.625 15.625 0 1 0 31.25 0c0-8.625-7.813-15.625-15.625-9.375-7.813-6.25-15.625.75-15.625 9.375ZM37.5 53.125a15.625 15.625 0 1 0 31.25 0c0-8.625-7.813-15.625-15.625-9.375-7.813-6.25-15.625.75-15.625 9.375Z"
    />
    <path
      fill="#BAFFC9"
      stroke="#45D664"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M68.75 28.125c-13.406 0-22.313-7.281-31.25-21.875 17.844 0 31.25 14.594 31.25 21.875Z"
    />
  </svg>
);

export const SmallCherrySVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#45D664"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"
    />
    <path
      fill="#FFA5A5"
      stroke="#FF6464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 17a5 5 0 1 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3ZM12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
    />
    <path
      fill="#BAFFC9"
      stroke="#45D664"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"
    />
  </svg>
);
