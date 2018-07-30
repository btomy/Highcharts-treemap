import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import addTreemapModule from 'highcharts/modules/treemap';
import {
  HighchartsChart, withHighcharts, Title, Subtitle, XAxis, YAxis, TreemapSeries, Tooltip
} from 'react-jsx-highcharts';

const formatData = data => {

  const colours = Highcharts.getOptions().colors;
  const formattedData = [];
  Object.keys(data).forEach((regionName, rIndex) => {
    const region = {
      id: `id_${rIndex}`,
      name: regionName,
      color: colours[rIndex]
    };
    let regionSum = 0;

    const countries = Object.keys(data[regionName]);
    countries.forEach((countryName, cIndex) => {
      const country = {
        id: `${region.id}_${cIndex}`,
        name: countryName,
        parent: region.id
      };
      formattedData.push(country);

      Object.keys(data[regionName][countryName]).forEach((causeName, index) => {
        const cause = {
          id: `${country.id}_${index}`,
          name: causeName,
          parent: country.id,
          value: Math.round(parseFloat(data[regionName][countryName][causeName]))
        };
        formattedData.push(cause);
        regionSum += cause.value;
      })
    });

    region.value = Math.round(regionSum / countries.length);
    formattedData.push(region);
  });

  return formattedData;
};


class App extends Component {

  constructor (props) {
    super(props);
  }
  
  render() {
    addTreemapModule(Highcharts);

    const treeData = formatData(this.props.data);
    if (!treeData) return null;

    const levels = [{
      level: 1,
      dataLabels: {
        enabled: true
      },
      borderWidth: 3
    }];
    const tooltipFormatter = function () {
      console.log(this);
      return `${this.key}: ${this.point.value}`;
    };

    const config = {
        height: 600
      };
    
    return (
      <div className="app">
      <HighchartsChart chart = {config} >
        <XAxis />
        <YAxis>
          <TreemapSeries
            data={treeData}
            allowDrillToNode
            layoutAlgorithm="squarified"
            animationLimit={1000}
            drillUpButton =  {{
                text: 'Back to overview',
                relativeTo: 'plotBox',
                position : {
                    align: "right",
                    verticalAlign:"top",
                    y: 10,
                    x: -10
                }
            }}
            dataLabels={{
                enabled:false,
                style: {
                fontSize: "18px",
                fontWeight: "bold",
                textOutline: "none",
                align: 'left',
                }}}
            levelIsConstant={false}
            levels={levels} />
        </YAxis>

        <Tooltip formatter={tooltipFormatter} />
      </HighchartsChart>
    </div>
    )
  }
}

export default withHighcharts(App, Highcharts);