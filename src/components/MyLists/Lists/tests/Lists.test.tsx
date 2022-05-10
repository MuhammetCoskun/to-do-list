import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Lists from "../Lists";
import { ListType, ListsProps } from "../types";

const mockOnChooseList = jest.fn();
const mockList: ListType[] = [{ id: "1", title: "Test", todos: [] }];
const properties: ListsProps = {
  lists: mockList,
  onChooseList: mockOnChooseList,
};

const customRender = (props: ListsProps) => {
  render(<Lists {...props} />);
};
describe("Lists component", () => {
  test("should render correctly", () => {
    const { asFragment } = render(
      <Lists lists={mockList} onChooseList={mockOnChooseList} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("should call onChooseList callback when list item is clicked", () => {
    customRender({ ...properties });
    const listElement = screen.getByTestId("1");
    userEvent.click(listElement);
    expect(mockOnChooseList).toBeCalledWith("1");
  });
});
