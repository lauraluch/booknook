import { TypographyStyles } from "./fonts";

export interface IMargin {
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
}

export type TypographyVariants = keyof typeof TypographyStyles;
