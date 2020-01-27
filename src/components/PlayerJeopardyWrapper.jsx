
import React, { Component } from "react";
import JeopardyContext from "context/JeopardyContext";
import JeopardyChallenges from "./JeopardyChallenges";


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
          <div className="container">
            <h1>Jeopardy</h1>
            {this.props.children}
            <JeopardyChallenges />
          </div>
        </div>
      </div>
    );
  }
}

PlayerJeopardyWrapper.contextType = JeopardyContext;

export default PlayerJeopardyWrapper;
