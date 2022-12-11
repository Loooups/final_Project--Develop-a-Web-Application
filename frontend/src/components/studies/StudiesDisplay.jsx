import axios from "axios";
import { useEffect, useState } from "react";

const StudyDisplay = () => {
  const [study, setStudy] = useState([]);

  // const [studyStatus, setStudyStatus] = useState("");

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://localhost:5000/api/Studies")
      .then((res) => setStudy(res.data));
  }, []);

  const statusDisplay = (study) => {
    if (study.status === "Finished") return "bg-slate-400";
    if (study.status === "Stopped") return "bg-red-300";
    if (study.status === "Scheduled") return "bg-slate-100";
    if (study.status === "Running") return "bg-green-300";
  };

  return (
    <div>
      <h4 className="flex justify-center text-2xl font-bold text-gray-900">
        All Studies
      </h4>

      <div className="flex min-h-full items-center bg-white justify-center py-12 px-4 sm:px-6 lg:px-8">
        <ul>
          {study.map((study, index) => (
            <div key={index} className="inline-block pr-3 pb-3">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    className="rounded-t-lg"
                    src={study.image}
                    alt={"Study" + study.name}
                  />
                </a>
                <div className={`p-6 ${statusDisplay(study)} rounded-b-lg`}>
                  <h5 className="text-2xl font-bold text-gray-900">
                    {study.name}
                  </h5>
                  <div className="text-sm text-gray-500">
                    Started on {study.startDate} <br />
                    Until {study.endDate} <br />
                    Status {study.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyDisplay;
