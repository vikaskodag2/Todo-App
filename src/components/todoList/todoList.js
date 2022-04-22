import React from "react";
import { useDispatch } from "react-redux";

import TodoListItem from "./todoListItem";
import AddTodoItem from "../addTodoItem";
import { deleteList, updateLists } from "../../actions";
import "./todoList.css";

const TodoList = ({ list }) => {
  const dispatch = useDispatch();

  const { id, title, items } = list;

  const onDropHandler = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("object"));
    if (id !== data.listId) {
      dispatch(updateLists(data, id));
    }
  };

  return (
    <div
      id={id}
      className="todo-list col-sm-6 col-md-4"
      onDrop={onDropHandler}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="todo-list-heading">
        <h2>{title}</h2>
        <div className="cross-icon" onClick={() => dispatch(deleteList(id))}>
          X
        </div>
      </div>
      <div className="todo-list-body">
        {items &&
          items.map((todoItem) => {
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
