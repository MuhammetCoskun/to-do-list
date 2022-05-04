import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoForm from "../ToDoForm";
import { ToDoFormProps } from "../types";

const mockOnAddTodo = jest.fn();
const mockOnRemoveTodo = jest.fn();
const mockOnRemoveList = jest.fn();

const properties = {
  onAddTodo: mockOnAddTodo,
  onRemoveTodo: mockOnRemoveTodo,
  onRemoveList: mockOnRemoveList,
};

const customRender = (props: ToDoFormProps) => {
  render(<ToDoForm {...props} />);
};

describe("ToDoForm component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(
      <ToDoForm
        onAddTodo={mockOnAddTodo}
        onRemoveTodo={mockOnRemoveTodo}
        onRemoveList={mockOnRemoveList}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders error message on invalid input", () => {
    customRender({
      ...properties,
    });
    const buttonElement = screen.getByTestId("btn-create");
    userEvent.click(buttonElement);
    expect(
      screen.getByText("Please enter a valid to do..")
    ).toBeInTheDocument();
  });
  test("should call onAddTodo callback when create button clicked it", () => {
    customRender({
      ...properties,
    });
    const inputElement = screen.getByTestId("input");
    const buttonElement = screen.getByTestId("btn-create");
    userEvent.type(inputElement, "Write Tests!");
    userEvent.click(buttonElement);
    expect(mockOnAddTodo).toHaveBeenCalledWith("Write Tests!");
  });
  test("should call onRemoveTodo callback when clear completed task button clicked", () => {
    customRender({
      ...properties,
    });
    const clearToDoButton = screen.getByTestId("btn-delete-todo");
    userEvent.click(clearToDoButton);
    expect(mockOnRemoveTodo).toBeCalled();
  });
  test("should call onRemoveList callback when delete list button clicked", () => {
    customRender({
      ...properties,
    });
    const clearListButton = screen.getByTestId("btn-delete-list");
    userEvent.click(clearListButton);
    expect(mockOnRemoveList).toBeCalled();
  });
});
