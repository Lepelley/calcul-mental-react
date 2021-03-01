const VerifyButtonComponent = (props) => {
  const { verify, value } = props

  return (
    <div className='col-md-4'>
      <button className='btn btn-danger button' onClick={() => verify()}>{value}</button>
    </div>
  )
}

export default VerifyButtonComponent
