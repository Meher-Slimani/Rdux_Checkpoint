import React, { useState, useRef, useEffect } from "react";
import { addTask, filterTask } from "../redux/actions";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";

const AddTask = () => {
const input = useRef(null);
useEffect(() => {
  input.current.focus();
});

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="row m-4">
      <select
        onChange={(e) => {
          dispatch(filterTask(e.target.value));
        }}
        className="selectpicker mr-2 rounded"
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>

      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        type="text"
        className="col form-control"
        ref={input}
        placeholder="What's to do..."
      />
      <button
        onClick={() => {
          dispatch(
            addTask({
              id: nextId(),
              description: text,
              isDone: false,
            })
          );
          setText("");
        }}
        className="btn btn-success mx-2"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
