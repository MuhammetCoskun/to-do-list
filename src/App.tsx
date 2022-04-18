import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ShowToDos from "./components/ShowToDos";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ToDoForm />
      <ShowToDos />
    </div>
  );
};

export default App;
