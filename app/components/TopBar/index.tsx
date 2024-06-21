import { useEffect, useState } from 'react'
// import CountDownTimer from '~/helper/countDownTimer'
import { Objectable } from '~/types'

function TopBar() {
  const [showCountDown, setShowCountDown] = useState<boolean>(false)
  console.log('🚀🚀🚀 ~ TopBar ~ showCountDown:', showCountDown)
  const [timer, setTimer] = useState<Objectable>({
    h: 0,
    m: 0,
    s: 0,
  })

  useEffect(() => {
    const CountDownTimer = () => {
      const now: any = new Date()
      const targetTime: any = new Date()
      targetTime.setHours(20, 0, 0, 0)

      if (now > targetTime) {
        setShowCountDown(false)
        setTimer((prevState: Objectable) => ({
          ...prevState,
          h: 0,
          m: 0,
          s: 0,
        }))
        window.localStorage.removeItem('countdownTimer')
      } else {
        const diff: any = targetTime - now
        const hours: number = Math.floor(diff / (1000 * 60 * 60))
        const minutes: number = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds: number = Math.floor((diff % (1000 * 60)) / 1000)

        setTimer((prevState: Objectable) => ({
          ...prevState,
          h: hours,
          m: minutes,
          s: seconds,
        }))

        setShowCountDown(true)
        window.localStorage.setItem('countdownTimer', diff)
      }
    }

    const countDown = setInterval(CountDownTimer, 1000)

    return () => {
      clearInterval(countDown)
    }
  }, [])

  const renderPlural = (number: any) => {
    if (number > 1) {
      return 'S'
    }
  }

  return (
    <section>
      <div className="bg-primary">
        <div className="container flex items-center justify-center font-bold text-base py-1 lg:uppercase lg:text-sm lg:py-1.5">
          <h2 className="text-[#FFFFFF] flex flex-row">
            WELCOME, {timer.h} HOUR{renderPlural(timer.h)} {timer.m} MIN
            {renderPlural(timer.m)} {timer.s} SECOND{renderPlural(timer.s)} IS THE END OF WORKING
            TIME
          </h2>
        </div>
      </div>
    </section>
  )
}

export default TopBar
