import axios from "axios";
import { useEffect, useState } from "react";
import PatientsCards from "./PatientsCards";

const PatientsDisplay = () => {
  const [patients, setPatients] = useState([]);
  const [patientsSorted, setPatientsSorted] = useState([]);

  const [rangeValue, setRangeValue] = useState(36);
  const [selectedFilter, setFilter] = useState("");
  const filterInfos = ["Male", "Female"];

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    axios.get("http://localhost:5000/api/patients").then((res) => {
      setPatients(res.data);
      //sort patients by name
      let sortedPatients = res.data
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 36);
      setPatientsSorted(sortedPatients);
    });
  }, []);

  useEffect(() => {
    sortPatients();
  }, [selectedFilter, rangeValue]);

  const sortPatients = () => {
    let sortedPatients = patients;
    if (selectedFilter !== "") {
      sortedPatients = patients.filter(
        (patient) => patient.gender === selectedFilter
      );
    }
    sortedPatients = sortedPatients.slice(0, rangeValue);
    setPatientsSorted(sortedPatients);
  };
  const onChangeGender = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };

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
              checked={selectedFilter === info}
              value={info}
              onChange={onChangeGender}
            />
            <label htmlFor={info}>{info}</label>
          </li>
        ))}
        <input
          type="range"
          min="1"
          max="50"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>

      <ul>
        {patientsSorted.map((patient) => (
          <PatientsCards key={patient._id} patient={patient} />
        ))}
      </ul>
    </div>
  );
};

export default PatientsDisplay;
