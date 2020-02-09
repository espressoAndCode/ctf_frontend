import React, { Component } from "react";
import KothScores from "./KothScores";
import JeopardyScores from "./JeopardyScores";
import ScoreboardContext from "context/ScoreboardContext";

const gameScoresWrapperStyle = {};

class GameScoresWrapper extends Component {

  render() {
    return (
      <div style={gameScoresWrapperStyle}>
        <div>
          <div className="container nopad">
            <div className="row">
              {this.props.children}
              <KothScores />
              <JeopardyScores />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GameScoresWrapper.contextType = ScoreboardContext;

export default GameScoresWrapper;
