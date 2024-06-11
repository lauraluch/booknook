import * as React from "react";
import { SVGProps } from "react";
const CloseSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-x"
    {...props}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
export default CloseSVG;
