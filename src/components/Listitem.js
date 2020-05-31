import React, { Component } from "react";
//import { List,Avatar } from "antd";
import { ListGroup,Image } from "react-bootstrap";
import { anIcon } from "./assets/anicon.png";
import { apIcon } from "./assets/apicon.png";
import {green} from './assets/green.png'
import {blue} from './assets/blue.png'
import {purple} from './assets/purple.png'
import "./Listitem.scss";
class Listitem extends Component {
  render() {
    const data = [
      {
        title: "Nexus 9",
        serial: "Serial : 4612345670",
        price: "$300",
        bImage: { anIcon },
        rImage:{green},
        date:'Friday, June 10 2015',
        time:'4:30 pm'
      },
      {
        title: "Nexus 7",
        serial: "Serial : 4612345670",
        price: "$310",
        bImage: { anIcon },
        rImage:{green},
        date:'Saturday, June 11 2015',
        time:'4:30 pm'
      },
      {
        title: "iPad 3",
        serial: "Serial : 4612345670",
        price: "$320",
        bImage: { apIcon },
        rImage:{purple},
        date:'Sunday, June 12 2015',
        time:'4:30 pm'
      },
      {
        title: "iPad 4",
        serial: "Serial : 4612345670",
        price: "$330",
        bImage: { apIcon },
        rImage:{purple},
        date:'Monday, June 13 2015',
        time:'4:30 pm'
      },
      {
        title: "Surface 3",
        serial: "Serial : 4612345670",
        price: "$340",
        bImage: { apIcon },
        rImage:{blue},
        date:'Tuesday, June 14 2015',
        time:'4:30 pm'
      },
    ];
    return (
      <div>
        

        <ListGroup>
          {data.map((item, index) => {
            return (
              <ListGroup.Item key={index} className="listGrp">
                <div className="listCont">
                <div className='rimage'>
                  {/* <img src={item.rImage} alt='rimage'/> */}
                  <Image src={green} alt='rimage'rounded />
                  {console.log(item.rImage)}
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

                  <div className='price'>{item.price}</div>
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
{/*   <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={`Serial :${item.serial}`}
                
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                price={`${item.price}`}
                
              />
            </List.Item>
          )}
        /> */}