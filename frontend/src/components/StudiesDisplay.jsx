import axios from "axios";
import { useEffect, useState } from "react";
import StudiesCards from "./StudiesCards";

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

  return (
    <div>
      <h4 className="flex justify-center text-2xl font-bold text-gray-900">
        All Users
      </h4>

      <ul>
        {study.map((study) => (
          <StudiesCards key={study._id} study={study} />
        ))}
      </ul>
    </div>
  );
};

export default StudyDisplay;
