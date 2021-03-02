import { CLEAR_NUMBER, RESET_GAME, SEND_NUMBER, SET_NUMBER } from '../constants/action-type'

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