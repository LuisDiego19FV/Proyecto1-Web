import ReactDOM from "react-dom";
import React, { Component } from "react";

const abud = <img src={require('../src/place/abu.jpg')} alt="pic1"></img>;
const aus1 = <img src={require('../src/place/australia.jpg')} alt="pic1"></img>;
const aus2 = <img src={require('../src/place/austria.gif')} alt="pic1"></img>;
const azer = <img src={require('../src/place/azerbaijan.jpg')} alt="pic1"></img>;
const bahr = <img src={require('../src/place/bahrain.jpg')} alt="pic1"></img>;
const belg = <img src={require('../src/place/belgium.jpg')} alt="pic1"></img>;
const braz = <img src={require('../src/place/brazil.jpg')} alt="pic1"></img>;
const cana = <img src={require('../src/place/canada.jpg')} alt="pic1"></img>;
const chin = <img src={require('../src/place/china.gif')} alt="pic1"></img>;
const fran = <img src={require('../src/place/france.png')} alt="pic1"></img>;
const grea = <img src={require('../src/place/GB.gif')} alt="pic1"></img>;
const germ = <img src={require('../src/place/germany.gif')} alt="pic1"></img>;
const hung = <img src={require('../src/place/hungary.gif')} alt="pic1"></img>;
const ital = <img src={require('../src/place/italy.jpg')} alt="pic1"></img>;
const japa = <img src={require('../src/place/japan.jpg')} alt="pic1"></img>;
const mexi = <img src={require('../src/place/mexico.jpg')} alt="pic1"></img>;
const mona = <img src={require('../src/place/monaco.jpg')} alt="pic1"></img>;
const russ = <img src={require('../src/place/russia.jpg')} alt="pic1"></img>;
const sing = <img src={require('../src/place/singapore.jpg')} alt="pic1"></img>;
const spai = <img src={require('../src/place/spain.gif')} alt="pic1"></img>;
const unit = <img src={require('../src/place/USA.jpg')} alt="pic1"></img>;

class Allraces extends Component{
  render(){
    return(
      <div id="allraces_main">
        <div id="allraces_grid" class="allraces_grid1">
          <div>
            {aus1}
            <p class="allraces_name">AUSTRALIA</p>
            <p class="allraces_number">14</p>
            <p class="allraces_month">MAR</p>
          </div>
          <div>
            {bahr}
            <p class="allraces_name">BAHRAIN</p>
            <p class="allraces_number">31</p>
            <p class="allraces_month">MAR</p>
          </div>
          <div>
            {chin}
            <p class="allraces_name">CHINA</p>
            <p class="allraces_number">14</p>
            <p class="allraces_month">APR</p>
          </div>
          <div>
            {azer}
            <p class="allraces_name">AZERBAIJAN</p>
            <p class="allraces_number">28</p>
            <p class="allraces_month">MAR</p>
          </div>
          <div>
            {spai}
            <p class="allraces_name">SPAIN</p>
            <p class="allraces_number">12</p>
            <p class="allraces_month">MAY</p>
          </div>
          <div>
            {mona}
            <p class="allraces_name">MONACO</p>
            <p class="allraces_number">26</p>
            <p class="allraces_month">MAY</p>
          </div>
          <div>
            {cana}
            <p class="allraces_name">CANADA</p>
            <p class="allraces_number">09</p>
            <p class="allraces_month">JUN</p>
          </div>
          <div>
            {fran}
            <p class="allraces_name">FRANCE</p>
            <p class="allraces_number">23</p>
            <p class="allraces_month">JUN</p>
          </div>
          <div>
            {aus2}
            <p class="allraces_name">AUSTRIA</p>
            <p class="allraces_number">30</p>
            <p class="allraces_month">JUN</p>
          </div>
          <div>
            {grea}
            <p class="allraces_name">GREAT BRITAIN</p>
            <p class="allraces_number">14</p>
            <p class="allraces_month">JUL</p>
          </div>
          <div>
            {germ}
            <p class="allraces_name">GERMANY</p>
            <p class="allraces_number">28</p>
            <p class="allraces_month">JUL</p>
          </div>
          <div>
            {hung}
            <p class="allraces_name">HUNGARY</p>
            <p class="allraces_number">04</p>
            <p class="allraces_month">AUG</p>
          </div>
          <div>
            {belg}
            <p class="allraces_name">BELGIUM</p>
            <p class="allraces_number">01</p>
            <p class="allraces_month">SEP</p>
          </div>
          <div>
            {ital}
            <p class="allraces_name">ITALY</p>
            <p class="allraces_number">08</p>
            <p class="allraces_month">SEP</p>
          </div>
          <div>
            {sing}
            <p class="allraces_name">SINGAPORE</p>
            <p class="allraces_number">22</p>
            <p class="allraces_month">SEP</p>
          </div>
          <div>
            {russ}
            <p class="allraces_name">RUSSIA</p>
            <p class="allraces_number">29</p>
            <p class="allraces_month">SEP</p>
          </div>
          <div>
            {japa}
            <p class="allraces_name">JAPAN</p>
            <p class="allraces_number">12</p>
            <p class="allraces_month">OCT</p>
          </div>
          <div>
            {mexi}
            <p class="allraces_name">MEXICO</p>
            <p class="allraces_number">27</p>
            <p class="allraces_month">OCT</p>
          </div>
          <div>
            {unit}
            <p class="allraces_name">USA</p>
            <p class="allraces_number">03</p>
            <p class="allraces_month">NOV</p>
          </div>
          <div>
            {aus1}
            <p class="allraces_name">BRAZIL</p>
            <p class="allraces_number">17</p>
            <p class="allraces_month">NOV</p>
          </div>
          <div>
            {aus1}
            <p class="allraces_name">ABU DHABI</p>
            <p class="allraces_number">01</p>
            <p class="allraces_month">DEC</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Allraces;
