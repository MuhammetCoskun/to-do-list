import { ListType } from "../MyLists/Lists/types";

export type ShowListProps = {
  listToShow: ListType;
  onAddTodo: (text: string) => void;
  onRemoveTodo: (id: string) => void;
};
