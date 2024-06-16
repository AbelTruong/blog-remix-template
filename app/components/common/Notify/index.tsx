import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { NotifyType } from '~/types'

const Notify = ({ message, status, onClose }: NotifyType) => {
  useEffect(() => {
    if (message) {
      // delay 500ms for next toast
      if ((window as any).__notifyTimeout) return
      ;(window as any).__notifyTimeout = true

      onClose?.()

      toast(message, { type: status })
      setTimeout(() => ((window as any).__notifyTimeout = undefined), 500)
    }
  }, [message])

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export default Notify
