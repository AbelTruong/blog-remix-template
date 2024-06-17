import { useOutletContext } from '@remix-run/react'
import { useCallback } from 'react'
import { NotifyType } from '~/types'

export const useNotify = () => {
  const { setNotify } = useOutletContext<any>()

  const notify = useCallback((notify: NotifyType) => setNotify(notify), [])

  return notify
}
