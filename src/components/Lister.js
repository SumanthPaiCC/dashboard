import React, { Component } from "react";
import { Tabs, Button } from "antd";
import "./Lister.scss";
import { anIcon } from "./assets/anicon.png";
import { apIcon } from "./assets/apicon.png";
import {green} from './assets/green.png'
import {blue} from './assets/blue.png'
import {purple} from './assets/purple.png'
import Listitem from "./Listitem";
import AppleList from './AppleList'
import WindowsList from "./WindowsList";
import AndroidList from "./AndroidList";
import MostSold from "./Mostsold";
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
        price: 300,
        bImage: { anIcon },
        rImage:{green},
        date:'Friday, June 10 2015',
        time:'4:30 pm',
        android:true
      },
      {
        title: "Nexus 7",
        serial: "Serial : 4612345670",
        price: 310,
        bImage: { anIcon },
        rImage:{green},
        date:'Saturday, June 11 2015',
        time:'4:30 pm',
        android:true
      },
      {
        title: "iPad 3",
        serial: "Serial : 4612345670",
        price: 320,
        bImage: { apIcon },
        rImage:{purple},
        date:'Sunday, June 12 2015',
        time:'4:30 pm',
        apple:true
      },
      {
        title: "iPad 4",
        serial: "Serial : 4612345670",
        price: 330,
        bImage: { apIcon },
        rImage:{purple},
        date:'Monday, June 13 2015',
        time:'4:30 pm',
        apple:true
      },
      {
        title: "Surface 3",
        serial: "Serial : 4612345670",
        price: 340,
        bImage: { apIcon },
        rImage:{blue},
        date:'Tuesday, June 14 2015',
        time:'4:30 pm',
        windows:true
      },
    ];
    
    return (
      <div>
      {console.log(data[1])}
        <div className="headertablister">
          <Tabs defaultActiveKey="1" onChange={this.onCallback}>
            <TabPane tab="SORT BY" key="1">
              <div>
                
                <Listitem data={data}/>
              </div>
              {/* sort by all popular most sold ipad android windows */}
            </TabPane>
            <TabPane tab="ALL" key="2">
              <div>
            
                <Listitem data={data}/>
              </div>
            </TabPane>
            <TabPane tab="POPULAR" key="3">
            <MostSold data={data}/>
            </TabPane>
            <TabPane tab="MOST SOLD" key="4">
             <MostSold data={data}/>
              
            </TabPane>
            <TabPane tab="IPAD" key="5">
              
              <AppleList data={data}/>
            </TabPane>
            <TabPane tab="ANDROID" key="6">
            
             <AndroidList data={data}/>
            </TabPane>
            <TabPane tab="WINDOWS" key="7">
              <WindowsList data={data}/>
            </TabPane>
          </Tabs>
          <div className="summersales">SUMMER 2015 SALES</div>
        </div>
      </div>
    );
  }
}

export default Lister;
