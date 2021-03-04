import { ADD_FEEDBACK, CLEAR_FEEDBACKS } from '../constants/action-type'

const stateInit = {
  feedbacks: []
}

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload]
      }
    case CLEAR_FEEDBACKS:
      return {
        ...stateInit
      }
    default:
      return state
  }
}

export default reducer
