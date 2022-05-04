import React from "react";
import { render } from "@testing-library/react";
import ToDoList from "../ToDoList";
import { ToDoListItemProps } from "../types";

jest.mock(
  "../ToDoListItem",
  () =>
    ({ text, onChangeIsDone, id }: ToDoListItemProps) =>
      <div onClick={() => onChangeIsDone(id)}>{text}</div>
);

const mockOnChangeIsDone = jest.fn();

describe("ToDoList Component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(
      <ToDoList
        list={{
          id: "1",
          title: "title",
          todos: [
            { id: "2", text: "text", createdAt: "2022", isDone: false },
            { id: "3", text: "text2", createdAt: "2022", isDone: false },
          ],
        }}
        onChangeIsDone={mockOnChangeIsDone}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
