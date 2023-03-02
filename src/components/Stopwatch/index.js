// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    total: 0,
  }

  onTick = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
  }

  onStartClick = () => {
    this.timerId = setInterval(this.onTick, 1000)
    return this.timerId
  }

  onStopClick = () => {
    clearInterval(this.timerId)
  }

  clearIntervalId = () => {
    clearInterval(this.timerId)
    this.setState({
      total: 0,
    })
  }

  onResetClick = () => {
    this.clearIntervalId()
  }

  render() {
    const {total} = this.state
    const minutes = Math.floor(total / 60)
    const seconds = Math.floor(total % 60)
    const min = minutes > 9 ? minutes : `0${minutes}`
    const sec = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="timer-card-container">
          <div className="timer-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <h1>Timer</h1>
          </div>
          <h1>
            {min}:{sec}
          </h1>
          <div className="buttons">
            <button
              type="button"
              className="start-button"
              onClick={this.onStartClick}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button"
              onClick={this.onStopClick}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onResetClick}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
