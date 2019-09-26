import ReactDOM from "react-dom";
import React, { Component } from "react";

var gp = "Italian GP";

// new pics
const rn_big = <img src={require('../src/gp_new_big.jpg')} alt="pic1"></img>;
const rn_sm_1 = <img src={require('../src/gp_new_sm1.jpg')} alt="pic2"></img>;
const rn_sm_2 = <img src={require('../src/gp_new_sm2.jpg')} alt="pic3"></img>;

const div_pic_style_big = {
  width: '460px',
  height: '250px',
  overflow: 'hidden',
};

const div_pic_style_small = {
  width: '230px',
  height: '130px',
  overflow: 'hidden',
};

const link_css = {
  display: 'contents',
  textDecoration: 'none',
};

class Racenews extends Component{
  render(){
    return(
      <div id = "racenews_outer_div">
        <div id = "racenews_inner_div">
          <h1>{gp}</h1>
          <div id = "rn_big_new">
            <a href="#"  style={link_css}>
              <div style = {div_pic_style_big} > {rn_big}</div>
              <div  id="rn_big_textbox">
                <h4>FEATURE</h4>
                <p>Ross's Italian GP review: An incredible spectacle in Monza</p>
              </div>
            </a>
          </div>
          <div id = "rn_small_new_1">
            <a href="#"  style={link_css}>
              <div style={div_pic_style_small}>{rn_sm_1}</div>
              <div class="rn_sm_textbox">
                <h4>NEWS</h4>
                <p>FIA explain of F1's 'yellow card' for Leclerc at Monza</p>
              </div>
            </a>
          </div>
          <div id = "rn_small_new_2">
            <a href="#"  style={link_css}>
              <div style={div_pic_style_small}>{rn_sm_2}</div>
              <div class="rn_sm_textbox">
                <h4>NEWS</h4>
                <p>'The new generation get away with a lot more' says Hamilton after tense Leclerc battle</p>
              </div>
            </a>
          </div>
          <a href="#"  style={link_css}>
            <div id = "rn_text_new_1" class = "rn_text_new">
              <h4>NEWS</h4>
              <p>Bottas 'gutted' not to find a way past Leclerc in Italy</p>
            </div>
          </a>
          <a href="#"  style={link_css}>
            <div id = "rn_text_new_2" class = "rn_text_new">
              <h4>NEWS</h4>
              <p>Ricciardo Renault performance at power-rewarding Monza 'a real statement'</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Racenews;
