import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AddTodoList from "../../components/addTodoList";
import "./list.css";

const List = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  return (
    <>
      <section>
        <div className="container">
          {lists.map((list) => {
            return <List key={list.id} list={list} />;
          })}
          <p>{`You have ${lists.length} lists.`}</p>
          <AddTodoList />
        </div>
      </section>
    </>
  );
};

export default List;
