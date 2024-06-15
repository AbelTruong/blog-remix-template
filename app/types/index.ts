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
  message?: string | unknown
}
