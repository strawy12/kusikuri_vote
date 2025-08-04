import { useEffect, useState } from 'react'

interface Props {
  seconds: number
  onTimeout: () => void
}

function Timer({ seconds, onTimeout }: Props) {
  const [time, setTime] = useState(seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          clearInterval(interval)
          onTimeout()
          return 0
        }
        return t - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div>⏳ 남은 시간: {time}초</div>
}

export default Timer
