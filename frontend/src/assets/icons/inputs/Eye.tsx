import * as React from "react";
import { SVGProps } from "react";
const EyeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#CE93FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.833 11S4.583 4.583 11 4.583 20.167 11 20.167 11s-2.75 6.417-9.167 6.417S1.833 11 1.833 11Z"
    />
    <path
      fill="#CE93FF"
      stroke="#CE93FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 13.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
    />
  </svg>
);
export default EyeSVG;
