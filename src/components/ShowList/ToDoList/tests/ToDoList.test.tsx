import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoList from "..";
import { ToDoListProps } from "../types";

const mockOnRemove = jest.fn();
const customRender = (props: ToDoListProps) => {
  render(<ToDoList {...props} />);
};
describe("ToDoList Component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(
      <ToDoList
        list={{ id: "1", title: "title", todos: [] }}
        onRemove={mockOnRemove}
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
      onRemove: mockOnRemove,
    });
    const ulElement = screen.getByRole("list");
    expect(ulElement.childElementCount).toBe(2);
  });
});
