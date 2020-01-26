import React, { Component } from "react";
import GameTimer from "./GameTimer";
import GameControlAdmin from "./GameControlAdmin";

const gameAdminWrapperStyle = {};

class GameAdminWrapper extends Component {
  state = {
    endTime: "06:00:00 PM"
  };
  render() {
    return (
      <div style={gameAdminWrapperStyle}>
        <div>
          <div className="container">
            <div className="row">
              <GameTimer endTime={this.state.endTime} />
            </div>
          </div>

          <div className="container">
            <div className="row">
              <GameControlAdmin />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameAdminWrapper;
