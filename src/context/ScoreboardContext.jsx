import React from 'react';
import axios from "axios";

const ScoreboardContext = React.createContext();
export default ScoreboardContext;

export class ScoreboardProvider extends React.Component {

         state = {
           // REFERENCE:
           // "DC864": {
           //   "KO": [85,["KO001",10],["KO234",25],["KO1337",50]],
           //   "JE": [50,["JE666",50]],
           // },
           // "Anonymous": {
           //   "KO": [40, ["KO999", 40]],
           //   "JE": [80, ["JE356", 30],["JE666", 50]],
           // },
         };

         componentDidMount(){
           setInterval(() => this.getScores(), 5000);
         }

         getScores() {
           axios.get("http://127.0.0.1:5000/scores").then(res => {
             const data = res.data;
             this.setState(data)
           });
         }

         render() {
           const value = {
             targets: this.targets,
             players: this.players,
             scoreboard: this.state,
             addScore: this.addScore,
             verify: this.verify
           };
           return (
             <ScoreboardContext.Provider value={value}>
               {this.props.children}
             </ScoreboardContext.Provider>
           );
         }
       }
