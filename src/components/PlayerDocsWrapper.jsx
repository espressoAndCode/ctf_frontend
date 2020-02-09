import React, { Component } from "react";
import PlayerDocsBody from "./PlayerDocsBody"


const playerDocsWrapperStyle = {
  color: '#ffffff'
};

class PlayerDocsWrapper extends Component {
  state = {
  };
  render() {
    return (
      <div style={playerDocsWrapperStyle}>
        <div>
          <div className="container">
            <div className="row">
              <PlayerDocsBody/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerDocsWrapper;
