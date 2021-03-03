import Button from './button'
import ActionButton from './action-button'

import { clearNumber, sendNumber, setNumber } from '../actions/actions'

import { useDispatch, useSelector } from 'react-redux'

import { Redirect } from 'react-router-dom'

const PadComponent = () => {
  const { rest } = useSelector(state => state)

  const dispatch = useDispatch()
  const handleClick = (value) => {
    dispatch(setNumber({ number: value }))
  }

  const handleVerify = () => { dispatch(sendNumber()) }

  const handleClear = () => { dispatch(clearNumber()) }

  const buttons = []
  for (let index = 9; index >= 0; index--) {
    buttons.push(<Button key={index} value={index} sendNumber={handleClick} />)
  }

  return (
    <div className='row num-pad'>
      {rest > 0 && (
        <>
          {buttons.map(button => button)}
          <ActionButton key='-1' value='V' title='Verify' verify={handleVerify} />
          <ActionButton key='-2' value='C' title='Clear' verify={handleClear} />
        </>
      )}

      {rest === 0 && (<Redirect to='/scoreboard' />)}
    </div>
  )
}

export default PadComponent
