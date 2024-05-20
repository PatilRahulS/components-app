import React from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array,
  labels: PropTypes.array,
};

const defaultProps = {
  data: [0, 285, 38, 8, 24],
  labels: [
    'New Subscription',
    'Initial Free Plan',
    'VIP',
    'Enterprise',
    'Professional',
  ],
};

const PieChartCommon = ({ data, labels }) => {
  const series = data;
  var options = {
    chart: {
      height: 350,
      type: 'pie',
    },
    labels: labels,
    legend: {
      position: 'bottom',
    },
    dataLabels: {
      dropShadow: {
        enabled: false,
      },
    },
    colors: [
      '#FF4136',
      '#2ECC40',
      '#FF851B',
      '#FFDC00',
      '#B10DC9',
      '#7FDBFF',
      '#85144B',
      '#F012BE',
      '#3D9970',
    ],
  };
  return (
    <ReactApexChart
      dir='ltr'
      className='apex-charts'
      series={series}
      options={options}
      type='pie'
      height={280}
    />
  );
};

PieChartCommon.defaultProps = defaultProps;

PieChartCommon.propTypes = propTypes;

export default PieChartCommon;
