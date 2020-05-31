import React, { Component } from "react";
import { Tabs,Button} from "antd";
import "./Header.scss";
import Lister from "./Lister";
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
        <div className="icon">{/* <Button type="primary"  style={{ marginBottom: 16 }}>
          
        </Button> */}icon</div>
        <div>
        <div className="summer">SUMMER 2015</div>
        <div className="tabsales">Tablet Sales</div>
        </div>
        <div className='appText'>
          <div>appIcon</div>
          <div>appText</div>
          <div>{applec}</div>
        </div>
        <div className='winText'>
          <div>anIcon</div>
          <div>anText</div>
          <div>{andc}</div>
        </div>
        <div className='penText'>
          <div>winIcon</div>
          <div>winIcon</div>
          <div>{winc}</div>
        </div>
        <div className='penText'>
          <div>ref</div>
          <div>pen</div>
        </div>
        </div>
        

        <div className="headertab">
          <Tabs defaultActiveKey="1" onChange={this.onCallback}>
            <TabPane tab="SALES" key="1">
            <div>
            <p>sales graph</p>
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
