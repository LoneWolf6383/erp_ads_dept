import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Percentage/CO',
    },
  },
};


export function BarChart(props) {
  const labels = ['CO1','CO2','CO3','CO4','CO5']
  const dataset = []
  Object.entries(props.percentage).map(co => {
    return dataset.push(co[1][0])
  })
  
  const data = {
    labels,
    datasets: [{
      label: '%',
      data: dataset,
      backgroundColor: 'rgb(0, 179, 255)',
    }]
  }
  return <Bar options={options} data={data} />;
}
