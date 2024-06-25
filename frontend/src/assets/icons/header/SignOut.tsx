import * as React from "react";
import { SVGProps } from "react";
const SignOutSVG = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.25 19.25H4.583a1.833 1.833 0 0 1-1.833-1.833V4.583A1.833 1.833 0 0 1 4.583 2.75H8.25M14.667 15.583 19.25 11l-4.583-4.583M19.25 11h-11"
    />
  </svg>
);
export default SignOutSVG;
