import * as React from "react";
import { SVGProps } from "react";
export const PaintSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <path
      fill="#FFE1B4"
      stroke="#FFB444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M37.5 6.25C20.312 6.25 6.25 20.313 6.25 37.5c0 17.188 14.063 31.25 31.25 31.25 2.894 0 5.15-2.331 5.15-5.275 0-1.366-.563-2.61-1.366-3.516-.906-.903-1.368-2.037-1.368-3.515a5.125 5.125 0 0 1 5.212-5.213h6.238c9.534 0 17.359-7.822 17.359-17.356C68.641 18.788 54.565 6.25 37.5 6.25Z"
    />
    <path
      fill="#14AAFF"
      stroke="#10A9FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M42.188 21.875a1.563 1.563 0 1 0 0-3.125 1.563 1.563 0 0 0 0 3.125Z"
    />
    <path
      fill="#FF79DA"
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M54.688 34.375a1.563 1.563 0 1 0 0-3.125 1.563 1.563 0 0 0 0 3.125Z"
    />
    <path
      fill="#45D664"
      stroke="#45D664"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M26.563 25a1.563 1.563 0 1 0 0-3.125 1.563 1.563 0 0 0 0 3.125Z"
    />
    <path
      fill="#FF6464"
      stroke="#FF6464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M20.313 40.625a1.563 1.563 0 1 0 0-3.125 1.563 1.563 0 0 0 0 3.125Z"
    />
  </svg>
);

export const SmallPaintSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FFE1B4"
      stroke="#FFB444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.641 1.641 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"
    />
    <path
      fill="#14AAFF"
      stroke="#10A9FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <path
      fill="#FF79DA"
      stroke="#FF79DA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <path
      fill="#45D664"
      stroke="#45D664"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <path
      fill="#FF6464"
      stroke="#FF6464"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </svg>
);
