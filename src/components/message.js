const MessageComponent = (props) => {
  const { message } = props

  return (
    <div className='alert alert-info mt-2'>
      {message}
    </div>
  )
}

export default MessageComponent
