import { SEND_NUMBER, SET_NUMBER, CLEAR_NUMBER } from '../constants/action-type'
import findMultiply from '../utils/multiplications'

const multiply = findMultiply()

const stateInit = {
  values: [],
  number: '',
  multiply: multiply,
  rest: 19,
  messages: [
    `${multiply.a} x ${multiply.b} = ?`,
    'Vous avez 20 multiplications à résoudre !'
  ],
  score: 0
}

const reducer = (state = stateInit, action = {}) => {
  const result = state.multiply.a * state.multiply.b
  const newMultiply = findMultiply()

  switch (action.type) {
    case SEND_NUMBER:
      return {
        ...state,
        values: [...state.values, state.number],
        number: '',
        messages: [
          `${multiply.a} x ${multiply.b} = ?`,
          result === parseInt(state.number)
            ? 'Bonne réponse !'
            : `Mauvaise réponse ! ${state.multiply.a} x ${state.multiply.b} = ${result}`,
          `${newMultiply.a} x ${newMultiply.b} = ?`,
          ...state.messages
        ],
        multiply: newMultiply,
        rest: state.rest - 1,
        score: state.score
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
    default:
      return state
  }
}

export default reducer
