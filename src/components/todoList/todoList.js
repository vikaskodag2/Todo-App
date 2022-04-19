import React from "react";
import { useDispatch } from "react-redux";

import TodoListItem from "./todoListItem";
import AddTodoItem from "../addTodoItem";
import { deleteList } from "../../actions";
import "./todoList.css";

const TodoList = ({ list }) => {
  const dispatch = useDispatch();

  const { id, title, items } = list;

  return (
    <div className="todo-list col-sm-6 col-md-4">
      <div className="todo-list-heading">
        <h2>{title}</h2>
        <div className="cross-icon" onClick={() => dispatch(deleteList(id))}>
          X
        </div>
      </div>
      <div className="todo-list-body">
        {items.map((todoItem) => {
          return (
            <TodoListItem
              key={todoItem.id}
              todoItemId={todoItem.id}
              todoItemName={todoItem.todoItem}
              todoItemDesc={todoItem.todoItemDesc}
              listId={id}
            />
          );
        })}
        <AddTodoItem listId={id} />
      </div>
    </div>
  );
};

export default TodoList;
