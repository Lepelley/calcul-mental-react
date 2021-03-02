import { SEND_NUMBER, SET_NUMBER, CLEAR_NUMBER, RESET_GAME } from '../constants/action-type'
import findMultiply from '../utils/multiplications'

const multiply = findMultiply()

const stateInit = {
  values: [],
  number: '',
  multiply: multiply,
  rest: 20,
  messages: [
    `${multiply.a} x ${multiply.b} = ?`,
    'Vous avez 20 multiplications à résoudre !'
  ],
  score: 0
}

const reducer = (state = stateInit, action = {}) => {
  const result = action.type === SEND_NUMBER ? state.multiply.a * state.multiply.b : null
  const newMultiply = action.type === SEND_NUMBER ? findMultiply() : null

  switch (action.type) {
    case SEND_NUMBER:
      return {
        ...state,
        values: [...state.values, state.number],
        number: '',
        messages: [
          `${newMultiply.a} x ${newMultiply.b} = ?`,
          result === parseInt(state.number)
            ? 'Bonne réponse !'
            : `Mauvaise réponse ! ${state.multiply.a} x ${state.multiply.b} = ${result}`,
          ...state.messages
        ],
        multiply: newMultiply,
        rest: state.rest - 1,
        score: state.score + (result === parseInt(state.number) ? 1 : 0)
      }
    case SET_NUMBER:
      return {
        ...state,
        number: state.number + action.payload.number.toString()
      }
    case CLEAR_NUMBER:
      return {
        ...state,
        number: ''
      }
    case RESET_GAME:
      return {
        ...stateInit
      }
    default:
      return state
  }
}

export default reducer
