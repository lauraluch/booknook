import { ITag } from "src/types/tag/ITag";

export function makeCreateTagForm(): ITag {
  return {
    id: 0,
    title: "",
    color: "",
  };
}
