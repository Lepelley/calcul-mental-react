const ButtonComponent = (props) => {
  const { value, sendNumber } = props

  return (
    <div className='col-md-4'>
      <button className='btn btn-primary button' onClick={() => sendNumber(value)}>{value}</button>
    </div>
  )
}

export default ButtonComponent
