import React, { useState } from 'react'
import ReactStopwatch from 'react-stopwatch'
import axios from 'axios'

const Popup = ({ feedback }) => {
  const [pass, setPass] = useState()
  let doneDate = new Date()

  const postAction = pass => {
    if (pass === '0000') {
      console.log('post successful')
      // axios
      //   .post('/endpoint', {
      //     feedback,
      //     durata: doneDate
      //   })
      //   .then(console.log('success'))
      //   .catch(err => {
      //     console.error(err)
      //   })
    } else {
      console.error('wrong pass kiddo')
    }
  }

  return (
    <div className='popup'>
      <div className='info-popup'>
        <h1>Puneti parola pentru a proceda:</h1>
        <input
          id='password'
          type='password'
          maxlength='4'
          onChange={e => setPass(e.target.value)}
        />
        <button
          className='btn-primary'
          type='submit'
          onClick={() => postAction(pass)}>
          Submit
        </button>
        <ReactStopwatch
          seconds={0}
          minutes={0}
          hours={0}
          limit='24:00:00'
          onChange={({ hours, minutes, seconds }) => {
            doneDate.setHours(hours)
            doneDate.setMinutes(minutes)
            doneDate.setSeconds(seconds)
          }}
          onCallback={() => console.log('Finish')}
          render={({ formatted, hours, minutes, seconds }) => {
            return (
              <div>
                <p>{formatted}</p>
              </div>
            )
          }}
        />
      </div>
    </div>
  )
}

export default Popup
