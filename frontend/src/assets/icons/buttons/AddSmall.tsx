import * as React from "react";
import { SVGProps } from "react";
const AddSmallSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.583 11h12.834M11 4.583v12.834"
    />
  </svg>
);
export default AddSmallSVG;
