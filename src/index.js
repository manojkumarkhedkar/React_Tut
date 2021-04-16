import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

//using JSX way to show data given below
const mysurame = "Khedkar";
const name = "manoj K";
ReactDOM.render(
  <React.Fragment>
    <h1>Hello world</h1>
    <h2>{`my name is ${name} ${mysurame}`}</h2>
    <p> hi i am manoj</p>
    <ol>
      <li>Apple</li>
      <li>Mango</li>
      <li>Graps</li>
      <li>Strawbarre</li>
      <li>Banana</li>
    </ol>
    {20 + 3}
    <br></br>
    {mysurame}
    {Math.random()}
  </React.Fragment>,

  document.getElementById("root")
);
//  ReactDOM.render(kay dekhna hai, kaha dekhna hai);
// render() method take only single element

// if u want use mulitple element in render() method than warp it inside single <div>

//using javascript way to show data
// var h1 = document.createElement("h1");
// h1.innerHTML = "Manoj ";
// document.getElementById("root").appendChild(h1);
