import ReactDOM from "react-dom";
import React, { Component } from "react";

const grid_teams = {
  position: 'absolute',
  overflow: 'hidden',
  top: '130px',
  left: '65px',
  display: 'grid',
  width: '1200px',
  height: '320px',
  gridTemplateColumns: '270px 270px 270px 270px',
  gridGap: '15px 22px',
};

const title = {
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

class Teams extends Component{
  render(){
    return(
      <div>
        <div style={title}>
          <p id="teams_season_title">SEASON'S TEAMS</p>
        </div>
        <div style={grid_teams}>
          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">Alfa Romeo</p>
              <img src={require('../src/cars/alfa.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>
          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">McLaren</p>
              <img src={require('../src/cars/macl.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>
          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">Red Bull</p>
              <img src={require('../src/cars/redb.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>
          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">Williams</p>
              <img src={require('../src/cars/will.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>
          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">Ferrari</p>
              <img src={require('../src/cars/ferr.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>
          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">Mercedes</p>
              <img src={require('../src/cars/merc.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>
          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">Renault</p>
              <img src={require('../src/cars/rena.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>

          <div></div>

          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">Haas</p>
              <img src={require('../src/cars/haas.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>
          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">Racing Point</p>
              <img src={require('../src/cars/raci.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>
          <a href="" class="teams_links">
            <div class = "teams">
              <p class = "teams_names">Toro Rosso</p>
              <img src={require('../src/cars/toro.png')} alt="car_pic" class="car_pic"></img>
              <p class = "arrow2">></p>
            </div>
          </a>

          <div></div>
        </div>
      </div>
    )
  }
}

export default Teams;
