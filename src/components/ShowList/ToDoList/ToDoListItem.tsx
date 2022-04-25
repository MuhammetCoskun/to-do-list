import React from "react";
import { ToDoListItemProps } from "./types";

const ToDoListItem: React.FC<ToDoListItemProps> = ({
  id,
  text,
  isDone,
  onChangeIsDone,
}) => {
  const clickHandler = () => {
    onChangeIsDone(id);
  };

  return (
    <div className={"todo-task-item"}>
      <input type="checkbox" id={id} defaultChecked={isDone} />
      <label htmlFor={id} onClick={clickHandler}>
        <span className={"checkbox"}></span>
        {text}
      </label>
    </div>
  );
};

export default ToDoListItem;
