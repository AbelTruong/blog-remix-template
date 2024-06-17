import { useEffect, useState } from 'react'

export type Screen = 'mobile' | 'tablet' | 'desktop'

export const useScreen = () => {
    const [screen, setScreen] = useState<any>(undefined)

    useEffect(() => {
        const resizeScreen = () => {
            let width = (window as any).innerWidth
            let _screen = width >= 992 ? 'desktop' : width >= 768 ? 'tablet' : 'mobile'
            if (_screen != screen) setScreen(_screen)
        }
        resizeScreen()
        window.addEventListener('resize', resizeScreen)
    }, [])

    return screen as Screen
}
