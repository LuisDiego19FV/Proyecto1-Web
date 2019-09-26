import ReactDOM from "react-dom";
import React, { Component } from "react";
import Nextrace from "./nextrace";

const line_pattern = <img src={require('../src/line_pattern.png')} alt="" id="line_pattern"></img>;
const artc_pic = <img src={require('../src/article_italy.jpg')} alt="artc_pic" id="artc_pic"></img>;

// new pics
const n1 = <img src={require('../src/n1.jpg')} alt="n1"></img>;
const n2 = <img src={require('../src/n2.jpg')} alt="n2"></img>;
const n3 = <img src={require('../src/n3.jpg')} alt="n3"></img>;
const n4 = <img src={require('../src/n4.jpg')} alt="n4"></img>;
const n5 = <img src={require('../src/n5.jpg')} alt="n5"></img>;
const n6 = <img src={require('../src/n6.jpg')} alt="n6"></img>;

const div_pic_style = {
  width: '430px',
  height: '240px',
  overflow: 'hidden',
};

const div_pic_style_news = {
  width: '230px',
  height: '130px',
  overflow: 'hidden',
};

const link_css = {
  display: 'contents',
  textDecoration: 'none',
};

const nextRaceInstance = new Nextrace();
const nextRaceCode = nextRaceInstance.render();

class News extends Component{
  render(){
    return(
      <div>
        <div id="next_race">
          {nextRaceCode}
        </div>
        {line_pattern}
        <a href="#"  style={link_css}>
          <div class="article_feature" id="article1">
            <p>FEATURE</p>
            <h1>The Winners and Losers of the Italian Grand Prix</h1>
            <div style={div_pic_style}>
              {artc_pic}
            </div>
          </div>
        </a>
        <div class="grid_news_artc" id="news_grid">
          <a href="#"  style={link_css}>
            <div class="grid_news_artc_div">
              <div style={div_pic_style_news}>{n1}</div>
              <div class="grid_news_text_div">
                <p class="news_p_sm">NEWS</p>
                <p class="news_p_l">Binotto hails 'brave' Ferrari strategy after tiring Italian GP</p>
              </div>
            </div>
          </a>
          <a href="#"  style={link_css}>
            <div class="grid_news_artc_div">
              <div style={div_pic_style_news}>{n2}</div>
              <div class="grid_news_text_div">
                <p class="news_p_sm">NEWS</p>
                <p class="news_p_l">Grosjean baffled after Haas lack pace in Italy</p>
              </div>
            </div>
          </a>
          <a href="#"  style={link_css}>
            <div class="grid_news_artc_div">
              <div style={div_pic_style_news}>{n3}</div>
              <div class="grid_news_text_div">
                <p class="news_p_sm">NEWS</p>
                <p class="news_p_l">Alfa's Giovinazzi delighted after points finish at home</p>
              </div>
            </div>
          </a>
          <a href="#"  style={link_css}>
            <div class="grid_news_artc_div">
              <div style={div_pic_style_news}>{n4}</div>
              <div class="grid_news_text_div">
                <p class="news_p_sm">NEWS</p>
                <p class="news_p_l">Wolff: Leclerc's driving was 'maybe a little bit over the edge'</p>
              </div>
            </div>
          </a>
          <a href="#"  style={link_css}>
            <div class="grid_news_artc_div">
              <div style={div_pic_style_news}>{n5}</div>
              <div class="grid_news_text_div">
                <p class="news_p_sm">NEWS</p>
                <p class="news_p_l">Haas part ways with title sponsors</p>
              </div>
            </div>
          </a>
          <a href="#"  style={link_css}>
            <div class="grid_news_artc_div">
              <div style={div_pic_style_news}>{n6}</div>
              <div class="grid_news_text_div">
                <p class="news_p_sm">NEWS</p>
                <p class="news_p_l">FIA explain use of F1's 'yellow card' for Leclerc at Monza</p>
              </div>
            </div>
          </a>
          <div>
             <button type="button" id="more_news">VIEW LATEST NEWS</button>
          </div>
        </div>
      </div>
    );
  }
}

window.onscroll = function changeClass(){
  var scrollPosY = window.pageYOffset | document.body.scrollTop;

  if(scrollPosY > 215) {
    document.getElementById("article1").className = "article_feature_change1";
    document.getElementById("news_grid").className = "grid_news_artc_change";
  } else {
    document.getElementById("article1").className = "article_feature";
    document.getElementById("news_grid").className = "grid_news_artc";
  }

  if (scrollPosY > 770) {
    document.getElementById("article1").className = "article_feature_change2";
    document.getElementById("news_grid").className = "grid_news_artc";
  }

  if(scrollPosY > 2915) {
    document.getElementById("allraces_grid").className = "allraces_grid2";
  }

}

export default News;
