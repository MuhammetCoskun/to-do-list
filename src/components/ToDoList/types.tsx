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
  onRemove?: (id: string) => void;
};

export type ToDoListProps = {
  list: ToDoListItemType[];
  onRemove?: (id: string) => void;
};
