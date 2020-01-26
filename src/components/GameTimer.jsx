import React, { Component } from 'react';
// import countdown from './timer.js'

class GameTimer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      endTime: this.props.endTime,
      timeRemaining: null
    }
  }

  componentDidMount (){
    this.fEndTime = this.formatEndTime(this.state.endTime);
    this.timer = setInterval(
      () => this.calculate(this.fEndTime), 1000);
  }

  formatEndTime(endDate) {
    // time format in - '04/01/2333 05:00:00 PM'
    const today = new Date();
    const dateString = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() + ' ' + endDate;
    endDate = new Date(dateString).getTime();
    return endDate;
  }

calculate(endDate) {
  let days,
    hours,
    minutes,
    seconds;
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      seconds = parseInt(timeRemaining);

      days = parseInt(days, 10);
      hours = ("0" + hours).slice(-2);
      minutes = ("0" + minutes).slice(-2);
      seconds = ("0" + seconds).slice(-2);

      return (
        this.setState({
          timeRemaining: hours + ':' + minutes + ':' + seconds
        })
      )

    } else {
      (
        this.setState({
          timeRemaining: 'GAME OVER'
        })
      )
    }
  }

  render() {
    const timerStyles = {
      backgroundColor: "rgba(50,50,50,.8)",
      color: "#fff"
    };

    return (
      <div className="col-12 " style={timerStyles}>
        <div className='row'>
          <h2 className="col-6 ">Time Remaining: </h2>
          <h2 className="col-6 ">{this.state.timeRemaining}</h2>

        </div>
      </div>

    );
  }
}

export default GameTimer;
