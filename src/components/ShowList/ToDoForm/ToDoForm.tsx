import React, { useRef, useState } from "react";
import { ToDoFormProps } from "./types";

const ToDoForm: React.FC<ToDoFormProps> = ({
  onAddTodo,
  onRemoveTodo,
  onRemoveList,
}) => {
  const todoRef = useRef<HTMLInputElement>(null);
  const [inputIsValid, setInputIsValid] = useState<boolean>(true);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoRef.current!.value;
    if (enteredTodo?.trim().length === 0) {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
    onAddTodo(enteredTodo);
    todoRef.current!.value = "";
  };

  return (
    <div className={"task-form"}>
      <form onSubmit={submitHandler}>
        <input
          className="new todo"
          type="text"
          placeholder="Enter a new to do"
          aria-label="new to do name"
          ref={todoRef}
          data-testid="input"
        />
        <button
          aria-label="create new to do"
          data-testid="btn-create"
          className="btn create"
        >
          +
        </button>
      </form>
      <div className="delete-item-container">
        <button
          className="btn delete"
          onClick={onRemoveTodo}
          data-testid="btn-delete-todo"
        >
          Clear completed tasks!
        </button>
        <button
          className="btn delete"
          onClick={onRemoveList}
          data-testid="btn-delete-list"
        >
          Delete list!
        </button>
      </div>
      {!inputIsValid && (
        <p data-testid="paragraph">Please enter a valid to do..</p>
      )}
    </div>
  );
};

export default ToDoForm;
