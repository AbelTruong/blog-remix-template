import { useOutletContext } from '@remix-run/react'
import { useCallback } from 'react'
import { NotifyProps } from '~/types'

export const useNotify = () => {
  const { setNotify } = useOutletContext<any>()

  const notify = useCallback((notify: NotifyProps) => setNotify(notify), [])

  return notify
}
