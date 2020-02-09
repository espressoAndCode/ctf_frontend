import React, { Component } from "react";


class PlayerDocsBody extends Component {
  render() {
    const docStyles = {
      div: {
        backgroundColor: "rgba(50,50,50,.8)",
        color: "#fff",
        padding: "0px"
      },
      p: {
        textAlign: "left",
        padding: "0px 20px 0px",
        fontSize: "1.2em"
      },
      h2: {
        textAlign: "left",
        padding: "0px 20px 0px"
      }
    };

    return (
      <div className="col-12" style={docStyles.div}>
        <h1>How to Play the Game</h1>
        <p style={docStyles.p}>
          Welcome to DefCON864's Capture the Flag! There are two ways to play
          this game - <strong>King of the Hill</strong>, and
          <strong> Jeopardy.</strong>
        </p>
        <h2 style={docStyles.h2}>King of the Hill</h2>
        <p style={docStyles.p}>
          In this version of the game, players compete to see who can infiltrate
          the game machines and plant their team flag in a target file. Once
          their flag is in place, the game server will automatically count
          points for as long as it's there. Once you're team is King of the
          Hill, you'll have to defend it from other teams who will be trying to
          knock you off!
        </p>
        <p style={docStyles.p}>
          King of the Hill is a great chance to show off your{" "}
          <strong>Red Team</strong> <em>and</em> <strong>Blue Team</strong>{" "}
          chops.
        </p>
        <h2 style={docStyles.h2}>Jeopardy</h2>
        <p style={docStyles.p}>Jeopardy is a great way to play if you're just getting started, or if you don't have a lot of time. In Jeopardy, you can choose from a series of Challenges that range from easy to pretty tough. When you solve the Challenge, just enter the answer at the prompt. Don't forget to add your team name to count your points, and make sure that you spell it the same way on each Challenge. Capture the Flag's scoring server is case-sensitive, so any variation in spelling will make your points count incorrectly! </p>
        <p style={docStyles.p}></p>
        <p style={docStyles.p}></p>
      </div>
    );
  }
}

export default PlayerDocsBody;
