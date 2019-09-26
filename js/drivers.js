import ReactDOM from "react-dom";
import React, { Component } from "react";

const grid_drivers = {
  position: 'absolute',
  top: '110px',
  left: '65px',
  display: 'grid',
  width: '1200px',
  height: '260px',
  gridTemplateColumns: '270px 270px 270px 270px',
  gridGap: '10px 22px',
};

const season_css = {
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

class Drivers extends Component{
  render(){
    return(
      <div>
        <div style={season_css}>
          <p id="season_drivers_title">SEASON'S DRIVERS</p>
        </div>
        <div style={grid_drivers} id = "drivers_grid">
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare rb_color"></div>
              <p class = "driver_name">Alexander <b>ALBON</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare mer_color"></div>
              <p class = "driver_name">Lewis <b>HAMILTON</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare haas_color"></div>
              <p class = "driver_name">Kevin <b>MAGNUSSEN</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare wil_color"></div>
              <p class = "driver_name">George <b>RUSSELL</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare mer_color"></div>
              <p class = "driver_name">Valtteri  <b>BOTTAS</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare ren_color"></div>
              <p class = "driver_name">Nico <b>HULKENBERG</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare mac_color"></div>
              <p class = "driver_name">Lando <b>NORRIS</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare mac_color"></div>
              <p class = "driver_name">Carlos <b>SAINZ</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare toro_color"></div>
              <p class = "driver_name">Pierre <b>GASLY</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare wil_color"></div>
              <p class = "driver_name">Robert <b>KUBRICA</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare fi_color"></div>
              <p class = "driver_name">Sergio <b>PEREZ</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare fi_color"></div>
              <p class = "driver_name">Lance <b>STROLL</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare alfa_color"></div>
              <p class = "driver_name">Antonio <b>GIOVINAZZI</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare toro_color"></div>
              <p class = "driver_name">Danii <b>KVYAT</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare alfa_color"></div>
              <p class = "driver_name">Kimi <b>RAIKKONEN</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare rb_color"></div>
              <p class = "driver_name">Max <b>VERSTAPPEN</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare haas_color"></div>
              <p class = "driver_name">Romain <b>GROSJEAN</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare fer_color"></div>
              <p class = "driver_name">Charles <b>LECLERC</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare ren_color"></div>
              <p class = "driver_name">Dani <b>RICCIARDO</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
          <a href="">
            <div class = "driver">
              <div class = "driver_sqare fer_color"></div>
              <p class = "driver_name">Sebastian <b>VETTEL</b></p>
              <p class = "arrow">></p>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Drivers;
