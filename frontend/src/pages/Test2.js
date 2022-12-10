import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Test2 = () => {
  const navigate = useNavigate();

  const navigateToTeam = () => {
    navigate("/allusers");
  };
  const navigateToAllstudies = () => {
    navigate("/studies");
  };
  const navigateToAllpatients = () => {
    navigate("/patients");
  };
  const navigateToAddStudy = () => {
    navigate("/addstudy");
  };
  const navigateToAdduser = () => {
    navigate("/adduser");
  };
  const navigateToUpdate = () => {
    navigate("/updatemydatas");
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-400">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <buttom
                          className="bg-gray-700 text-white
                              px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Dashboard
                        </buttom>
                        <buttom
                          onClick={navigateToTeam}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white
                              px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Team
                        </buttom>
                        <buttom
                          onClick={navigateToAllstudies}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white
                              px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Studies
                        </buttom>
                        <buttom
                          onClick={navigateToAllpatients}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white
                              px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Patiens
                        </buttom>
                        <buttom
                          onClick={navigateToAddStudy}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white
                              px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Add New Study
                        </buttom>
                        <buttom
                          onClick={navigateToAdduser}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white
                              px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Add New Team Member
                        </buttom>
                        <buttom
                          onClick={navigateToUpdate}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white
                              px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Update my informations
                        </buttom>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Test2;
