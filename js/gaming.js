import ReactDOM from "react-dom";
import React, { Component } from "react";

const gaming_css = {
  position: 'absolute',
  top: '50px',
  left: '65px',
  height: '40px',
  width: '1145px',
  backGroundColor: 'white',
  borderBottomRightRadius: '10px',
  borderBottom: '1px solid #353442',
  borderRight: '1px solid #353442',
};

const redArrow = {
  color: 'red',
};

const link_css = {
  style: 'none',
};

class Gaming extends Component{
  render(){
    return(
      <div>
        <div style={gaming_css}>
          <ul id="dropdown_ul">
            <li><a href = "#">Esport  <b style={redArrow}>></b></a></li>
            <li><a href = "#">Fantasy  <b style={redArrow}>></b></a></li>
            <li><a href = "#">Daily Fantasy  <b style={redArrow}>></b></a></li>
            <li><a href = "#">F1 Play  <b style={redArrow}>></b></a></li>
            <li><a href = "#">F1 2019 - The Official Video Game  <b style={redArrow}>></b></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Gaming;
