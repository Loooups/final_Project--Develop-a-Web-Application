import axios from "axios";
import { useEffect, useState } from "react";

const UsersDisplay = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h4 className="flex justify-center text-2xl font-bold text-gray-900">
        All Users
      </h4>
      <div className="flex rounded-lg bg-white min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <table class="table-primary rounded-lg bg-slate-300">
          <thead>
            <tr>
              <th className=" border-l border py-4 px-3 text-lg bg-teal-600 font-semibold text-black lg:py-3 lg:px-4">
                Name
              </th>
              <th className=" border-l border py-4 px-3 text-lg bg-teal-600 font-semibold text-black lg:py-3 lg:px-4">
                Email
              </th>
              <th className=" border-l border py-4 px-3 text-lg bg-teal-600 font-semibold text-black lg:py-3 lg:px-4">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="text-center  bg-teal-100 rounded-lg">
            {users.map((user, index) => (
              <tr key={user._id} user={user}>
                <td className="border-2 rounded-lg text-justify">
                  {user.name}
                </td>
                <td className="border-2 rounded-lg ">{user.email}</td>
                <td className="border-2 rounded-lg">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersDisplay;
