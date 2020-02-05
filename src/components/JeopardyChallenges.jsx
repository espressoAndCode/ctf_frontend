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
    axios.get("http://127.0.0.1:5000/jeopardy").then(res => {
      const data = res.data;
      this.setState(data);
      console.log(data)

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
          key={item.name}
          name={item.name}
          instructions={item.instructions}
          hint={item.hint}
        />
      ));

    const scoreStyles = {
      div: {
        backgroundColor: "rgba(50,50,50,.8)",
        color: "#fff"
      }
    };

    return (
      <div className="col-12" style={scoreStyles.div}>
          {items}
      </div>
    );
  }



}



// JeopardyChallenges.contextType = JeopardyContext;

export default JeopardyChallenges;

