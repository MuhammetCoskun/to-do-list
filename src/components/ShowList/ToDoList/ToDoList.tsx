import React from "react";
import ToDoListItem from "./ToDoListItem";
import { ToDoListProps } from "./types";

const ToDoList: React.FC<ToDoListProps> = ({ list, onChangeIsDone }) => {
  return (
    <div className={"todo-tasks-container"}>
      {list.todos.map((item) => (
        <ToDoListItem
          key={item.id}
          id={item.id}
          text={item.text}
          onChangeIsDone={onChangeIsDone}
          isDone={item.isDone}
        />
      ))}
    </div>
  );
};

export default ToDoList;
