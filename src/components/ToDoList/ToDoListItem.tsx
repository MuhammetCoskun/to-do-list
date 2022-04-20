import React from "react";
import { ToDoListItemProps } from "./types";

const ToDoListItem: React.FC<ToDoListItemProps> = ({ id, text, onRemove }) => {
  const clickHandler = () => {
    onRemove?.(id);
  };

  return (
    <>
      <li onClick={clickHandler}>{text}</li>
    </>
  );
};

export default ToDoListItem;
