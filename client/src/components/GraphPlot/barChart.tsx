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
      text: 'Chart.js Bar Chart',
    },
  },
};


export function BarChart(props) {
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };
  const labels = ['CO1','CO2','CO3','CO4','CO5']
  const dataset = []
  Object.entries(props.percentage).map(co => {
    dataset.push(co[1])
  })
  console.log(dataset);
  
  const data = {
    labels,
    datasets: [{
      label: 'Dataset 1',
      data: dataset,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }]
  }
  return <Bar options={options} data={data} />;
}
