import React from "react";
import { ToDoListItemProps } from "./types";

const ToDoListItem: React.FC<ToDoListItemProps> = ({ id, text, onRemove }) => {
  const clickHandler = () => {
    onRemove(id);
  };

  return (
    <div className={"todo-task-item"}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        <span className={"checkbox"}></span>
        {text}
      </label>
    </div>
  );
};

export default ToDoListItem;
