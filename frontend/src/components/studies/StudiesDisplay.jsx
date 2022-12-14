import axios from "axios";
import { useEffect, useState } from "react";

const StudyDisplay = () => {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://localhost:5000/api/Studies")
      .then((res) => setStudies(res.data))
      .catch((error) => {
        console.log(error.response.status);
      });
  }, []);

  const statusDisplay = (studies) => {
    if (studies.status === "Finished") return "bg-slate-400";
    if (studies.status === "Stopped") return "bg-red-300";
    if (studies.status === "Scheduled") return "bg-slate-100";
    if (studies.status === "Running") return "bg-green-300";
  };

  return (
    <div className="bg-white">
      <h3 className="mt-6 text-center text-3xl  font-bold tracking-tight text-gray-900">
        All Studies
      </h3>

      <div className="flex justify-center items-center bg-white py-12 px-4 sm:px-8 lg:px-8">
        <ul>
          {studies.map((study, index) => (
            <div key={index} className="inline-block pr-3 pb-3">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    className="rounded-t-lg h-48 w-86"
                    src={study.image}
                    alt={"Study" + study.name}
                  />
                </a>
                <div className={`p-4 ${statusDisplay(study)} rounded-b-lg`}>
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
