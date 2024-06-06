import theme from "@globals/theme";

export interface GetBackgroudProps {
  disabled?: boolean;
  hasError?: boolean;
  selected?: boolean;
}

export function getBackgroundColor({ disabled, hasError }: GetBackgroudProps) {
  if (hasError) return theme.colors.role.errorLightest;
  else if (disabled) return theme.colors.layout.surface;
  return theme.colors.layout.white;
}

export function getBorderColor({ hasError, selected }: GetBackgroudProps) {
  if (selected) return theme.colors.role.primary;
  if (hasError) return theme.colors.role.error;
  return theme.colors.border;
}
