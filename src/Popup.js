import React, { useState, useEffect } from 'react'
import { useStopwatch } from './customHooks'
import axios from 'axios'

const Popup = ({ feedback, handleChange }) => {
  const [pass, setPass] = useState()
  const [startedAt, setStartedAt] = useState(new Date())
  const [finishedAt, setFinishedAt] = useState()

  const {
    isRunning,
    elapsedTime,
    startTimer,
    stopTimer,
    resetTimer
  } = useStopwatch()

  const handleStartStop = () => {
    isRunning ? stopTimer() : startTimer()
  }

  const postAction = pass => {
    if (pass === '0000') {
      console.log('post successful')
      setFinishedAt(new Date())
      console.log({
        feedback,
        durata: showFormattedTime(new Date() / 1000 - startedAt / 1000)
      })
      handleChange()
      // axios
      //   .post('/endpoint', {
      //     feedback,
      //     durata: doneDate
      //   })
      //   .then(console.log('success'))
      //   .catch(err => {
      //     console.error(err)
      //   })
      resetTimer()
    } else {
      console.error('wrong pass kiddo')
    }
  }

  const formattedHours = timeInSeconds => {
    return Math.floor(timeInSeconds / 3600)
  }

  const formattedMins = timeInSeconds => {
    return Math.floor((timeInSeconds % 3600) / 60)
  }

  const formattedSecs = timeInSeconds => {
    return Math.floor((timeInSeconds % 3600) % 60)
  }

  const showFormattedTime = timeInSeconds => {
    let finalHours = formattedHours(timeInSeconds)
    let finalMinutes = formattedMins(timeInSeconds)
    let finalSeconds = formattedSecs(timeInSeconds)
    if (finalHours <= 9) {
      finalHours = '0' + finalHours
    }
    if (finalMinutes <= 9) {
      finalMinutes = '0' + finalMinutes
    }
    if (finalSeconds <= 9) {
      finalSeconds = '0' + finalSeconds
    }

    return `${finalHours}:${finalMinutes}:${finalSeconds}`
  }

  useEffect(() => {
    handleStartStop()
  }, [])

  return (
    <div className='popup'>
      <div className='info-popup'>
        <h1>Puneti parola pentru a proceda:</h1>
        <input
          id='password'
          type='password'
          maxLength='4'
          onChange={e => setPass(e.target.value)}
        />
        <button
          className='btn-primary'
          type='submit'
          onClick={() => postAction(pass)}>
          Submit
        </button>
        <p>{showFormattedTime(elapsedTime)}</p>
      </div>
    </div>
  )
}

export default Popup
