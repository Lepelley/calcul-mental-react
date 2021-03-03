import Button from './button'
import ActionButton from './action-button'

import { clearNumber, sendNumber, setNumber } from '../actions/actions'

import { useDispatch } from 'react-redux'

const PadComponent = () => {
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
      <>
        {buttons.map(button => button)}
        <ActionButton key='-1' value='V' title='Verify' verify={handleVerify} />
        <ActionButton key='-2' value='C' title='Clear' verify={handleClear} />
      </>
    </div>
  )
}

export default PadComponent
