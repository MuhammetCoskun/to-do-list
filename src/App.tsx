import "./App.css";
import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { ToDoListItemType } from "./components/ToDoList/types";

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<ToDoListItemType[]>([]);

  const addTodoHandler = (text: string) => {
    const todo: ToDoListItemType = {
      id: Math.random().toString(), //use Nanoid here
      text: text,
      createdAt: new Date().toLocaleString(),
      isDone: false,
    };
    setTodoList((prevList) => [...prevList, todo]);
  };

  const removeTodoHandler = (id: string) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <ToDoForm onAddTodo={addTodoHandler} />
      <ToDoList list={todoList} onRemove={removeTodoHandler} />
    </div>
  );
};

export default App;
