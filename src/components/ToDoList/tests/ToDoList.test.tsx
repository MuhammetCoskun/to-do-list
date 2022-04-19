import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoList from "..";
import { ToDoListProps } from "../types";

const customRender = (props: ToDoListProps) => {
  render(<ToDoList {...props} />);
};
describe("ToDoList Component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<ToDoList list={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders array elements", () => {
    customRender({
      list: [
        { id: "id", text: "Test text", createdAt: "2022", isDone: false },
        { id: "id2", text: "Test text2", createdAt: "2022", isDone: false },
      ],
    });
    const ulElement = screen.getByRole("list");
    expect(ulElement.childElementCount).toBe(2);
  });
});
