import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./list.css";

const List = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const renderEmptyTodoMessage = (
    <div className="section">
      <div className="empty-section">
        You currently have no lists. Today is a great day to start a new todo
        list!
      </div>
    </div>
  );

  return (
    <>
      <section>
        <div className="container">
          {lists.map((list) => {
            return <List key={list.id} list={list} />;
          })}
        </div>
      </section>
      {lists.length === 0 ? renderEmptyTodoMessage : null}
    </>
  );
};

export default List;
