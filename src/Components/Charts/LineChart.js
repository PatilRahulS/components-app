import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { formatYAxis } from '../../utils/numberFormatter';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  data: PropTypes.array,
  title: PropTypes.string,
  categories: PropTypes.array,
};

const defaultProps = {
  name: '',
  data: [0, 0, 77, 120, 28, 91, 217, 350, 351, 353, 354, 355],
  title: '',
  categories: [
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
  ],
};

const LineChartCommon = ({ name, data, title, categories }) => {
  const series = [
    {
      name: name,
      data: data,
    },
  ];
  var options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 4,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    colors: ['#0074D9'],
    title: {
      text: title,
      align: 'left',
      style: {
        fontWeight: 500,
      },
    },

    xaxis: {
      categories: categories,
    },
    yaxis: {
      labels: {
        formatter: formatYAxis,
      },
    },
  };
  return (
    <React.Fragment>
      <ReactApexChart
        dir='ltr'
        options={options}
        series={series}
        type='line'
        height='350'
        className='apex-charts'
      />
    </React.Fragment>
  );
};

LineChartCommon.defaultProps = defaultProps;

LineChartCommon.propTypes = propTypes;

export default LineChartCommon;
