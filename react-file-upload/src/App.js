import React from "react";
import "./App.css";
import axios from 'axios';

constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }

maxSelectFile=(event)=>{
  let files = event.target.files // create file object
      if (files.length > 3) { 
         const msg = 'Only 3 images can be uploaded at a time'
         event.target.value = null // discard selected file
         console.log(msg)
        return false;

    }
  return true;

}

onChangeHandler=event=>{
  var files = event.target.files
  if(this.maxSelectFile(event)){ 
  // if return true allow to setState
     this.setState({
     selectedFile: files
  })
}
}
onClickHandler = () => {
  const data = new FormData()
  data.append('file', this.state.selectedFile)
  axios.post("http://localhost:8000/upload", data, { 
     // receive two    parameter endpoint url ,form data
 })

 .then(res => { // then print response status
  console.log(res.statusText)
})
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
