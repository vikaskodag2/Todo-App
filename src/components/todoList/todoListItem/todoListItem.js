import React from "react";
import { useDispatch } from "react-redux";

import { deleteItem } from "../../../actions";
import "./todoListItem.css";

const TodoListItem = ({ todoItemId, todoItemName, todoItemDesc, listId }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-list-item">
      <div className="todo-list-item-name">
        <h3>{todoItemName}</h3>
        <div
          className="cross-icon"
          onClick={() => dispatch(deleteItem(listId, todoItemId))}
        >
          X
        </div>
      </div>
      <div className="todo-list-item-desc">{todoItemDesc}</div>
    </div>
  );
};

export default TodoListItem;
