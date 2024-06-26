import * as React from "react";
import { SVGProps } from "react";
const StarSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.stroke || "#868686"}
      stroke={props.stroke || "#868686"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.103 3.817a1 1 0 0 1 1.794 0l1.96 3.972a1 1 0 0 0 .753.547l4.386.641a1 1 0 0 1 .553 1.706l-3.172 3.09a1 1 0 0 0-.288.885l.748 4.365a1 1 0 0 1-1.45 1.054l-3.921-2.062a1 1 0 0 0-.931 0l-3.921 2.062a1 1 0 0 1-1.451-1.054l.748-4.365a1 1 0 0 0-.288-.885l-3.172-3.09a1 1 0 0 1 .553-1.706l4.386-.641a1 1 0 0 0 .752-.547l1.961-3.972Z"
    />
  </svg>
);
export default StarSVG;
