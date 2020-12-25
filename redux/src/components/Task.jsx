import React, {useState, useRef, useEffect} from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask, completedTask } from "../redux/actions";

const Task = ({ task }) => {
  const inputRef = useRef();
 
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(task.description);

return (
    <div >
      <div className="row mx-4 align-items-center">
        <div className="col p-0 rounded border border-light shadow mr-2">
          {editable ? 
          <input 
          onChange={(e) => {setText(e.target.value)}}
          type="text" value={text} className="form-control" ref={inputRef}/> : 
          <span className={task.isDone ? 'barre' : ''}><h3>{task.description}</h3></span>}
          
        </div>
        <button 
        onClick={() => {
          dispatch(updateTask(
            {
              ...task,
              description: text,
            }
          ))
          setEditable(!editable)
        }}
        className="btn btn-primary m-2">{editable ? 'Update' : 'Edit' }</button>
        <button 
        onClick={() => {
          dispatch(completedTask(task.id))
          // console.log(task)
        }}
        className="btn btn-success m-2">Done</button>
        <button
          onClick={() => {
            dispatch(removeTask(task.id));
          }}
          className="btn btn-danger m-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Task;
