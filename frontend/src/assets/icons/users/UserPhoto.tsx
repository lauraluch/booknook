import * as React from "react";
import { SVGProps } from "react";
const UserPhotoSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={120}
    fill={props.fill || "none"}
    {...props}
  >
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M60 110c27.614 0 50-22.386 50-50S87.614 10 60 10 10 32.386 10 60s22.386 50 50 50Z"
    />
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M60 70c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Z"
    />
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M90 100a30 30 0 1 0-60 0"
    />
  </svg>
);
export default UserPhotoSVG;
