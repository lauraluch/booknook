import * as React from "react";
import { SVGProps } from "react";
const SmallCheckSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.333 2.5 3.75 7.083 1.667 5"
    />
  </svg>
);
export default SmallCheckSVG;
