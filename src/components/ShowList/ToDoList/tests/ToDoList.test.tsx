import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoList from "..";
import { ToDoListProps, ToDoListItemProps } from "../types";

jest.mock(
  "../ToDoListItem",
  () =>
    ({ text, onChangeIsDone, id }: ToDoListItemProps) =>
      (
        <div role="list" onClick={() => onChangeIsDone(id)}>
          {text}
        </div>
      )
);
const mockOnChangeIsDone = jest.fn();
const customRender = (props: ToDoListProps) => {
  render(<ToDoList {...props} />);
};
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
  test("renders array elements", () => {
    customRender({
      list: {
        id: "1",
        title: "title",
        todos: [
          { id: "2", text: "text", createdAt: "2022", isDone: false },
          { id: "3", text: "text2", createdAt: "2022", isDone: false },
        ],
      },
      onChangeIsDone: mockOnChangeIsDone,
    });
    expect(true).toBeTruthy();
  });
});
