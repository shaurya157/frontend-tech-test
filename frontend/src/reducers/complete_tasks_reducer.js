import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'
const _defaultState = {
  tasks: [],
  error: ""
}

const CompleteTasksReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.RECEIVE_TASK_SUCCESS:
      action.tasks.forEach(task => {
        if(task.completed) {
          newState.tasks.push(task);
        }
      })

      return newState
    case constants.UPDATE_TASK_SUCCESS:
      if(action.task.completed){
          newState.tasks.push(action.task);
      }

      return newState
    default:
      return oldState;
  }
}

export default CompleteTasksReducer
