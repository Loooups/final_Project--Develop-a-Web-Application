import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PatientsDisplay = (props) => {
  const [patients, setPatients] = useState([]);
  const [patientsSorted, setPatientsSorted] = useState([]);

  const [rangeValue, setRangeValue] = useState(36);
  const [selectedFilter, setFilter] = useState("");
  const filterInfos = ["", "Male", "Female"];

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
        <div className="grid place-items-center pt-6 pb-8">
          <div className="block align-middle">
            <label className="">Sort </label>
            <select
              onChange={onChangeGender}
              id={"genderSlected"}
              name="filterInfos"
              required
              className=""
            >
              {filterInfos.map((info, index) => (
                <option key={index} value={info}>
                  {info}
                </option>
              ))}
            </select>
          </div>
          <div className="block align-middle">
            <label className="pr-3 pb-3">
              <br />
              Choose a number of patients to display{" "}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </div>
        </div>
        <div>
          <ul className="text-center">
            {patientsSorted.map((patient, index) => (
              <div key={index} className="inline-block pr-3 pb-3 w-80 h-30">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                  <a href="/logbooks">
                    <div className="p-6 bg-teal-600 ">
                      <h3 className="text-1xl font-bold text-gray-900">
                        {patient.name}
                      </h3>
                      <p className="p-2 text-sm text-gray-100">
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
