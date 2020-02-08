import React from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import GameHeader from "./components/GameHeader";
import GameBoardWrapper from "./components/GameBoardWrapper";
// import GameAdminWrapper from "./components/GameAdminWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  toast.configure();

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <GameHeader />
        </div>
      </div>
      <div>
        {/* <Route path="/admin" component={GameAdminWrapper} /> */}
        <Route path="/" component={GameBoardWrapper} />
      </div>
    </div>
  );
}

export default App;
