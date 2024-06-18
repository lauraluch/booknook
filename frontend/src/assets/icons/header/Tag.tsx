import * as React from "react";
import { SVGProps } from "react";
const TagSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.635 2.802a2.167 2.167 0 0 0-1.532-.635h-7.77a2.167 2.167 0 0 0-2.166 2.166v7.77c0 .575.228 1.126.634 1.532l9.43 9.43a2.628 2.628 0 0 0 3.705 0l7.128-7.13a2.628 2.628 0 0 0 0-3.704l-9.43-9.43Z"
    />
    <path
      fill={props.stroke || "#000"}
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.125 8.667a.542.542 0 1 0 0-1.084.542.542 0 0 0 0 1.084Z"
    />
  </svg>
);
export default TagSVG;
