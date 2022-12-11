import axios from "axios";
import { useEffect, useState } from "react";
// import StudiesCards from "./StudiesCards";
let statusStudyDisplay = "";
const StudyDisplay = () => {
  const [study, setStudy] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://localhost:5000/api/Studies")
      .then((res) => setStudy(res.data));
  }, []);

  //     if (study.status === "Finished") statusStudyDisplay = "bg-slate-400";
  //     if (study.status === "Stopped") statusStudyDisplay = "bg-red-300";
  //     if (study.status === "Pending") statusStudyDisplay = "bg-slate-300";
  //     if (study.status === "Running") statusStudyDisplay = "bg-green-300";

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
                {/* j'amerais le placer ici  dans la div apres rounded-b-lg*/}
                <div className={"p-6 bg-red-300 rounded-b-lg"}>
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
