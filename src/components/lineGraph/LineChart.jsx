import React from 'react';
import Chart from 'react-apexcharts';
// import { getAccessPoints, getDeviceList } from '../../redux/slices/DeviceSlice';

function LineChart() {
  const graphStates = {
    options: {
      chart: {
        id: 'line-graph',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: { show: false },
      },
      stroke: {
        curve: 'smooth',
        width: 2.5,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 50, 100],
        },
      },

    },
    series: [
      {
        name: 'series-1',
        data: [0, 70],
      },
    ],
  };
  return (
    <Chart options={graphStates.options} series={graphStates.series} type="line" height={80} width={250} className="show-series" />
  );
}

export default LineChart;
