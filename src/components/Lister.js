import React, { Component } from "react";
import { Tabs, Button } from "antd";
import "./Lister.scss";
import { anIcon } from "./assets/anicon.png";
import { apIcon } from "./assets/apicon.png";
import {green} from './assets/green.png'
import {blue} from './assets/blue.png'
import {purple} from './assets/purple.png'
import Listitem from "./Listitem";
class Lister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "",
    };

    this.onCallback = this.onCallback.bind(this);
  }
  onCallback = (key) => {
    console.log(key);
  };

  render() {
    const { TabPane } = Tabs;
    const data = [
      {
        title: "Nexus 9",
        serial: "Serial : 4612345670",
        price: "$300",
        bImage: { anIcon },
        rImage:{green},
        date:'Friday, June 10 2015',
        time:'4:30 pm',
        android:true
      },
      {
        title: "Nexus 7",
        serial: "Serial : 4612345670",
        price: "$310",
        bImage: { anIcon },
        rImage:{green},
        date:'Saturday, June 11 2015',
        time:'4:30 pm',
        android:true
      },
      {
        title: "iPad 3",
        serial: "Serial : 4612345670",
        price: "$320",
        bImage: { apIcon },
        rImage:{purple},
        date:'Sunday, June 12 2015',
        time:'4:30 pm',
        apple:true
      },
      {
        title: "iPad 4",
        serial: "Serial : 4612345670",
        price: "$330",
        bImage: { apIcon },
        rImage:{purple},
        date:'Monday, June 13 2015',
        time:'4:30 pm',
        apple:true
      },
      {
        title: "Surface 3",
        serial: "Serial : 4612345670",
        price: "$340",
        bImage: { apIcon },
        rImage:{blue},
        date:'Tuesday, June 14 2015',
        time:'4:30 pm',
        windows:true
      },
    ];
    return (
      <div>
        <div className="headertablister">
          <Tabs defaultActiveKey="1" onChange={this.onCallback}>
            <TabPane tab="SORT BY" key="1">
              <div>
                <p>sales graph</p>
              </div>
              {/* sort by all popular most sold ipad android windows */}
            </TabPane>
            <TabPane tab="ALL" key="2">
              <div>
              {console.log(this.data)}
                <Listitem data={data}/>
              </div>
            </TabPane>
            <TabPane tab="POPULAR" key="3">
              <p>messages content</p>
            </TabPane>
            <TabPane tab="MOST SOLD" key="4">
              <p>products content</p>
            </TabPane>
            <TabPane tab="IPAD" key="5">
              {
                data.map(item=>{
                  if(item.apple){
                    return <p>{item.title}</p>
                  }
                })
              }
            </TabPane>
            <TabPane tab="ANDROID" key="6">
            {
                data.map(item=>{
                  if(item.android){
                    return <p>{item.title}</p>
                  }
                })
              }
            </TabPane>
            <TabPane tab="WINDOWS" key="7">
            {
                data.map(item=>{
                  if(item.windows){
                    return <p>{item.title}</p>
                  }
                })
              }
            </TabPane>
          </Tabs>
          <div className="summersales">SUMMER 2015 SALES</div>
        </div>
      </div>
    );
  }
}

export default Lister;
