import Button from './button'
import ActionButton from './action-button'

import { clearNumber, sendNumber, setNumber, resetGame } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'

const PadComponent = () => {
  const { rest } = useSelector(state => state)

  const dispatch = useDispatch()
  const handleClick = (value) => {
    dispatch(setNumber({ number: value }))
  }

  const handleVerify = () => { dispatch(sendNumber()) }

  const handleClear = () => { dispatch(clearNumber()) }

  const handleReset = () => { dispatch(resetGame()) }

  const buttons = []
  for (let index = 9; index >= 0; index--) {
    buttons.push(<Button key={index} value={index} sendNumber={handleClick} />)
  }

  return (
    <div className='row num-pad'>
      {rest > 0 && (
        <>
          {buttons.map(button => button)}
          <ActionButton key='-1' value='Verify' verify={handleVerify} />
          <ActionButton key='-2' value='Clear' verify={handleClear} />
        </>
      )}
      {rest === 0 && (<ActionButton key='-3' value='Reset' verify={handleReset} />)}
    </div>
  )
}

export default PadComponent
