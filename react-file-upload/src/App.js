import React from "react";
import "./App.css";
import axios from 'axios';

constructor(props) {
  super(props);
    this.state = {
      selectedFile: null
    }
 
}

onChangeHandler=event=>{
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
  })
}
onClickHandler = () => {
  const data = new FormData() 
  data.append('file', this.state.selectedFile)
}


function App() {
  return (
    <div className="App">
      <input type="file" name="file" onChange={this.onChangeHandler} />
      <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
    </div>
  );
}

export default App;
