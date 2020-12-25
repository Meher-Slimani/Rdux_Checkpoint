export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const COMPLETED_TASK = "COMPLETEDE_TASK";
export const FILTER_TASK = "FILTER_TASK";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
};

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  };
};

export const completedTask = (taskId) => {
  console.log(taskId);
  return {
    type: COMPLETED_TASK,
    payload: taskId,
  };
};

export const filterTask = (status) => {
  return {
    type: FILTER_TASK,
    payload: status,
  };
};
