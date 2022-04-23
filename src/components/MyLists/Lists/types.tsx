import { ToDoListItemType } from "../../ShowList/ToDoList/types";

export type ListType = {
  id: string;
  title: string;
  todos: ToDoListItemType[];
};

export type ListsProps = {
  lists: ListType[];
  onChooseList: (arg: string) => void;
};
