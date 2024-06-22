import * as React from "react";
import { SVGProps } from "react";
const SmallNoteSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M12.283 1.833H5.5a1.833 1.833 0 0 0-1.833 1.834v14.666A1.833 1.833 0 0 0 5.5 20.167h11a1.833 1.833 0 0 0 1.833-1.834V11.55M1.833 5.5H5.5M1.833 9.167H5.5M1.833 12.833H5.5M1.833 16.5H5.5" />
      <path d="M19.597 5.157a1.947 1.947 0 0 0-2.754-2.753L12.25 6.998a1.833 1.833 0 0 0-.463.783l-.768 2.63a.458.458 0 0 0 .569.569l2.63-.767c.296-.087.566-.246.783-.464l4.596-4.592Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SmallNoteSVG;
