import React, { Component } from "react";
import { Tabs, Button } from "antd";
import "./Lister.scss";
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
              <p>Alert content</p>
            </TabPane>
            <TabPane tab="POPULAR" key="3">
              <p>messages content</p>
            </TabPane>
            <TabPane tab="MOST SOLD" key="4">
              <p>products content</p>
            </TabPane>
            <TabPane tab="IPAD" key="5">
              <p>products content</p>
            </TabPane>
            <TabPane tab="ANDROID" key="6">
              <p>products content</p>
            </TabPane>
            <TabPane tab="WINDOWS" key="7">
              <p>products content</p>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Lister;
