const PatientsCards = ({ patient }) => {
  return (
    <div className="inline-block">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <div className="p-6">
            <h3 className="text-1xl font-bold text-gray-900">{patient.name}</h3>
            <p className="p-2 text-sm text-gray-500">
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
  );
};

export default PatientsCards;
