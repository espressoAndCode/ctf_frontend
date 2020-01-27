import React, { Component } from "react";
import JeopardyContext from "context/JeopardyContext";
import axios from "axios";


class JeopardyChallenges extends Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }

  componentDidMount(){
    const data = this.getChallenges();

  }

   getChallenges() {
    axios.get("http://127.0.0.1:5000/jeopardy").then(res => {
      const data = res.data;
      this.setState(data);
      console.log(data)

    });
  }

  render(){
    return "Test"
  }



}



JeopardyChallenges.contextType = JeopardyContext;

export default JeopardyChallenges;
