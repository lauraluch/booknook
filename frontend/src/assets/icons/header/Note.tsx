import * as React from "react";
import { SVGProps } from "react";
const NoteSVG = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.517 2.167H6.5a2.167 2.167 0 0 0-2.167 2.166v17.334A2.167 2.167 0 0 0 6.5 23.833h13a2.167 2.167 0 0 0 2.167-2.166V13.65M2.167 6.5H6.5M2.167 10.833H6.5M2.167 15.167H6.5M2.167 19.5H6.5"
    />
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23.16 6.095a2.301 2.301 0 1 0-3.255-3.254l-5.427 5.43a2.167 2.167 0 0 0-.548.924l-.907 3.11a.542.542 0 0 0 .671.671l3.11-.907c.35-.102.667-.29.925-.548l5.43-5.426Z"
    />
  </svg>
);
export default NoteSVG;
