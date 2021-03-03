const ActionButtonComponent = (props) => {
  const { verify, value, title } = props

  return (
    <div className='col-md-4'>
      <button className='btn btn-danger button' title={title} onClick={() => verify()}>{value}</button>
    </div>
  )
}

export default ActionButtonComponent
