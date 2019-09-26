import ReactDOM from "react-dom";
import React, { Component } from "react";

const f1 = <img src={require('../src/f1.png')} alt="pic1"></img>;
const opt1 = <img src={require('../src/End/Heineken.png')} alt="pic1"></img>;
const opt2 = <img src={require('../src/End/Pirelli.png')} alt="pic1"></img>;
const opt3 = <img src={require('../src/End/DHL.png')} alt="pic1"></img>;
const opt4 = <img src={require('../src/End/Emirate.jpg')} alt="pic1"></img>;
const opt5 = <img src={require('../src/End/Rolex.png')} alt="pic1"></img>;

class Moreoptions extends Component{
  render(){
    return(
      <div id="moreoptions_main">
        <div id = "thislittle">{f1}</div>
        <p id="global_part">Global Partners <b>></b></p>
        <div id="moreoptions_grid">
          <div id="opt1">
            {opt1}
          </div>
          <div id="opt2">
            {opt2}
          </div>
          <div id="opt3">
            {opt3}
          </div>
          <div id="opt4">
            {opt4}
          </div>
          <div id="opt5">
            {opt5}
          </div>
        </div>
        <div id="last"></div>
      </div>
    )
  }
}

export default Moreoptions;
