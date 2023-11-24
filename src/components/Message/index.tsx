import React, { useState, useEffect, FC, useRef } from 'react'
import { MessageWrapper } from './style'
import {
  ExclamationCircleFilled,
  CheckCircleFilled,
  InfoCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons'
import { removeMessage } from '@/hooks/useMessage'
import { MessageOptions } from './type'

const Message: FC<MessageOptions> = ({
  message,
  type = 'warning',
  duration = 2000,
  onClose = () => {}
}) => {
  const [visible, setVisible] = useState(true)
  const [isExit, setIsExit] = useState(false)

  const messageRef = useRef<HTMLDivElement>(null)

  const clear = () => removeMessage(messageRef.current?.id as string)

  const handleHidden = () => {
    if (messageRef.current) {
      messageRef.current.addEventListener('animationend', clear, {
        once: true
      })
      onClose()
    }
  }
  useEffect(() => {
    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
      setIsExit(true)
      handleHidden()
    }, duration)

    return () => clearTimeout(timer)
  }, [message, type, duration, handleHidden])

  const calClassName = () => {
    let className = ''
    if (visible) {
      className += 'message-enter message-enter-active'
    }
    if (isExit) {
      className += ' message-exit'
    }
    return className
  }
  const calRenderIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleFilled />
      case 'error':
        return <CloseCircleFilled />
      case 'info':
        return <InfoCircleFilled />
      case 'warning':
        return <ExclamationCircleFilled />
      default:
        return <InfoCircleFilled />
    }
  }
  return (
    <MessageWrapper>
      <div ref={messageRef} className={`message ${calClassName()}`}>
        <div className={`message-${type} message-box`}>
          <div className="message-icon">{calRenderIcon()}</div>
          <div className="message-content">{message}</div>
        </div>
      </div>
    </MessageWrapper>
  )
}

export default Message
