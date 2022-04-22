import React from "react";
import { useDispatch } from "react-redux";

import { deleteItem } from "../../../actions";
import "./todoListItem.css";

const TodoListItem = ({ todoItemId, todoItemName, todoItemDesc, listId }) => {
  const dispatch = useDispatch();

  const onDragStartHandler = (e) => {
    const TodoItem = {
      id: todoItemId,
      todoItem: todoItemName,
      todoItemDesc,
      listId,
    };
    e.dataTransfer.setData("object", JSON.stringify(TodoItem));
  };

  return (
    <div
      id={todoItemId}
      className="todo-list-item"
      draggable="true"
      onDragStart={onDragStartHandler}
    >
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
