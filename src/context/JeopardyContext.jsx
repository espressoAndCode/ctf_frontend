import React from "react";
import axios from "axios";

const JeopardyContext = React.createContext();
export default JeopardyContext;

export class JeopardyProvider extends React.Component {
  state = {};
  componentDidMount(){
    this.getChallenges();

  }
  getChallenges() {
    axios.get("http://127.0.0.1:5000/jeopardy").then(res => {
      const data = res.data;
      this.setState(data);
    });
  }

  render() {
    const value = {

    };
    return (
      <JeopardyContext.Provider value={value}>
        {this.props.children}
      </JeopardyContext.Provider>
    );
  }
}
