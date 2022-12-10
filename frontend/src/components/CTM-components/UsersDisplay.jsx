import axios from "axios";
import { useEffect, useState } from "react";

const UsersDisplay = () => {
  const [study, setUser] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      <h4 className="flex justify-center text-2xl font-bold text-gray-900">
        All Users
      </h4>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {study.map((user, index) => (
            <tr key={user._id} user={user}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersDisplay;
