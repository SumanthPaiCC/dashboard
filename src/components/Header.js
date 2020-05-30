import React, { Component } from "react";
import { Tabs } from "antd";
import './Header.scss'
class Header extends Component {
  constructor(props) {
    super(props);

    this.onCallback = this.onCallback.bind(this);
  }

  onCallback = (key) => {
    console.log(key)
  }

  render() {
    const { TabPane } = Tabs;
    return (
      <div>
      <div className='headertab'>
        <Tabs defaultActiveKey="1" onChange={this.onCallback}>
          <TabPane  tab="SALES" key="1">
            <p>sales graph</p>
          </TabPane>
          <TabPane  tab="ALERT" key="2">
            <p>Alert content</p>
          </TabPane>
          <TabPane  tab="MESSAGES" key="3">
            <p>messages content</p>
          </TabPane>
          <TabPane  tab="PRODUCTS" key="4">
            <p>products content</p>
          </TabPane>
        </Tabs>
        </div>
      </div>
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
