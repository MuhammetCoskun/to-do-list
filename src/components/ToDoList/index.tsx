import React from "react";
import ToDoListItem from "./ToDoListItem";
import { ToDoListProps } from "./types";

const ToDoList: React.FC<ToDoListProps> = ({ list, onRemove }) => {
  return (
    <ul>
      {list.map((item) => (
        <ToDoListItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
