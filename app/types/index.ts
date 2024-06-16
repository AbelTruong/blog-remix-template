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
