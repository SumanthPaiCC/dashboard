import React, { Component } from "react";
import { Tabs,Button} from "antd";
import "./Header.scss";
import burger from './assets/Info Menu.svg'
import Lister from "./Lister";
import imgapple from './assets/headapple.png'
import imgand from './assets/headand.png'
import imgwin from './assets/headwin.png'
import refresh from './assets/headref.png'
import pen from './assets/headpen.png'
import Grapher from "./Grapher";
//imgapple imgand imgwin
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "",
    };

    this.onCallback = this.onCallback.bind(this);
  }

  onCallback = (key) => {
    /* if (key === 1) {
      this.setState({
        heading: "Tablet Sales",
      });
      console.log(this.state.heading)
    }
    if (key === 2) {
      this.setState({
        heading: "Alerts",
      });
      console.log(this.state.heading)
    }
    if (key === 3) {
      this.setState({
        heading: "Messages",
      });
      console.log(this.state.heading)
    }
    if (key === 4) {
      this.setState({
        heading: "Products",
      });
      console.log(this.state.heading)
    } */
  };

  render() {
    const { TabPane } = Tabs;
    let applec = localStorage.getItem('applecounter')
    let andc = localStorage.getItem('androidcounter')
    let winc = localStorage.getItem('wincounter')
    return (
      <>
      <div className='fullcolor'>
      <div style={{display:'flex', justifyContent:'space-around'}} className='backColor'>
        <div className="icon"><img src={burger} menu/></div>
        <div>
        <div className="summer">SUMMER 2015</div>
        <div className="tabsales">Tablet Sales</div>
        </div>
        <div className='appText'>
          <div><img src={imgapple} alt={'imgapple'}/></div>
          <div style={{color:'#477787'}}>IPAD</div>
          <div style={{color:'white',fontSize:'35px',padding:'10px'}}>{applec}</div>
        </div>
        <div className='winText'>
          <div><img src={imgand} alt={'imgand'}/></div>
          <div style={{color:'#477787'}}>ANDROID</div>
          <div style={{color:'white',fontSize:'35px',padding:'10px'}}>{andc}</div>
        </div>
        <div className='penText'>
          <div><img src={imgwin} alt={'imgwin'}/></div>
          <div style={{color:'#477787'}}>WINDOWS</div>
          <div style={{color:'white',fontSize:'35px',padding:'10px'}}>{winc}</div>
        </div>
        <div className='penText'>
          <div style={{marginTop:'30px'}}><img src={refresh} alt={'refresh'}/></div>
          <div style={{marginTop:'30px'}}><img src={pen} alt={'edit'}/></div>
        </div>
        </div>
        

        <div className="headertab">
          <Tabs defaultActiveKey="1" onChange={this.onCallback}>
            <TabPane tab="SALES" key="1">
            <div>
            <Grapher paddingRight={20}/>
            </div>
              
            </TabPane>
            <TabPane tab="ALERT" key="2">
              <p>Alert content</p>
            </TabPane>
            <TabPane tab="MESSAGES" key="3">
              <p>messages content</p>
            </TabPane>
            <TabPane tab="PRODUCTS" key="4">
              <p>products content</p>
            </TabPane>
          </Tabs>
          <Lister/>
        </div>
        </div>
      </>
    );
  }
}

export default Header;
{
  /*import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

ReactDOM.render(
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
  mountNode,
); */
}
