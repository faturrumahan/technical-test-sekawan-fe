import React from "react";
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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Task",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="bg-white rounded-lg">
      <div className="grid grid-cols-4 divide-x-2">
        <div className="col-span-3 p-6">
          <Line options={options} data={data} />
        </div>
        <div className="grid-grid-rows-5 divide-y-2">
          <div className="p-6 flex flex-col justify-center items-center font-bold">
            <p className="text-xl text-gray-400">Resolved</p>
            <p className="text-3xl">449</p>
          </div>
          <div className="p-6 flex flex-col justify-center items-center font-bold">
            <p className="text-xl text-gray-400">Received</p>
            <p className="text-3xl">426</p>
          </div>
          <div className="p-6 flex flex-col justify-center items-center font-bold">
            <p className="text-xl text-gray-400">Average first response time</p>
            <p className="text-3xl">33m</p>
          </div>
          <div className="p-6 flex flex-col justify-center items-center font-bold">
            <p className="text-xl text-gray-400">Average response time</p>
            <p className="text-3xl">3h 8m</p>
          </div>
          <div className="p-6 flex flex-col justify-center items-center font-bold">
            <p className="text-xl text-gray-400">Resolutio within SLA</p>
            <p className="text-3xl">94%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
