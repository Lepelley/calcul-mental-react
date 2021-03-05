import { useSelector, useDispatch } from 'react-redux'

import ActionButton from '../components/action-button'

import { clearFeedbacks } from '../actions/actions'

import { FirebaseDatabaseNode } from '@react-firebase/database'

const FeedbackPage = () => {
  const { feedbacks } = useSelector(state => state.feedback)
  const dispatch = useDispatch()

  const feedbackElements = feedbacks.map(
    (feedback, index) =>
      <li key={index}>
        <ul>
          <li key={index + '-round'}>Round #{feedback.round}</li>
          <li key={index + '-created_at'}>Joué le {feedback.created_at}</li>
          <li key={index + '-success'}>Bonnes réponses : {feedback.success}</li>
          <li key={index + '-echec'}>Mauvaises réponses : {feedback.echec}</li>
          <li key={index + '-average'}>Moyenne : {feedback.average}</li>
        </ul>
      </li>
  )

  const handleClear = () => {
    dispatch(clearFeedbacks())
  }

  return (
    <>
      <h1>Feedbacks</h1>

      {feedbacks.length !== 0 ? <ActionButton value='Clear' verify={handleClear} /> : ''}

      <ul>
        {feedbackElements.map(feedback => feedback)}
      </ul>

      <ul>
      <FirebaseDatabaseNode path='scores/scores'>
          {data => {
            return data.value ? data.value.map(score => `<li>${score.score}</li>`) : ''
          }}
      </FirebaseDatabaseNode>
      </ul>
    </>
  )
}

export default FeedbackPage
