import React from "react";
import { render } from "@testing-library/react";
import ShowList from "../ShowList";
import { ToDoListProps } from "../ToDoList/types";

const mockOnAddTodo = jest.fn();
const mockOnRemoveTodo = jest.fn();
const mockOnRemoveList = jest.fn();
const mockOnChangeIsDone = jest.fn();

jest.mock(
  "../ToDoList/ToDoList",
  () =>
    ({ list, onChangeIsDone }: ToDoListProps) =>
      (
        <div id={list.id}>
          {list.todos.map((todo) => (
            <p key={todo.id}>{todo.text}</p>
          ))}
        </div>
      )
);

jest.mock("../ToDoForm/ToDoForm", () => () => (
  <div>Form Input and Buttons</div>
));

describe("ShowList component", () => {
  test("should render correctly", () => {
    const { asFragment } = render(
      <ShowList
        onAddTodo={mockOnAddTodo}
        onRemoveTodo={mockOnRemoveTodo}
        onChangeIsDone={mockOnChangeIsDone}
        onRemoveList={mockOnRemoveList}
        listToShow={{
          id: "1",
          title: "title",
          todos: [
            { id: "2", text: "text1", createdAt: "2022", isDone: false },
            { id: "3", text: "text2", createdAt: "2022", isDone: false },
          ],
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
