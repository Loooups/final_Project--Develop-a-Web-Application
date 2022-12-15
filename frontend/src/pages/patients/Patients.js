import PatientsDisplay from "../../components/patients/PatientsDisplay";

const Patients = (props) => {
  return <div>{<PatientsDisplay setIsLoggedin={props.setIsLoggedin} />}</div>;
};

export default Patients;
