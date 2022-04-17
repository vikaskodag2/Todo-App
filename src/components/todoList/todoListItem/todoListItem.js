import React from "react";

const TodoListItem = ({ todoItemName, todoItemDesc, listId }) => {
  return (
    <div className="todo-list-item">
      <div className="todo-list-item-name">{todoItemName}</div>
      <div className="todo-list-item-desc">{todoItemDesc}</div>
    </div>
  );
};

export default todoListItem;
