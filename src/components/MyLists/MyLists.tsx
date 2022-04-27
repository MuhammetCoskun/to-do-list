import React from "react";
import NewListForm from "./NewListForm";
import Lists from "./Lists";
import { MyListsProps } from "./types";

const MyLists: React.FC<MyListsProps> = ({
  onChooseList,
  onAddList,
  lists,
}) => {
  return (
    <>
      <h3 className="mylists-title">My Lists</h3>
      <Lists lists={lists} onChooseList={onChooseList} />
      <NewListForm onAddList={onAddList} />
    </>
  );
};

export default MyLists;
