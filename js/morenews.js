import ReactDOM from "react-dom";
import React, { Component } from "react";

const line_pattern = <img src={require('../src/line_pattern.png')} alt="" id="line_pattern2"></img>;

const mn1 = <img src={require('../src/morenews_1.jpg')} alt="mn1"></img>;
const mn2 = <img src={require('../src/morenews_2.jpg')} alt="mn2"></img>;
const mn3 = <img src={require('../src/morenews_3.jpg')} alt="mn3"></img>;
const mn4 = <img src={require('../src/morenews_4.jpg')} alt="mn4"></img>;

const blackline = {
  position: 'relative',
  top: '-10px',
  left: '150px',
  width: '985px',
  height: '10px',
  backgroundColor: '#000000',
};

const div_pic_style = {
  width: '480px',
  height: '280px',
  overflow: 'hidden',
};

const link_css = {
  display: 'contents',
  textDecoration: 'none',
};

class Morenews_part extends Component{
  render(){
      return(
        <div>
          <h1 id="more_news_title">More news</h1>
          <div style={blackline}></div>
          <div class="grid_more_news">
            <a href="#"  style={link_css}>
              <div class = "gridcomponent_more_news">
                <div style={div_pic_style}>{mn1}</div>
                <div class="texbox_div_morenews">
                  <h4>NEWS</h4>
                  <p>Family, friends and fellow racers remember Hubert at funeral in France</p>
                </div>
              </div>
            </a>
            <a href="#"  style={link_css}>
              <div class = "gridcomponent_more_news">
                <div style={div_pic_style}>{mn2}</div>
                <div class="texbox_div_morenews">
                  <h4>NEWS</h4>
                  <p>How Red Bull evolved the RB15 into a race winner</p>
                </div>
              </div>
            </a>
            <a href="#"  style={link_css}>
              <div class = "gridcomponent_more_news">
                <div style={div_pic_style}>{mn3}</div>
                <div class="texbox_div_morenews">
                  <h4>NEWS</h4>
                  <p>Kvyat rues missed points for Toro Rosso in home race</p>
                </div>
              </div>
            </a>
            <a href="#"  style={link_css}>
              <div class = "gridcomponent_more_news">
                <div style={div_pic_style}>{mn4}</div>
                <div class="texbox_div_morenews">
                  <h4>NEWS</h4>
                  <p>Wolff: Leclerc's driving was 'maybe a little bit over the edge'</p>
                </div>
              </div>
            </a>
          </div>
          {line_pattern}
        </div>
      );
  }
}

export default Morenews_part;
