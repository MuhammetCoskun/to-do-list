import React from "react";
import { ListsProps } from "./types";

const Lists: React.FC<ListsProps> = ({ lists, onChooseList }) => {
  return (
    <ul className="mylists-list">
      {lists.map((list) => (
        <li
          key={list.id}
          onClick={() => onChooseList(list.id)}
          className={"list-name active-list"}
        >
          {list.title}
        </li>
      ))}
    </ul>
  );
};

export default Lists;
