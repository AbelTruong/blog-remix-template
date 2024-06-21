function CountDownTimer() {
  const now: any = new Date()
  const targetTime: any = new Date()
  targetTime.setHours(20, 0, 0, 0)

  if (now > targetTime) {
    window.localStorage.removeItem('countdownTimer')
    return {
      _showCountDown: false,
      _timer: {
        h: 0,
        m: 0,
        s: 0,
      },
    }
  } else {
    const diff: any = targetTime - now
    const hours: number = Math.floor(diff / (1000 * 60 * 60))
    const minutes: number = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds: number = Math.floor((diff % (1000 * 60)) / 1000)

    window.localStorage.setItem('countdownTimer', diff)
    return {
      _showCountDown: true,
      _timer: {
        h: hours,
        m: minutes,
        s: seconds,
      },
    }
  }
}

export default CountDownTimer
