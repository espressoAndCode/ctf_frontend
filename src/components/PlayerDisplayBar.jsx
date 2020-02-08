import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Badge from './Badge';
import bgImg from '../images/metal_plate.jpg'

const styles = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  color: "#fff",
  borderRadius: '30px',
  margin: '5px',
  whiteSpace: 'nowrap'
};

class PlayerDisplayBar extends Component {
  render() {
    const pointsAry = this.props.points;
    const badges = pointsAry.map(item => (
      <Badge key={item[0]} name={item[0]} point={item[1]} />
    ));

    return (
      <Zoom>
        <tr key={this.props.playerId} className="row" style={styles}>
          <td className="col-2">{this.props.total}</td>
          <td className="col-3">
            <div class="row text-wrap text-left">{this.props.playerName}</div>
          </td>
          <td className="col-7 align-self-start">
            <div class="row">{badges}</div>
          </td>
        </tr>
      </Zoom>
    );
  }
}

export default PlayerDisplayBar;

