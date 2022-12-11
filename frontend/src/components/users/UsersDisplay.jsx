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
      <div className="flex bg-white min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <table class="shadow-2xl border-2 min-w-full leading-normal">
          <thead>
            <tr>
              <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4">
                Name
              </th>
              <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4">
                Email
              </th>
              <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-black lg:py-7 lg:px-4">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <tr key={user._id} user={user}>
                <td className="border-2 text-justify">{user.name}</td>
                <td className="border-2">{user.email}</td>
                <td className="border-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersDisplay;
