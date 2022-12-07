import axios from "axios";
import { useEffect, useState } from "react";
import PatientsCards from "./PatientsCards";

const PatientsDisplay = () => {
  const [patient, setPatient] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedFilter, setFilter] = useState("");
  const filterInfos = ["Name", "Age", "Gender", "Blood Group", "Study Name"];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/patients")
      .then((res) => setPatient(res.data));
  }, []);
  return (
    <div>
      <h4 className="flex justify-center text-2xl font-bold text-gray-900">
        Patient List
      </h4>
      <ul>
        {filterInfos.map((info, index) => (
          <li key={index}>
            <input
              type="radio"
              id={info}
              name="filterInfos"
              onChange={(e) => setFilter(e.target.id)}
            />
            <label htmlFor={info}>{info}</label>
          </li>
        ))}
        <input
          type="range"
          min="1"
          max="50"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>

      <ul>
        {patient
          .sort((patientA, patientB) => patientB.age - patientA.gae)
          .slice(0, rangeValue)
          .map((patient) => (
            <PatientsCards key={patient._id} patient={patient} />
          ))}
      </ul>
    </div>
  );
};

export default PatientsDisplay;
