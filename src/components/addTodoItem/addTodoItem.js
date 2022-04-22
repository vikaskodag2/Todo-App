import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash/debounce";

import { addItem } from "../../actions";
import "./addTodoItem.css";

const AddTodoItem = ({ listId }) => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const debouncedChangeNameHandler = useMemo(
    () => debounce((e) => setName(e.target.value), 300),
    []
  );

  const debouncedChangeDescHandler = useMemo(
    () => debounce((e) => setDesc(e.target.value), 300),
    []
  );

  // Stop the invocation of the debounced function after unmounting
  useEffect(() => {
    return () => {
      debouncedChangeNameHandler.cancel();
      debouncedChangeDescHandler.cancel();
    };
  }, []);

  return (
    <div className="add-todo-item-card">
      <input
        className="add-todo-item-input"
        placeholder="Enter title..."
        onChange={debouncedChangeNameHandler}
      />
      <input
        className="add-todo-item-input"
        placeholder="Enter the text for this card..."
        onChange={debouncedChangeDescHandler}
      />
      <button
        className="add-todo-item-button"
        onClick={() => dispatch(addItem(name, desc, listId))}
        disabled={name.length === 0 || desc.length === 0}
      >
        Add card
      </button>
    </div>
  );
};

export default AddTodoItem;
