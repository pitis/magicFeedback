import React from "react"
import ReactStopwatch from "react-stopwatch"
import { useSelector, useDispatch } from "react-redux"
import { setTheTime } from "./store/actions"

const Stopwatch = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit="24:00:00"
    onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    onCallback={() => console.log("Finish")}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div>
          <p>{formatted}</p>
        </div>
      )
    }}
  />
)

export default Stopwatch
