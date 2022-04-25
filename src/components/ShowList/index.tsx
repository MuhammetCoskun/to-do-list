import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { ShowListProps } from "./types";

const ShowList: React.FC<ShowListProps> = ({
  listToShow,
  onAddTodo,
  onRemoveTodo,
  onRemoveList,
  onChangeIsDone,
}) => {
  return (
    <div className="todo-list-show">
      <div className={"list-header"}>
        <h2 className={"list-title"}>{listToShow.title}</h2>
        {listToShow.todos.length > 0 && (
          <p className="todo-count">
            {listToShow.todos.length} tasks remaining!
          </p>
        )}
      </div>
      <div className="todo-body">
        <ToDoList list={listToShow} onChangeIsDone={onChangeIsDone} />
        <ToDoForm
          onAddTodo={onAddTodo}
          onRemoveTodo={onRemoveTodo}
          onRemoveList={onRemoveList}
        />
      </div>
    </div>
  );
};

export default ShowList;
