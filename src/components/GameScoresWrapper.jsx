import React, { Component } from "react";
// import GameTimer from "./GameTimer";
import KothScores from "./KothScores";
import JeopardyScores from "./JeopardyScores";
import ScoreboardContext from "context/ScoreboardContext";


const gameScoresWrapperStyle = {};

class GameScoresWrapper extends Component {
  // state = {
  //   endTime: "07:00:00 PM",
  //   scoreboard: {}
  // };

  // players = this.context.players;
  // targets = this.context.targets;

  // updateScore() {
  //   // const oldScores = { ...this.state.scoreboard };
  //   const newScores = this.context.scoreboard;
  //   this.setState({ scoreboard: newScores });
  // }

  // playGame() {
  //   // setInterval(() => this.getScores(), 5000);
  //   setInterval(() => this.updateScore(), 5000);
  //   // setTimeout(() => this.updateScore(), 5000);
  //   console.log("Game started");
  // }

  // addScore(playerId, target) {
  //   this.context.addScore(playerId, target);
  // }

  // componentDidMount() {
  //   this.playGame();
  //   // this.demoScoreboard();
  // }

  render() {
    return (
      <div style={gameScoresWrapperStyle}>
        <div>

          <div className="container">
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
