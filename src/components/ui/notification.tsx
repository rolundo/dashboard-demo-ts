import ReactDOM from 'react-dom'

import classes from './notification.module.css'

type Props = {
  title: string
  message: string
  status: string
}

function Notification({ title, message, status }: Props) {
  let statusClasses = ''

  if (status === 'success') {
    statusClasses = classes.success
  }

  if (status === 'error') {
    statusClasses = classes.error
  }

  const cssClasses = `${classes.notification} ${statusClasses}`

  // Creates a Portal using a basic JSX component as the first argument
  // The second argument is where in the dom this component will be rendered
  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    //@ts-ignore
    document.getElementById('notifications')
  )
}

export default Notification
