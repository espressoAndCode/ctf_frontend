import React, { Component } from "react";
import GameTimer from "./GameTimer";
import PlayerDocsWrapper from "./PlayerDocsWrapper";
import PlayerJeopardyWrapper from "./PlayerJeopardyWrapper";
import GameScoresWrapper from "./GameScoresWrapper";
import ScoreboardContext from "context/ScoreboardContext";
import Nav from "react-bootstrap/Nav";
import { Route } from "react-router-dom";
import bgImg from "../images/grunge.jpg";

const gameBoardWrapperStyle = {

};

class GameBoardWrapper extends Component {
  state = {
    // pollInterval: 15000,
    endTime: "09:00:00 PM",
    scoreboard: {}
  }

  players = this.context.players;
  targets = this.context.targets;

  updateScore() {
    const newScores = this.context.scoreboard;
    this.setState({ scoreboard: newScores })
  }

  playGame() {
    setInterval(() =>  this.updateScore(), this.state.pollInterval);
    console.log("Game started");
  }

  addScore (playerId, target) {
    this.context.addScore(playerId, target);
  };

  componentDidMount() {
    this.playGame();
  }

  render() {
    const styles = {
      tab: {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        margin: "0px 5px 0px"
      }
    };

    return (
      <div style={gameBoardWrapperStyle}>
        <div>
          <div className="container">
            <div className="row">
              <GameTimer endTime={this.state.endTime} />
            </div>
          </div>

          <div className="container">
            <Nav variant="pills" defaultActiveKey="/player">
              <Nav.Item>
                <Nav.Link eventKey="player" href="/player" style={styles.tab}>
                  Player Docs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="jeopardy"
                  href="/jeopardy"
                  style={styles.tab}
                >
                  Jeopardy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="scores" href="/scores" style={styles.tab}>
                  Scoreboard
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <div>
              <Route path="/scores" component={GameScoresWrapper} />
              <Route path="/jeopardy" component={PlayerJeopardyWrapper} />
              <Route path="/player" component={PlayerDocsWrapper} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GameBoardWrapper.contextType = ScoreboardContext;

export default GameBoardWrapper;
