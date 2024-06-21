import { Dispatch, SetStateAction } from 'react'
import { TypeOptions } from 'react-toastify'

export type Objectable = {
  [key: string]: any
}

export type Iconable = {
  onClick?: () => Promise<void>
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

export type NotifyProps = {
  message: string | ''
  status?: TypeOptions
  onClose?: () => void
}

export type ModalProps = {
  heading?: string | ''
  children?: React.ReactNode
  primaryButton?: React.ReactNode
  secondaryButton?: React.ReactNode
  setShowModal: Dispatch<SetStateAction<boolean>>
  className?: string | ''
  showLine?: boolean | false
  heightChildren?: string | ''
}

export type ButtonProps = {
  icon?: React.ReactNode
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  fullWidth?: boolean
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
  styles?: Objectable
  buttonClassName?: string
  className?: string
  onKeyDown?: (e: Event) => void
  id?: string
}

export type DrawerProps = {
  heading: string | ''
  children: React.ReactNode
}
