import React from "react";
import axios from "axios";

const JeopardyContext = React.createContext();
export default JeopardyContext;

export class JeopardyProvider extends React.Component {
  state = {
    // REFERENCE:
    // "DC864": {
    //   "KO": [85,["KO001",10],["KO234",25],["KO1337",50]],
    //   "JE": [50,["JE666",50]],
    // },
    // "Anonymous": {
    //   "KO": [40, ["KO999", 40]],
    //   "JE": [80, ["JE356", 30],["JE666", 50]],
    // },
  };

  getChallenges() {
    axios.get("http://127.0.0.1:5000/jeopardy").then(res => {
      const data = res.data;
      this.setState(data);
    });
  }

  render() {
    const value = {
      // targets: this.targets,
      // players: this.players,
      // jeopardy: this.state,
      // addScore: this.addScore,
      // verify: this.verify
    };
    return (
      <JeopardyContext.Provider value={value}>
        {this.props.children}
      </JeopardyContext.Provider>
    );
  }
}
