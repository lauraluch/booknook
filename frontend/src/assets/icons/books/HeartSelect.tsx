import * as React from "react";
import { SVGProps } from "react";

export interface ICustomSVG extends SVGProps<SVGSVGElement> {
  selected: boolean;
}

const HeartSelectSVG = (props: ICustomSVG) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7Z"
    />
    <path
      fill={props.selected ? "#CE93FF" : "#FFFFFF"}
      stroke={props.selected ? "#CE93FF" : "#FFFFFF"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 12.5c.745-.73 1.5-1.605 1.5-2.75A2.75 2.75 0 0 0 14.25 7c-.88 0-1.5.25-2.25 1-.75-.75-1.37-1-2.25-1A2.75 2.75 0 0 0 7 9.75c0 1.15.75 2.025 1.5 2.75L12 16l3.5-3.5Z"
    />
  </svg>
);
export default HeartSelectSVG;
