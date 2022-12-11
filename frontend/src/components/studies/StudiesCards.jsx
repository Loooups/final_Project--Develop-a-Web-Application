const StudiesCards = ({ study }) => {
  let studyStatus = study.status;
  console.log(studyStatus);
  if ({ study } === "Finished") studyStatus = "bg-slate-400";
  if ({ study } === "Stopped") studyStatus = "bg-red-300";
  if ({ study } === "Pending") studyStatus = "bg-slate-300";
  if ({ study } === "Running") studyStatus = "bg-green-300";

  return (
    // {if (status) === "Running") return (<div className="inline-block pr-3 pb-3">)
    <div className="inline-block pr-3 pb-3">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={study.image}
            alt={"Study" + study.name}
          />
        </a>
        <div className={`p-6 ${studyStatus} rounded-b-lg`}>
          <h5 className="text-2xl font-bold text-gray-900">{study.name}</h5>
          <div className="text-sm text-gray-500">
            Started on {study.startDate} <br />
            Until {study.endDate} <br />
            Status {study.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudiesCards;
