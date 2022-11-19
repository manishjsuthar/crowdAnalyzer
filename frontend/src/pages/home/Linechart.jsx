import React, { useState, useEffect } from "react";
import Axios from "axios";
// import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Linechart() {
  const [lineChart, setLineChart] = useState([]);

  function getdata(){
    Axios
    .get("http://localhost:5000/api/get")
    .then((response) => {
        setLineChart(response.data);
        // console.log(response);
    });
  }

  useEffect(() => {
    getdata();
  }, []);
  console.log(lineChart);

  const data = {
    labels: lineChart?.map((val) => val.slot),
    datasets: [
      {
        label: "Chart",
        data: lineChart?.map((val) => (val.count/val.total)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Chart.js Line Chart',
  //     },
  //   },
  // };
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 12,
        stepSize: 1,
      },
    },
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   }
    // },
  };
  return (
    <>
      {data.labels.length?<Line data={data} height={"500px"} width={"700px"} options={options} />:null}
    </>
  );
}

export default Linechart;
