import React, { Component } from "react";
import JeopardyChallengeBar from "./JeopardyChallengeBar";
import axios from "axios";

class JeopardyChallenges extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getChallenges();
  }

   getChallenges() {
     axios.get("https://10.101.0.2:5001/jeopardy").then(res => {
      const data = res.data;
      this.setState(data);
    });
  }

  render(){
    const globalChallenges = { ...this.state};
    const localChallenges = [];
    for (let item in globalChallenges) {
        var tempItem = {
          idx: item,
          name: globalChallenges[item]["name"],
          score: globalChallenges[item]["score"],
          instructions: globalChallenges[item]["instructions"],
          hint: globalChallenges[item]["hint"]
        };
        localChallenges.push(tempItem);
    }

    const items = Array.prototype.slice
      .call(localChallenges)
      .sort((a, b) => b.total - a.total)
      .map(item => (
        <JeopardyChallengeBar
          key={item.idx}
          id={item.idx}
          name={item.name}
          instructions={item.instructions}
          hint={item.hint}
        />
      ));

    const scoreStyles = {
      div: {
        backgroundColor: "rgba(50,50,50,.8)",
        color: "#fff",
        padding: "0px"
      }
    };

    return (
      <div className="col-12" style={scoreStyles.div}>
        <h1>Jeopardy</h1>
        {items}
      </div>
    );
  }
}

export default JeopardyChallenges;

