import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  COMPLETED_TASK,
  FILTER_TASK,
} from "./actions";

let initialState = [];

export const reducer = (state = initialState, action) => {
  let newTasks;
  switch (action.type) {
    case ADD_TASK:
      initialState = [...initialState, action.payload];
      return [...state, action.payload];
    case REMOVE_TASK:
      initialState = state.filter((task) => {
        return task.id !== action.payload;
      });
      return initialState;
    case UPDATE_TASK:
      newTasks = [...state];
      let index = -1;
      for (let i = 0; i < newTasks.length; i++) {
        index++;
        if (newTasks[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTasks[index] = action.payload;
        return newTasks;
      }
      break;
    case COMPLETED_TASK:
      initialState = state.map((newTask) =>
        newTask.id === action.payload
          ? { ...newTask, isDone: !newTask.isDone }
          : newTask
      );
      return initialState;
    case FILTER_TASK:
      switch (action.payload) {
        case "Completed":
          return initialState.filter((task) => {
            return task.isDone === true;
          });
        case "Uncompleted":
          return initialState.filter((task) => {
            return task.isDone === false;
          });
        default:
          return initialState;
      }
    default:
      return state;
  }
};
