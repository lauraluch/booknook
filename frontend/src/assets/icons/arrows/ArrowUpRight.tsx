import * as React from "react";
import { SVGProps } from "react";
const ArrowUpRightSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.958 4.958h7.084v7.084M4.958 12.042l7.084-7.084"
    />
  </svg>
);
export default ArrowUpRightSVG;
