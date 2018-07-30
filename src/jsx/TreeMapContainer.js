import React from 'react';
import TreeMap from './TreeMap';
import Radio from './RadioInput';

class TreeMapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: '12 Months',
            data : {
                "South-East Asia": {
                  "Sri Lanka": {
                    "Communicable diseases": "5",
                    "Injuries": "10",
                    "Non-communicable diseases": "2"
                  },
                  "Bangladesh": {
                    "Non-communicable diseases": "23",
                    "Injuries": "60",
                    "Communicable diseases": "24"
                  }
                },
                "Europe": {
                  "Hungary": {
                    "Communicable diseases": "59",
                    "Non-communicable diseases": "60",
                    "Injuries": "448"
                  },
                  "Poland": {
                    "Communicable diseases": "295",
                    "Non-communicable diseases": "42.5",
                    "Injuries": "4"
                  },
                  "France": {
                    "Communicable diseases": "284",
                    "Non-communicable diseases": "13.2",
                    "Injuries": "340.6"
                  }
                },
                "Africa": {
                  "Gabon": {
                    "Non-communicable diseases": "50.6",
                    "Injuries": "4.4",
                    "Communicable diseases": "58.4"
                  },
                  "Niger": {
                    "Injuries": "257",
                    "Communicable diseases": "74",
                    "Non-communicable diseases": "64.1"
                  }
                }
              }
        };

    }

    handleOptionChange = (changeEvent) => {
        const months = this.renderSwitch(changeEvent.target.value);
        const data = {
            "South-East Asia": {
              "Sri Lanka": {
                "Communicable diseases": "75.5",
                "Injuries": "89.0",
                "Non-communicable diseases": "501.2"
              },
              "Bangladesh": {
                "Non-communicable diseases": "548.9",
                "Injuries": "64.0",
                "Communicable diseases": "234.6"
              }
            },
            "Europe": {
              "Hungary": {
                "Communicable diseases": "16.8",
                "Non-communicable diseases": "602.8",
                "Injuries": "44.3"
              },
              "Poland": {
                "Communicable diseases": "22.6",
                "Non-communicable diseases": "494.5",
                "Injuries": "48.9"
              },
              "France": {
                "Communicable diseases": "21.4",
                "Non-communicable diseases": "313.2",
                "Injuries": "34.6"
              }
            },
            "Africa": {
              "Gabon": {
                "Non-communicable diseases": "504.6",
                "Injuries": "77.4",
                "Communicable diseases": "589.4"
              },
              "Niger": {
                "Injuries": "97.6",
                "Communicable diseases": "740.0",
                "Non-communicable diseases": "649.1"
              }
            }
          };

          const data2 = {
            "South-East Asia": {
              "Sri Lanka": {
                "Communicable diseases": "5",
                "Injuries": "10",
                "Non-communicable diseases": "2"
              },
              "Bangladesh": {
                "Non-communicable diseases": "23",
                "Injuries": "60",
                "Communicable diseases": "24"
              }
            },
            "Europe": {
              "Hungary": {
                "Communicable diseases": "59",
                "Non-communicable diseases": "60",
                "Injuries": "448"
              },
              "Poland": {
                "Communicable diseases": "295",
                "Non-communicable diseases": "42.5",
                "Injuries": "4"
              },
              "France": {
                "Communicable diseases": "284",
                "Non-communicable diseases": "13.2",
                "Injuries": "340.6"
              }
            },
            "Africa": {
              "Gabon": {
                "Non-communicable diseases": "50.6",
                "Injuries": "4.4",
                "Communicable diseases": "58.4"
              },
              "Niger": {
                "Injuries": "257",
                "Communicable diseases": "74",
                "Non-communicable diseases": "64.1"
              }
            }
          };


        if (months == '6') {
            this.setState({ data: data });
        }else if (months == '12') {
            this.setState({ data: data2 });
        }

        this.setState({
            selectedOption: changeEvent.target.value,
        });
    };

    renderSwitch = (param) => {
        switch (param) {
            case '1 Month':
                return '1';
            case '3 Months':
                return '3';
            case '6 Months':
                return '6';
            default:
                return '12';
        }
    };

    render() {
        const data = this.state.data;
        return (
            <React.Fragment>
                <div className="radio__wrapper">
                    <Radio
                        inputValue="6 Months"
                        label = "6 months"
                        selectedOption={this.state.selectedOption}
                        handleRadioChange={this.handleOptionChange}
                    />
                    <Radio
                        inputValue="12 Months"
                        label = "12 months"
                        selectedOption={this.state.selectedOption}
                        handleRadioChange={this.handleOptionChange}
                    />
                </div>
                <TreeMap data={data} />
            </React.Fragment>
        );
    }
}

export default TreeMapContainer;
