import React, { Component } from 'react';


// time format in - '04/01/2333 05:00:00 PM'
const gameControlAdminStyles = {
  backgroundColor: "rgba(50,50,50,.8)",
  color: "#fff"
};

class GameControlAdmin extends Component {
  selectedEndTime = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const endTime = this.selectedEndTime.current.value;
    this.setState({endTime: endTime})
  };

  state = {
    endTime: ''

  };
  render() {
    return (
      <div className="col-12" style={gameControlAdminStyles}>
        <h1>Game Control</h1>
        <hr />
        <div className="row">
        <form onSubmit={this.handleSubmit} className="col-3" >
          <div className="form-group">
            <label for="appt">Choose the end time for the game:</label>
            <input  type="time"
                    ref={this.selectedEndTime}
                    id="endTime"
                    name="endTime"
                    required
                    className="form-control"/>
          </div>
          <button className="btn btn-primary">Set End Time</button>
        </form>
        <div>
          <p>The game will end at {this.state.endTime}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default GameControlAdmin;
