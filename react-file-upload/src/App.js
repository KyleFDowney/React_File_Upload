import React from "react";
import logo from "./logo.svg";
import "./App.css";

onChangeHandler = event => {
  console.log(event.target.files[0]);
};

function App() {
  return (
    <div className="App">
      <input type="file" name="file" onChange={this.onChangeHandler} />
    </div>
  );
}

export default App;
