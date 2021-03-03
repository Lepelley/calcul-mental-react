import Pad from '../components/pad'
import Message from '../components/message'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const GamePage = () => {
  const { number, messages, score, rest } = useSelector(state => state.calcul)

  return (
    <>
      {rest > 0 && (<Pad />)}
      {rest === 0 && (<Redirect to='/scoreboard' />)}

      <span>Score : {score} </span>
      <span>Restants : {rest}</span>
      <Message message={number} />
      {messages.map((message, index) => <Message key={index} message={message} />)}
    </>
  )
}

export default GamePage
