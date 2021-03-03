import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/message'

import { NUMBER_QUESTIONS } from '../constants/action-type'
import ActionButton from '../components/action-button'

import { resetGame } from '../actions/actions'
import { Redirect } from 'react-router-dom'

const ScoreboardPage = () => {
  const { score, rest } = useSelector(state => state.calcul)

  const dispatch = useDispatch()

  let needRedirection = false

  const handleReset = () => {
    needRedirection = true
    dispatch(resetGame())
  }

  if (needRedirection) {
    return <Redirect to='/game' />
  }

  return (
    <>
      {rest > 0 && (
        <Message message={`Score actuelle : ${score} / ${NUMBER_QUESTIONS - rest}`} />
      )}

      {rest === 0 && (
        <>
          <Message message={`Votre score de votre dernière partie : ${score} / ${NUMBER_QUESTIONS}`} />
          <ActionButton key='-3' value='Nouvelle partie' verify={handleReset} />
        </>
      )}
    </>
  )
}

export default ScoreboardPage
