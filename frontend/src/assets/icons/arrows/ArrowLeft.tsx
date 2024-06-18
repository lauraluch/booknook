import * as React from "react";
import { SVGProps } from "react";
const ArrowLeftSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 13.458 3.542 8.5 8.5 3.542M13.458 8.5H3.542"
    />
  </svg>
);
export default ArrowLeftSVG;
