import { useState, useEffect } from 'react'

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(
        () => setElapsedTime(prevElapsedTime => prevElapsedTime + 1),
        1000
      )
    }
    return () => clearInterval(interval)
  }, [isRunning])

  return {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime
  }
}

export const useStopwatch = () => {
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer()

  const handleReset = () => {
    setIsRunning(false)
    setElapsedTime(0)
  }

  return {
    elapsedTime,
    resetTimer: () => handleReset(),
    startTimer: () => setIsRunning(true),
    stopTimer: () => setIsRunning(false),
    isRunning
  }
}
