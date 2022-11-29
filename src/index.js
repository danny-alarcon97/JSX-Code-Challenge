import React from "react";
import ReactDOM from "react-dom";

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

ReactDOM.render(
  <div>
    <h1>List App</h1>
    <ul>
      <li>This is the first item</li>
      <li>This is the second item</li>
      <li>This is the third item</li>
    </ul>
  </div>,
  document.getElementById("root")
);
