import * as React from "react";
import { SVGProps } from "react";
export const FlowerSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#FFB7EB"
      d="M37.5 23.438A14.063 14.063 0 1 1 51.563 37.5M37.5 23.437A14.062 14.062 0 1 0 23.437 37.5M37.5 23.437v4.688ZM23.437 37.5A14.063 14.063 0 1 0 37.5 51.563M23.437 37.5h4.688Zm28.125 0A14.063 14.063 0 1 1 37.5 51.563M51.563 37.5h-4.688ZM37.5 51.563v-4.688Z"
    />
    <path
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M37.5 23.438A14.063 14.063 0 1 1 51.563 37.5M37.5 23.437A14.062 14.062 0 1 0 23.437 37.5M37.5 23.437v4.688M51.563 37.5A14.063 14.063 0 1 1 37.5 51.563M51.563 37.5h-4.688m-23.438 0A14.063 14.063 0 1 0 37.5 51.563M23.437 37.5h4.688M37.5 51.563v-4.688"
    />
    <path
      fill="#FFF495"
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M37.5 46.875a9.375 9.375 0 1 0 0-18.75 9.375 9.375 0 1 0 0 18.75Z"
    />
    <path
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="m25 50 4.688-4.688M45.313 29.688 50 25M25 25l4.688 4.688M45.313 45.313 50 50"
    />
  </svg>
);

export const SmallFlowerSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FFB7EB"
      d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9 7.5ZM7.5 12a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9 7.5Zm9 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15h1.5ZM12 16.5V15v1.5Z"
    />
    <path
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m4.5 3a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-7.5 0a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m3 4.5V15"
    />
    <path
      fill="#FFF495"
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8 16 1.5-1.5M14.5 9.5 16 8M8 8l1.5 1.5M14.5 14.5 16 16"
    />
  </svg>
);
