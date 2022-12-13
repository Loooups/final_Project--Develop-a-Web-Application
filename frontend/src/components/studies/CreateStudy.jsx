import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateStudy = () => {
  const nameRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const statusRef = useRef();
  const drugRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(
      nameRef.current.value,
      startRef.current.value,
      endRef.current.value
    );
    try {
      console.log("poulet");
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("access_token")}`;
      let response = await axios.post("http://127.0.0.1:5000/api/studies", {
        name: nameRef.current.value,
        startDate: startRef.current.value,
        endDate: endRef.current.value,
        status: statusRef.current.value,
        drugSubstance: drugRef.current.value,
        image: imageRef.current.value,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/studies");
      }
      //   else afficher donnee incorrect
      console.log(startRef);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create new Study
            </h2>
          </div>
          <form onSubmit={onSubmit} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>Name</div>
              <div>
                <label htmlFor="study-name" className="sr-only"></label>
                <input
                  ref={nameRef}
                  id="name"
                  name="name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  placeholder="Study Name"
                />
              </div>
              <div>Start</div>
              <div>
                <label htmlFor="start-study" className="sr-only"></label>
                <input
                  ref={startRef}
                  id="startDate"
                  name="startDate"
                  type="datetime-local"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                />
              </div>
              <div>End</div>
              <div>
                <label htmlFor="end-study" className="sr-only"></label>
                <input
                  ref={endRef}
                  id="endDate"
                  name="endDate"
                  type="datetime-local"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                />
              </div>
              <div>Status</div>
              <div>
                <label htmlFor="study-status" className="sr-only"></label>
                <select
                  ref={statusRef}
                  id="status"
                  name="status"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Running">Running</option>
                  <option value="Finished">Finished</option>
                  <option value="Stopped">Stopped</option>
                </select>
              </div>
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="drug-name" className="sr-only"></label>
                  <input
                    ref={drugRef}
                    id="drugSubstance"
                    name="drugSubstance"
                    type="text"
                    required
                    placeholder="Drug Substance"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="study-image" className="sr-only"></label>
                  <input
                    ref={imageRef}
                    id="image"
                    name="image"
                    type="text"
                    required
                    placeholder="image"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                data-cy="submit"
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-teal-500 group-hover:text-teal-400"
                    aria-hidden="true"
                  />
                </span>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateStudy;
