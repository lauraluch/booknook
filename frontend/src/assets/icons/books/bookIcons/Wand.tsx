import * as React from "react";
import { SVGProps } from "react";
export const WandSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#D693FE"
      stroke="#9155B5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="m67.625 11.375-4-4a3.781 3.781 0 0 0-5.375 0L7.375 58.25a3.781 3.781 0 0 0 0 5.375l4 4a3.75 3.75 0 0 0 5.375 0L67.625 16.75a3.75 3.75 0 0 0 0-5.375Z"
    />
    <path
      stroke="#9155B5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="m43.75 21.875 9.375 9.375"
    />
    <path
      stroke="#FFE607"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M15.625 18.75v12.5M59.375 43.75v12.5M31.25 6.25v6.25M21.875 25h-12.5M65.625 50h-12.5M34.375 9.375h-6.25"
    />
    <path fill="#fff" d="m60.652 8.856 5.182 5.182-12.771 12.77-5.182-5.181z" />
  </svg>
);

export const SmallWandSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#D693FE"
      stroke="#9155B5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.211 1.211 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"
    />
    <path
      stroke="#9155B5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 7 3 3"
    />
    <path
      stroke="#FFE607"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 6v4M19 14v4M10 2v2M7 8H3M21 16h-4M11 3H9"
    />
    <path fill="#fff" d="m19.409 2.834 1.658 1.658L16.98 8.58l-1.658-1.658z" />
  </svg>
);
