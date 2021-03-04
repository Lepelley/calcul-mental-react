import {
  CLEAR_NUMBER,
  RESET_GAME,
  SEND_NUMBER,
  SET_NUMBER,
  ADD_FEEDBACK,
  CLEAR_FEEDBACKS
} from '../constants/action-type'

export const sendNumber = () => {
  return { type: SEND_NUMBER }
}

export const setNumber = (payload) => {
  return { type: SET_NUMBER, payload }
}

export const clearNumber = () => {
  return { type: CLEAR_NUMBER }
}

export const resetGame = () => {
  return { type: RESET_GAME }
}

export const addFeedback = (payload) => {
  return { type: ADD_FEEDBACK, payload }
}

export const clearFeedbacks = () => {
  return { type: CLEAR_FEEDBACKS }
}
