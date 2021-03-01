import Pad from './components/pad'
import Message from './components/message'

import { useSelector } from 'react-redux'

const App = () => {
  const { number, messages } = useSelector(state => state)

  return (
    <main className='container'>
      <Message message={number} />
      {messages.map((message, index) => <Message key={index} message={message} />)}
      <Pad />
    </main>
  )
}

export default App
