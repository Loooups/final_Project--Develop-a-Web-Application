import axios from "axios";
import { useEffect, useState } from "react";

const PatientsDisplay = () => {
  const [patients, setPatients] = useState([]);
  const [patientsSorted, setPatientsSorted] = useState([]);

  const [rangeValue, setRangeValue] = useState(36);
  const [selectedFilter, setFilter] = useState("");
  const filterInfos = ["Male", "Female", ""];

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
      <div>
        <h4 className="flex justify-center text-2xl font-bold text-gray-900">
          Patient List
        </h4>
        <div className="flex justify-center">
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
              max="20"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </ul>
        </div>
        <div>
          <ul className="text-center">
            {patientsSorted.map((patient, index) => (
              <div key={index} className="inline-block pr-3 pb-3 w-80 h-30">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                  <a href="#!">
                    <div className="p-6 bg-teal-600 ">
                      <h3 className="text-1xl font-bold text-gray-900">
                        {patient.name}
                      </h3>
                      <p className="p-2 text-sm text-gray-600">
                        Name : {patient.name}
                        <br />
                        Age : {patient.age}
                        <br />
                        Gender : {patient.gender}
                        <br />
                        Blood Group : {patient.bloodGroup}
                        <br />
                        Study Name : {patient.studyName}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatientsDisplay;
