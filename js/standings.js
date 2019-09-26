import ReactDOM from "react-dom";
import React, { Component } from "react";

const standing_css = {
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
}

const link_css = {
  style: 'none',
}

class Standings extends Component{
  render(){
    return(
      <div>
        <div style={standing_css}>
          <ul id="dropdown_ul">
            <li><a href = "#">2019 Season  <b style={redArrow}>></b></a></li>
            <li><a href = "#">Driver Standings  <b style={redArrow}>></b></a></li>
            <li><a href = "#">Constructor Standings  <b style={redArrow}>></b></a></li>
            <li><a href = "#">Archive 1950-2018   <b style={redArrow}>></b></a></li>
            <li><a href = "#">F1 Awards   <b style={redArrow}>></b></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Standings;
