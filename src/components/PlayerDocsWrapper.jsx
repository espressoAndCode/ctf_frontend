import React, { Component } from "react";


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
              <h1>How to play the Game</h1>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerDocsWrapper;
