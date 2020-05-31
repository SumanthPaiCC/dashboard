import React, { Component } from "react";
//import { List,Avatar } from "antd";
import { ListGroup,Image } from "react-bootstrap";
import anIcon from "./assets/android copy 3.svg";
import apIcon  from "./assets/apple copy.svg";
import winIcon from './assets/windows copy 2.svg'
import  green  from "../assettwo/greenandroid.svg";
import blue  from "./assets/bluewindows.svg";
import purple from "./assets/purpleapple.svg";
import "./Listitem.scss";
class Listitem extends Component {
  constructor(props){
    super(props)
  }
  render() {
   
    return (
      <div>
        

        <ListGroup>
          {this.props.data.map((item, index) => {
            return (
              <ListGroup.Item key={index} className="listGrp">
                <div className="listCont">
                <div className='rimage'>
                  {/* <img src={item.rImage} alt='rimage'/> */}
                  <img src={green} alt='rimage' />
                  
                </div>
                  <div>
                    <img src={item.bImage} alt="bImage" />
                  </div>
                  <div>
                    <div className="title">{item.title}</div>
                    <div>{item.serial}</div>
                  </div>
                  <div>
                    <div className='date'>{item.date}</div>
                    <div className='time'>{item.time}</div>
                  </div>

                  <div className='price'>${item.price}</div>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        
      </div>
    );
  }
}

export default Listitem;
