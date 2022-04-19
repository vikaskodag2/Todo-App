import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

import { addList } from "../../actions";
import "./addTodoList.css";

const AddTodoList = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [title, setTitle] = useState("");

  const onTitleChange = (title) => {
    setTitle(title);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce((e) => onTitleChange(e.target.value), 300),
    []
  );

  // Stop the invocation of the debounced function after unmounting
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  return (
    <div className="add-list-card col-sm-6 col-md-4">
      <input
        className="add-list-input"
        placeholder="Enter list title..."
        onChange={debouncedChangeHandler}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            dispatch(addList(e.target.value));
          }
        }}
      />
      <button
        className="add-list-button"
        onClick={() => dispatch(addList(title))}
        disabled={title.length === 0}
      >
        Add list
      </button>
    </div>
  );
};

export default AddTodoList;
