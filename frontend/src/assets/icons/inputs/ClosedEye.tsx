import * as React from "react";
import { SVGProps } from "react";
const ClosedEyeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#CE93FF" d="M9.057 9.057a2.75 2.75 0 1 0 3.886 3.886" />
      <path
        stroke="#CE93FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.057 9.057a2.75 2.75 0 1 0 3.886 3.886M9.836 4.657A9.56 9.56 0 0 1 11 4.583c6.417 0 9.167 6.417 9.167 6.417a12.06 12.06 0 0 1-1.531 2.457"
      />
      <path
        stroke="#CE93FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.06 6.06A12.399 12.399 0 0 0 1.832 11s2.75 6.417 9.167 6.417a8.928 8.928 0 0 0 4.94-1.476M1.833 1.833l18.334 18.334"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ClosedEyeSVG;
