import { ListProps } from "./types";

export default class {
  lists: ListProps = {
    menu: [
      {
        id: "copy",
        value: "copy",
        label: "複製する",
        faIcon: { icon: ["fas", "copy"] }
      },
      {
        id: "delete",
        value: "delete",
        label: "削除する",
        faIcon: { icon: ["fas", "trash"] }
      }
    ]
  };
}
