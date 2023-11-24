export type messageTypes = 'success' | 'warning' | 'error' | 'info'

export interface MessageOptions {
  type: messageTypes
  message: string
  duration?: number
  onClose?: () => void
}

export interface MessageQueueItem extends MessageOptions {
  id: string
}

export interface MessageProps {
  info: (options: string) => void
  success: (options: string) => void
  warning: (options: string) => void
  error: (options: string) => void
}
