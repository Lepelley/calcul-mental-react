import Pad from './components/pad'
import Message from './components/message'

import { useSelector } from 'react-redux'

const App = () => {
  const { number, messages, score, rest } = useSelector(state => state)

  return (
    <main className='container'>
      <Pad />
      <span>Score : {score} </span>
      <span>Restants : {rest}</span>
      <Message message={number} />
      {messages.map((message, index) => <Message key={index} message={message} />)}
    </main>
  )
}

export default App
