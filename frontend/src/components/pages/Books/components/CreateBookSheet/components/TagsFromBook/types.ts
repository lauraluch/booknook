export interface TagOption {
  value: number;
  label: string;
  color: string;
}

export interface ISelectOption {
  label?: string;
  value: string | number;
  description: string;
  __isNew__?: boolean;
}
