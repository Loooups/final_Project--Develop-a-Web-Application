import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";

const LogbookDisplay = () => {
  const [logbooks, setLogbooks] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://127.0.0.1:5000/api/logbooks/logbook/Lombard Grebert")
      .then((res) => {
        setLogbooks(res.data);
        console.log(res.data);
      });
  }, []);
  console.log(logbooks);
  const labels = logbooks.map((logbook) => logbook.date);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperature",
        data: logbooks.map((logbook) => logbook.patientTemperature),
        fill: false,
        borderColor: "#fb923c",
        yAxisID: "y",
        tension: 0.1,
      },
      {
        label: "Blood Pressure",
        data: logbooks.map((logbook) => logbook.patientBloodPressure),
        borderColor: "#facc15",
        yAxisID: "y1",
      },
      {
        label: "Weight",
        data: logbooks.map((logbook) => logbook.patientWeight),
        borderColor: "#22d3ee",
        yAxisID: "y2",
      },
    ],
  };
  console.log(data);

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Patient Name",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  };

  return (
    <div style={{ width: 800 }}>
      <Line labels={labels} data={data} options={options} />
      <div className="flex justify-center text-2xl font-bold text-gray-900">
        <Link to="/patients">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default LogbookDisplay;
