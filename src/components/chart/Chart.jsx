import React, {Component} from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting'
import './chart.css'

HC_exporting(Highcharts);

export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptions: {
                exporting: {
                    chartOptions: { // specific options for the exported image
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    enabled: true
                                }
                            }
                        }
                    },
                    fallbackToExportServer: false
                },
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'Oil probability'
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                },
                yAxis: {
                    title: {
                        text: 'Probability'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },

                series: [{
                    type: 'area',
                    name: 'Probability',
                    data: [[0, 0.5], [1, 0.6], [2, 0.5], [3, 0.6], [4, 0.5], [5, 0.6], [6, 0.7], [7, 0.8]]
                }]
            },
            hoverData: null
        };

        this.exportChart = () => {
            this.chart.exportChart();
        };
    }

    componentDidMount() {
        this.chart = this.refs.chart.chart;
    }

    render() {
        const { chartOptions } = this.state;

        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                    ref={"chart"}
                />
            </div>
        )
    }
}