import React from 'react'
import Message from '@/components/Message'
import { createRoot } from 'react-dom/client'
import { uuid } from '@/utils'
import {
  MessageOptions,
  MessageProps,
  MessageQueueItem
} from '@/components/Message/type'

const CONTAINER_ID = 'message-container'
const MESSAGE_QUEUE: Array<MessageQueueItem> = []
let containerRoot = null as any
// 创建容器
function createContainer() {
  let container = document.getElementById(CONTAINER_ID)
  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', CONTAINER_ID)
    document.body.appendChild(container)
  }
  return container
}
function init() {
  if (!containerRoot) {
    containerRoot = createRoot(createContainer())
  }
}

// 新增消息
export const useAddMessage = (params: MessageOptions) => {
  const id = uuid()
  MESSAGE_QUEUE.length = 0
  MESSAGE_QUEUE.push({ ...params, id })
  renderMessage()
}

// 移除消息
export const removeMessage = (id: string) => {
  const index = MESSAGE_QUEUE.findIndex((item) => item.id === id)
  MESSAGE_QUEUE.splice(index, 1)
  renderMessage()
}

const renderMessage = () => {
  init()
  // 生成组件
  const messageComponents = MESSAGE_QUEUE.map((item) => {
    return <Message key={item.id} {...item} />
  })

  // 挂在组件
  containerRoot.render(messageComponents)
}
export const useSCMessage: MessageProps = {
  info: (message: string) => {
    useAddMessage({
      message,
      type: 'info'
    })
  },
  success: (message: string) => {
    useAddMessage({
      message,
      type: 'success'
    })
  },
  error: (message: string) => {
    useAddMessage({
      message,
      type: 'error'
    })
  },
  warning: (message: string) => {
    useAddMessage({
      message,
      type: 'warning'
    })
  }
}
