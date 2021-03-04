import { NUMBER_QUESTIONS, SEND_NUMBER } from '../constants/action-type'
import { addFeedback } from '../actions/actions'

const feedbackMiddleware = store => next => action => {
  const returnAction = next(action)

  const { rest, score } = store.getState().calcul
  const { feedbacks } = store.getState().feedback

  if (action.type === SEND_NUMBER && rest === 0) {
    store.dispatch(addFeedback({
      created_at: Date.now(),
      success: score,
      echec: NUMBER_QUESTIONS - score,
      average: score,
      round: feedbacks.length + 1
    }))
  }

  return returnAction
}

export default feedbackMiddleware
