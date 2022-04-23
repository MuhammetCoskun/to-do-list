import { useState } from "react";
import MyLists from "./components/MyLists";
import ShowList from "./components/ShowList";
import { ListType } from "./components/MyLists/Lists/types";
import { ToDoListItemType } from "./components/ShowList/ToDoList/types";
import { nanoid } from "nanoid";

const App: React.FC = () => {
  const [myLists, setMyLists] = useState<ListType[]>([]);
  const [activeListIndex, setActiveListIndex] = useState<number>(-1);

  const chooseListHandler = (id: string) => {
    const index = myLists.findIndex((list) => list.id === id);
    setActiveListIndex(index);
  };

  const addToListHandler = (title: string) => {
    const newList: ListType = {
      id: nanoid(10),
      title,
      todos: [],
    };
    setMyLists((prevLists) => [...prevLists, newList]);
  };

  const addTodoHandler = (text: string) => {
    const todo: ToDoListItemType = {
      id: nanoid(10),
      text: text,
      createdAt: new Date().toLocaleString(),
      isDone: false,
    };
    setMyLists((prevLists) => {
      prevLists[activeListIndex] = {
        ...prevLists[activeListIndex],
        todos: [...prevLists[activeListIndex].todos, todo],
      };
      return [...prevLists];
    });
  };

  const removeTodoHandler = (id: string) => {
    setMyLists((prevLists) => {
      const remainingTodos = prevLists[activeListIndex].todos.filter(
        (todo) => todo.id !== id
      );
      prevLists[activeListIndex] = {
        ...prevLists[activeListIndex],
        todos: [...remainingTodos],
      };
      return [...prevLists];
    });
  };

  return (
    <div className="App">
      <h1 className="title">TO DO LIST</h1>
      <div className="lists">
        <div className="mylists">
          <MyLists
            onChooseList={chooseListHandler}
            onAddList={addToListHandler}
            lists={myLists}
          />
        </div>
        <div className={"todo-list"}>
          {myLists[activeListIndex] && (
            <ShowList
              listToShow={myLists[activeListIndex]}
              onAddTodo={addTodoHandler}
              onRemoveTodo={removeTodoHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
