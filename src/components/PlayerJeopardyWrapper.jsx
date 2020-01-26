
import React, { Component } from "react";
import ScoreboardContext from "context/ScoreboardContext";


const PlayerJeopardyWrapperStyle = {
  color: '#ffffff'
};

class PlayerJeopardyWrapper extends Component {
  state = {
  };
  render() {
    return (
      <div style={PlayerJeopardyWrapperStyle}>
        <div>
          <div className="container" >
          <h1>Jeopardy</h1>

           </div>
        </div>
      </div>
    );
  }
}

PlayerJeopardyWrapper.contextType = ScoreboardContext;

export default PlayerJeopardyWrapper;
