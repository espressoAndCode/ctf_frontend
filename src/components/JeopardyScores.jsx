import React, { Component } from "react";
import PlayerDisplayBar from "./PlayerDisplayBar";
import ScoreboardContext from "context/ScoreboardContext";

class JeopardyScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localScores: []
    };
  }

  render() {
    const globalScores = { ...this.context.scoreboard };
    const localScores = [];
    for (let item in globalScores) {
      if (globalScores[item]["JE"]) {
        var tempItem = {
          name: item,
          total: globalScores[item]["JE"][0],
          points: globalScores[item]["JE"].slice(1)
        };
        localScores.push(tempItem);
      }
    }

    const items = Array.prototype.slice.call(localScores)
      .sort((a, b) => b.total - a.total)
      .map(item => (
        <PlayerDisplayBar
          key={item.name}
          playerId={item.name}
          playerName={item.name}
          points={item.points}
          total={item.total}
        />
      ));

    const scoreStyles = {
      div: {
        backgroundColor: "rgba(50,50,50,.8)",
        color: "#fff"
      },
      tabledarkover: {
        backgroundColor: "rgba(50,50,50,.0)",
        color: "#fff"
      }
    };

    return (
      <div className="col-6" style={scoreStyles.div}>
        <h2>Jeopardy</h2>
        <table
          className="table table-borderless"
          style={scoreStyles.tabledarkover}
        >
          <thead>
            <tr className="row" style={scoreStyles.tr}>
              <th scope="col" className="col-2">
                Score{" "}
              </th>
              <th scope="col" className="col-2">
                Name{" "}
              </th>
              <th scope="col" className="col-8">
                Flags
              </th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
}

JeopardyScores.contextType = ScoreboardContext;

export default JeopardyScores;
