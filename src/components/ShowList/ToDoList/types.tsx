import { ListType } from "../../MyLists/Lists/types";

export type ToDoListItemType = {
  id: string;
  text: string;
  createdAt: string;
  isDone: boolean;
  doneAt?: string;
};

export type ToDoListItemProps = {
  id: string;
  key?: string;
  text: string;
  isDone: boolean;
  onChangeIsDone: (id: string) => void;
};

export type ToDoListProps = {
  list: ListType;
  onChangeIsDone: (id: string) => void;
};
