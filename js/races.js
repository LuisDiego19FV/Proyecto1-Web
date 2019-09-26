import ReactDOM from "react-dom";
import React, { Component } from "react";

const racing_css = {
  position: 'absolute',
  top: '40px',
  left: '65px',
  height: '40px',
  width: '1145px',
  backGroundColor: 'white',
  borderBottomRightRadius: '10px',
  borderBottom: '1px solid #353442',
  borderRight: '1px solid #353442',
};

const races_css = {
  position: 'absolute',
  overflow: 'hidden',
  top: '90px',
  left: '65px',
  display: 'grid',
  width: '1200px',
  height: '292px',
  gridTemplateColumns: '270px 270px 270px 270px',
  gridGap: '15px 22px',
};

const redArrow = {
  color: 'red',
};

const nothing = {
  opacity: '0',
};

const previous_png = <img src={require('../src/races/singapore.png')} alt="sg"></img>;
const next_png = <img src={require('../src/races/russia.png')} alt="rs"></img>;
const upcoming_png_1 = <img src={require('../src/races/japan.png')} alt="jp"></img>;
const upcoming_png_2 = <img src={require('../src/races/mexico.png')} alt="mx"></img>;


class Races extends Component{
  render(){
    return(
      <div>
        <div style={racing_css}>
          <ul id="dropdown_ul">
            <li><a href = "#">All Races  <b style={redArrow}>></b></a></li>
          </ul>
        </div>
        <div style={races_css}>
          <div class="races_box_dd">
            <a href="#">
              <p class="just_a_title">PREVIOUS</p>
              <div class = "race_info_box_dd">
                <div class="race_info_box_img">
                  {previous_png}
                </div>
                <p class="gp_name_box">FORMULA 1 SINGAPORE GRAND PRIX 2019</p>
                <p class="gp_date_box">September 20-22</p>
              </div>
              <div class = "races_box_dd_border"></div>
            </a>
          </div>
          <div class="races_box_dd">
            <a href="#">
              <p class="just_a_title">NEXT</p>
              <div class = "race_info_box_dd">
                <div class="race_info_box_img">
                  {next_png}
                </div>
                <p class="gp_name_box">FORMULA 1 VTB RUSSIAN GRAND PRIX 2019</p>
                <p class="gp_date_box">September 27-29</p>
              </div>
              <div class = "races_box_dd_border"></div>
            </a>
          </div>
          <div class="races_box_dd">
            <a href="#">
              <p class="just_a_title">UPCOMING</p>
              <div class = "race_info_box_dd">
                <div class="race_info_box_img">
                  {upcoming_png_1}
                </div>
                <p class="gp_name_box">FORMULA 1 JAPANESE GRAND PRIX 2019</p>
                <p class="gp_date_box">October 11-13</p>
              </div>
            </a>
          </div>
          <div class="races_box_dd">
            <a href="#">
              <p style={nothing}>.</p>
              <div class = "race_info_box_dd">
                <div class="race_info_box_img">
                  {upcoming_png_2}
                </div>
                <p class="gp_name_box">FORMULA 1 GRAN PREMIO DE MEXIVO 2019</p>
                <p class="gp_date_box">October 25-27</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  };
};

export default Races;
