import React from 'react';
import {Badge} from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

const styles = {
  margin: '2px',
};

const MyBadge = (props) => {
  var color = 'success';
  if (props.point <= 25){
    color = 'danger';
  }else if (props.point <= 50){
    color = 'warning';
  }

  var disp =
    props.name.substring(0, 2) === "KO"
      ? "King of "+props.name + " for " + props.point + " cycles"
      : props.name + " for " + props.point + " points";
  return (
  <div className="pill-container">
      <Bounce top >
      <Badge pill variant={color} style={styles}>
        {disp}
      </Badge>
    </Bounce>
  </div> );
}

export default MyBadge;
