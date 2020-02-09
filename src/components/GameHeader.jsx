import React, { Component } from 'react';
import bgImg from '../images/ctf_header_img02.png'

class GameHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const headerStyles = {};
    const imgStyles = {
      width: "100%"
    };

    return (
      <div className="col-12 " style={headerStyles}>
        <img src={bgImg} alt="" style={imgStyles} />
      </div>
    );
  }
}

export default GameHeader;
