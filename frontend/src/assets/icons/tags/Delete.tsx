import * as React from "react";
import { SVGProps } from "react";
const DeleteSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#000"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 4.5h13.5M14.25 4.5V15c0 .75-.75 1.5-1.5 1.5h-7.5c-.75 0-1.5-.75-1.5-1.5V4.5M6 4.5V3c0-.75.75-1.5 1.5-1.5h3c.75 0 1.5.75 1.5 1.5v1.5"
    />
  </svg>
);
export default DeleteSVG;
