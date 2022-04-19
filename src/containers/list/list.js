import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AddTodoList from "../../components/addTodoList";
import TodoList from "../../components/todoList";
import "./list.css";

const List = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  return (
    <>
      <section>
        <div className="container todo-container">
          {lists.map((list) => {
            return <TodoList key={list.id} list={list} />;
          })}
          <AddTodoList />
        </div>
      </section>
    </>
  );
};

export default List;
