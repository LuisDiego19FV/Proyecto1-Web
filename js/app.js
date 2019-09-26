import ReactDOM from "react-dom";
import React, { Component } from "react";
import News from "./news";
import Racenews from "./racenews";
import Morenews from "./morenews";
import Drivers from "./drivers";
import Teams from "./teams";
import Gaming from "./gaming";
import Standings from "./standings";
import Races from "./races";
import Allraces from "./allraces";
import Moreoptions from "./moreoptions";

const fia_logo = <img src={require('../src/fia_logo.png')} alt="fia" id="fia_logo"></img>;
const f1_logo = <img src={require('../src/f1_logo.svg')} alt="f1" id="f1_logo"></img>;
const f1tv_logo = <img src={require('../src/f1tv_logo.png')} alt="f1TV" id="f1tv_logo"></img>;

const driversInstance = new Drivers();
const driversCode = driversInstance.render();

const teamsInstance = new Teams();
const teamsCode = teamsInstance.render();

const gamingInstance = new Gaming();
const gamingCode = gamingInstance.render();

const standingsInstance = new Standings();
const standingsCode = standingsInstance.render();

const racesInstance = new Races();
const racesCode = racesInstance.render();

class App extends Component{
  render(){
    return(
      <header>
        {fia_logo}
        <div id="fia_separator"></div>
        <div id="tri_css"></div>
        <ul id = "formulas">
          <li><a class="active_formula" href="#home"> F1 <sup>&reg;</sup></a></li>
          <li><a class="inactive_formula" href="#home"> F2	<sup>&reg;</sup></a></li>
          <li><a class="inactive_formula" href="#home"> F3	<sup>&reg;</sup></a></li>
        </ul>
        <ul id = "options">
          <li><a href="#home"> AUTHENTICS </a></li>
          <li><a href="#home"> STORE </a></li>
          <li><a href="#home"> TICKETS </a></li>
          <li><a href="#home"> HOSPITALITY </a></li>
          <li><a href="#home"> EXPERIENCES </a></li>
          <li><div id="separator"></div></li>
          <li>{f1tv_logo}</li>
          <li><div id="separator"></div></li>
          <li><button type="button" id="signin_btn"> SIGN IN </button></li>
          <li><button type="button" id="subscribe_btn"> SUBSCRIBE </button></li>
        </ul>
        <div id="topnav">
          {f1_logo}
          <div id="menu">
            <a href="#home" class="menu_link">Latest</a>
            <a href="#news" class="menu_link">Video</a>
            <div class = "dropdown">
              <button>Races v</button>
              <div id = "races_drodown">
                {racesCode}
              </div>
            </div>
            <div class = "dropdown">
              <button>Standings v</button>
              <div id = "standings_drodown">
                {standingsCode}
              </div>
            </div>
            <div class = "dropdown">
              <button>Drivers v</button>
              <div id="drives_drodown">
                {driversCode}
              </div>
            </div>
            <div class = "dropdown">
              <button>Teams v</button>
              <div id = "teams_drodown">
                {teamsCode}
              </div>
            </div>
            <div class = "dropdown">
              <button>Gaming v</button>
              <div id = "gaming_drodown">
                {gamingCode}
              </div>
            </div>
            <a href="#about" class="menu_link">Live Timing</a>
          </div>
        </div>
      </header>
    );
  }
}

ReactDOM.render(<App/>,  document.getElementById("app"));
ReactDOM.render(<News/>,  document.getElementById("news_section"));
ReactDOM.render(<Racenews/>,  document.getElementById("racenews_section"));
ReactDOM.render(<Morenews/>,  document.getElementById("more_news_part"));
ReactDOM.render(<Allraces/>,  document.getElementById("allraces_section"));
ReactDOM.render(<Moreoptions/>,  document.getElementById("moreoptions_section"));
