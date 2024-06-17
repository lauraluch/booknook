import * as React from "react";
import { SVGProps } from "react";
const FavoriteSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="none"
    {...props}
  >
    <path
      fill="#FF7596"
      stroke="#FF3E6C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M22.862 16.772c1.8-1.764 3.625-3.88 3.625-6.646A6.646 6.646 0 0 0 19.84 3.48c-2.127 0-3.625.604-5.438 2.417-1.812-1.813-3.31-2.417-5.437-2.417a6.646 6.646 0 0 0-6.646 6.646c0 2.779 1.812 4.894 3.625 6.646l8.458 8.458 8.459-8.458Z"
    />
  </svg>
);
export default FavoriteSVG;
