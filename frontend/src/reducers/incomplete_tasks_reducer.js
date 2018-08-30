import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'
const _defaultState = {
  tasks: [],
  error: ""
}

const IncompleteTasksReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.CREATE_TASK:
      newState.tasks.push(action.task)

      return newState
    case constants.RECEIVE_TASK_SUCCESS:
      action.tasks.forEach(task => {
        if(!task.completed) {
          newState.tasks.push(task);
        }
      })

      return newState
    case constants.CREATE_TASK_SUCCESS:
      newState.tasks.push(action.task);

      return newState
    case constants.CREATE_TASK_ERROR:
      newState.error = action.error

      return newState
    case constants.UPDATE_TASK_SUCCESS:
      // TODO: finish this;
      return newState
    default:
      return oldState;
  }
}

export default IncompleteTasksReducer
