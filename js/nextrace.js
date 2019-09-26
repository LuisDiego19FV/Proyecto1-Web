import ReactDOM from "react-dom";
import React, { Component } from "react";

const timer_div = {
  position: 'relative',
  overflow: 'hidden',
  top: '20px',
  left: '810px',
  width: '300px',
  height: '100px',
  backgroundColor: '#1D1D27',
  borderRadius: '10px',
};

const rolex_div = {
  overflow: 'hidden',
  float: 'right',
  width: '90px',
  height: '100px',
  backgroundColor: 'white',
};

const rolex_css = {
  position: 'relative',
  top: '27px',
  left: '16px',
  width: '60px',
  height: '40px',
};

const title_div = {
  position: 'relative',
  overflow: 'hidden',
  top: '10px',
  left: '20px',
  width: '170px',
  height: '30px',
  backgroundColor: '#343341',
  borderRadius: '12px',
};

const race_name_div = {
  position: 'absolute',
  overflow: 'hidden',
  top: '50px',
  left: '210px',
  width: '580px',
  height: '50px',
  backgroundColor: 'black',
  borderTop : '0.2px solid #353442',
};

const race_track_div = {
  position: 'absolute',
  overflow: 'hidden',
  top: '50px',
  left: '135px',
  width: '60px',
  height: '50px',
  backgroundColor: 'black',
  borderRight : '0.2px solid #353442',
  borderTop : '0.2px solid #353442',
  borderTopRightRadius: '10px',
};

const race_css = {
  position: 'absolute',
  top: '15%',
  right: '15%',
  width: '80%',
  height: '70%',
}

class Next_race extends Component{
  render(){
    return(
      <div>
        <div style={timer_div}>
          <div style={rolex_div}>
            <img src={require('../src/rolex_logo.png')} alt="rolex" style={rolex_css}>
            </img>
          </div>
          <div style={title_div}>
            <p id = "grandprix_title">GRAND PRIX WEEKEND</p>
          </div>
          <p id="next_grand_prix">12 OCT</p>
        </div>
        <div style={race_name_div}>
          <p id="grand_prix_name">JAPAN 2019</p>
        </div>
        <div style={race_track_div}>
          <img src={require('../src/next_race.png')} alt="race" style={race_css}>
          </img>
        </div>
        <p id="next_race_date">10 - 12 October</p>
      </div>
    )
  }
}

export default Next_race;
