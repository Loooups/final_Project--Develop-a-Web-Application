// import axios from "axios";
// import { useEffect, useState } from "react";
// import PatientsCards from "./PatientsCards";

// const PatientsDisplay = () => {
//   const [patients, setPatients] = useState([]);
//   const [patientsSorted, setPatientsSorted] = useState([]);

//   const [rangeValue, setRangeValue] = useState(36);
//   const [selectedFilter, setFilter] = useState("");
//   const filterInfos = ["Male", "Female", "Gender", "Blood Group", "Study Name"];

//   useEffect(() => {
//     axios.defaults.headers.common[
//       "Authorization"
//     ] = `Bearer ${localStorage.getItem("access_token")}`;
//     axios.get("http://localhost:5000/api/patients").then((res) => {
//       setPatients(res.data);
//       //sort patients by name
//       let sortedPatients = res.data
//         .sort((a, b) => a.name.localeCompare(b.name))
//         .slice(0, rangeValue);
//       setPatientsSorted(sortedPatients);
//     });
//   }, []);

//   function sortByProperty(property) {
//     return function (a, b) {
//       if (a[property] > b[property]) return 1;
//       if (a[property] < b[property]) return -1;
//       return 0;
//     };
//   }

//   const sortPatients = () => {
//     let sortedPatients = patients.filter(
//       (p) => p.{selectedFilter} === { selectedFilter }
//     );
//     setPatientsSorted(sortedPatients);
//   };

//   return (
//     <div>
//       <h4 className="flex justify-center text-2xl font-bold text-gray-900">
//         Patient List
//       </h4>
//       <ul>
//         {filterInfos.map((info, index) => (
//           <li key={index}>
//             <input
//               type="radio"
//               id={info}
//               name="filterInfos"
//               onChange={(e) => {
//                 setFilter(e.target.id);
//                 sortPatients();
//               }}
//             />
//             <label htmlFor={info}>{info}</label>
//           </li>
//         ))}
//         <input
//           type="range"
//           min="1"
//           max="50"
//           defaultValue={rangeValue}
//           onChange={(e) => setRangeValue(e.target.value)}
//         />
//       </ul>

//       <ul>
//         {patientsSorted.map((patient) => (
//           <PatientsCards key={patient._id} patient={patient} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PatientsDisplay;
