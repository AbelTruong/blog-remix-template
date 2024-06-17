export type Objectable = {
  [key: string]: unknown
}

export type Iconable = {
  onClick?: MouseEvent | undefined
  style?: Objectable | undefined
  fill?: string | undefined
  stroke?: string | undefined
}

export type ErrorBoundaryProps = {
  data: string | ''
  internal: boolean
  status: number
  statusText: string | ''
}

export type NotifyType = {
  message: string | ''
  status?: string | 'default'
  onClose?: unknown
}

export type ModalType = {
  heading?: string | ''
  children?: React.ReactNode
  primaryButton?: React.ReactNode
  secondaryButton?: React.ReactNode
  setShowModal: any
  className?: string | ''
  showLine?: boolean | false
  heightChildren?: string | ''
}
