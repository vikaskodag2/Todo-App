import React from "react";
import TodoListItem from "./todoListItem";

const TodoList = ({ list }) => {
  const { id, title, items } = list;
  return (
    <div className="todo-list col-sm-4">
      <div className="todo-list-heading">
        <span>{title}</span>
      </div>
      <div className="todo-list-body">
        {items.map((todoItem) => {
          <TodoListItem
            key={todoItem.id}
            todoItemName={todoItem.todoItem}
            todoItemDesc={todoItem.todoItemDesc}
            listId={id}
          />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
