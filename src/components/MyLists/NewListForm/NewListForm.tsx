import React, { useRef, useState } from "react";
import { NewListFormProps } from "./types";

const NewListForm: React.FC<NewListFormProps> = ({ onAddList }) => {
  const newListRef = useRef<HTMLInputElement>(null);
  const [inputIsValid, setInputIsValid] = useState<boolean>(true);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newList = newListRef.current!.value;
    if (newList.trim().length === 0) {
      setInputIsValid(false);
      return;
    }
    onAddList(newList);
    newListRef.current!.value = "";
    setInputIsValid(true);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a new List"
          aria-label="new list name"
          ref={newListRef}
          data-testid="input"
          className="new list"
        />
        <button
          aria-label="create new list"
          data-testid="button"
          className="btn create"
        >
          +
        </button>
      </form>
      {!inputIsValid && (
        <p data-testid="paragraph">List name can not be empty..</p>
      )}
    </>
  );
};

export default NewListForm;
