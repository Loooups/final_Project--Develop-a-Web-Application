const StudiesCards = ({ study }) => {
  return (
    <div className="inline-block">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={study.image}
            alt={"Study" + study.name}
          />
        </a>
        <div className="p-6">
          <h5 className="text-2xl font-bold text-gray-900">{study.name}</h5>
          <p className="text-sm text-gray-500">
            Started on {study.startDate} until {study.endDate}
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-tail-700 hover:shadow-lg focus:bg-tail-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-tail-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudiesCards;
