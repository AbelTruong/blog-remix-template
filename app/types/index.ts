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

export type ButtonType = {
  icon?: any
  type?: 'submit' | 'reset' | 'button'
  onClick?: any
  fullWidth?: boolean
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
  styles?: Objectable
  buttonClassName?: string
  className?: string
  onKeyDown?: any
  id?: string
}

export type DrawerType = {
  heading: string | ''
  children: React.ReactNode
}
