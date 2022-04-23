import { ListType } from "./Lists/types";

export type MyListsProps = {
  onChooseList: (arg: string) => void;
  onAddList: (title: string) => void;
  lists: ListType[];
};
