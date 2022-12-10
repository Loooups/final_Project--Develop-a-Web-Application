import { Routes, Route, useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate("/studies");
  };
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/patients");
  };

  return (
    <div>
      <button onClick={navigateHome}>test1</button>
      <hr />
      <button onClick={navigateToContacts}>test2</button>
    </div>
  );
};

export default Test;
