import React from 'react';
import axios from "axios";

const ScoreboardContext = React.createContext();
export default ScoreboardContext;

export class ScoreboardProvider extends React.Component {

  POLLING_INTERVAL = 15000;
  state = {};

  componentDidMount(){
    this.getScores();
    setInterval(() => this.getScores(), this.POLLING_INTERVAL);
  }

  getScores() {
    axios.get("https://10.101.0.2:5001/scores").then(res => {
      const data = res.data;
      this.setState(data);
    });
  }

  render() {
    const value = {
      targets: this.targets,
      players: this.players,
      scoreboard: this.state,
      addScore: this.addScore,
      verify: this.verify
    };
    return (
      <ScoreboardContext.Provider value={value}>
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}
