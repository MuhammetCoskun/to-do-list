import React, { useRef, useState } from "react";
import { TodoFormProps } from "./types";

const ToDoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
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
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          placeholder="Enter a to do!"
          ref={todoRef}
          data-testid="input"
        />
      </div>
      <button type="submit" data-testid="button">
        Enter
      </button>
      {!inputIsValid && (
        <p data-testid="paragraph">Please enter a valid to do..</p>
      )}
    </form>
  );
};
//TODO add style and 'data-testid's
export default ToDoForm;
