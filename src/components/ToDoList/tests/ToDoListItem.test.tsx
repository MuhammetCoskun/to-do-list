import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoListItem from "../ToDoListItem";
import { ToDoListItemProps } from "../types";

const customRender = (props: ToDoListItemProps) => {
  render(<ToDoListItem {...props} />);
};

const mockOnRemove = jest.fn();

describe("ToDoList Component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<ToDoListItem id="id" text="text" />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("when list item clicked it should call onRemove callback with id prop", () => {
    customRender({ id: "id", text: "text", onRemove: mockOnRemove });
    const listItemElement = screen.getByRole("listitem");
    userEvent.click(listItemElement);
    expect(mockOnRemove).toHaveBeenCalledWith("id");
  });
});