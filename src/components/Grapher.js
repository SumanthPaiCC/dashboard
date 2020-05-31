import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './Grapher.scss'
am4core.useTheme(am4themes_animated);
class Grapher extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = this.props.paddingRight;

    // ... chart code goes here ...
    //var chart = am4core.create("chartdiv", am4charts.XYChart);

    var data = [];
    var value = 400;

    var names = [
      "June 1",
      "June 15",
      "June 25",
      "July 5",
      "July 15",
      "July 25",
      "August 5",
      "August 15",
      "August 25",
    ];

    for (var i = 0; i < names.length; i++) {
      value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      data.push({ category: names[i], value: value });
    }

    chart.data = data;
    //chart.labels.template.fill = am4core.color("white");
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = "left";
    categoryAxis.renderer.labels.template.location = 0.5;
    //categoryAxis.labelColorField='white'
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
    //categoryAxis.renderer.labels.strok='white'
   
    categoryAxis.renderer.labels.template.adapter.add("dx", function (
      dx,
      target
    ) {
      return -target.maxRight / 2;
    });

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.labels.template.fill = am4core.color("#fff");
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 1;
    series.strokeOpacity = 1;
    series.strokeDashArray = "1,3";
    series.columns.template.width = 4;
    series.tooltip.pointerOrientation = "horizontal";

    var bullet = series.bullets.create(am4charts.CircleBullet);
    bullet.circle.fill = am4core.color("#000");
    bullet.circle.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();

    this.chart = chart;

};
  componentWillUnmount = () => {
    if (this.chart) {
      this.chart.dispose();
    }
  };
  render() {
    return <div>
        <div id="chartdiv"></div>	
    </div>
  }
}

export default Grapher;
