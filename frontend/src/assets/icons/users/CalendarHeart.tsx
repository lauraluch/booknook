import * as React from "react";
import { SVGProps } from "react";
const CalendarHeartSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#BAB0C2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7M8 2v4M16 2v4"
    />
    <path
      fill="#FF529B"
      stroke="#FF2883"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-3.44 0c-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74v-.01Z"
    />
  </svg>
);
export default CalendarHeartSVG;
