import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoForm from "../index";
import { TodoFormProps } from "../types";

const mockOnAddTodo = jest.fn();
const customRender = (props: TodoFormProps) => {
  render(<ToDoForm {...props} />);
};
describe("ToDoForm component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<ToDoForm onAddTodo={mockOnAddTodo} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders error message on invalid input", () => {
    customRender({ onAddTodo: mockOnAddTodo });
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    expect(
      screen.getByText("Please enter a valid to do..")
    ).toBeInTheDocument();
  });
  test("when button clicked it should call onAddTodo callback", () => {
    customRender({ onAddTodo: mockOnAddTodo });
    const inputElement = screen.getByTestId("input");
    const buttonElement = screen.getByTestId("button");
    userEvent.type(inputElement, "Write Tests!");
    userEvent.click(buttonElement);
    expect(mockOnAddTodo).toHaveBeenCalledWith("Write Tests!");
  });
});
