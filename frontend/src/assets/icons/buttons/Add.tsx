import * as React from "react";
import { SVGProps } from "react";
const AddSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.667 16h18.666M16 6.667v18.666"
    />
  </svg>
);
export default AddSVG;
