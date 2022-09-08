import React from 'react';
// import { Area, AreaChart } from 'recharts'
import Chart from 'react-apexcharts';

function AreaGraph() {
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: 'YOU',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'PEER',
        data: [31, 40, 28, 34, 52, 41, 11],
      },
      {
        name: 'HIVE',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    toolbar: {
      show: false,
    },

    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z'],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };
  return (
    <Chart options={options} series={options.series} type="area" height={250} />
  );
}

export default AreaGraph;
