import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewListForm from "../index";
import { NewListFormProps } from "../types";

const mockOnAddList = jest.fn();
const customRender = (props: NewListFormProps) => {
  render(<NewListForm {...props} />);
};
describe("NewListForm component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<NewListForm onAddList={mockOnAddList} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders error message on invalid input", () => {
    customRender({ onAddList: mockOnAddList });
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    expect(
      screen.getByText("List name can not be empty..")
    ).toBeInTheDocument();
  });
  test("when button clicked it should call onAddList callback", () => {
    customRender({ onAddList: mockOnAddList });
    const inputElement = screen.getByTestId("input");
    const buttonElement = screen.getByTestId("button");
    userEvent.type(inputElement, "New List!");
    userEvent.click(buttonElement);
    expect(mockOnAddList).toHaveBeenCalledWith("New List!");
  });
});
