import Footer from "../components/Footer";
import LoggedHeader from "../components/LoggedHeader";
import PatientsDisplay from "../components/PatientsDisplay";

const Patients = () => {
  return (
    <div>
      <LoggedHeader />
      <PatientsDisplay />
      <Footer />
    </div>
  );
};

export default Patients;
