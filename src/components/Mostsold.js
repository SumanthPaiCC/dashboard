import React, { Component } from "react";
//import { List,Avatar } from "antd";
import { ListGroup, Image } from "react-bootstrap";
import { anIcon } from "./assets/anicon.png";
import { apIcon } from "./assets/apicon.png";
import { green } from "./assets/green.png";
import { blue } from "./assets/blue.png";
import { purple } from "./assets/purple.png";
import "./Listitem.scss";
class MostSold extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      /* console.log(this.props.data)
      let arr=[]
      this.props.data.map((item)=>{
        
        arr.push(item.price)
        console.log(Math.max(arr))
      }) */
      let max = Math.max.apply(Math, this.props.data.map(function(item) { return item.price; }))
      
    return (
      <div>
      
        <ListGroup>
          {this.props.data.map((item, index) => {
            if (item.price==max) {
                
              return (
                <ListGroup.Item key={index} className="listGrp">
                  <div className="listCont">
                    <div className="rimage">
                      {/* <img src={item.rImage} alt='rimage'/> */}
                      <Image src={green} alt="rimage" rounded />
                    </div>
                    <div>
                      <img src={item.bImage} alt="bImage" />
                    </div>
                    <div>
                      <div className="title">{item.title}</div>
                      <div>{item.serial}</div>
                    </div>
                    <div>
                      <div className="date">{item.date}</div>
                      <div className="time">{item.time}</div>
                    </div>

                    <div className="price">${item.price}</div>
                  </div>
                </ListGroup.Item>
              );
            }
          })}
        </ListGroup>
      </div>
    );
  }
}

export default MostSold;
