import React, { Fragment } from "react";
import './App.css';

// Importing Components
import InputList from "./components/InputList";
import ListUser from "./components/ListUser";

function App() {
  return (
      <Fragment> 
        <div className="container">
          <ListUser />
        </div>
      </Fragment>
    );
}

export default App;