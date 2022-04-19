import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ShowToDos from "./components/ShowToDos";

const App: React.FC = () => {
  const addTodoHandler = (text: string) => {
    console.log(text);
  };
  return (
    <div className="App">
      <ToDoForm onAddTodo={addTodoHandler} />
      <ShowToDos />
    </div>
  );
};

export default App;
