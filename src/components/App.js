import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
    <h1 data-ns-test="project-name">Simple Calculator</h1>;
    <p data-ns-test="project-description"> This simple calculator does all basic mathmatical calculation </p>;
    
    </div>
  )
  
ReactDOM.render(
  App,
  document.getElementById('root')
);
}


export default App;
