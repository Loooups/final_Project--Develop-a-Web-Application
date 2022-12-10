import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/users/SignIn";
import Studies from "./pages/studies/Studies";
import Patients from "./pages/patients/Patients";
import MyDatas from "./pages/users/MyDatas";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormStudy from "./pages/studies/FormStudy";
import FormUser from "./pages/users/FromUser";
import Users from "./pages/users/Users";

const App = () => {
  const userLogged = localStorage.getItem("access_token");
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    console.log("user logged" + userLogged);
    if (userLogged) {
      setIsLoggedin(true);
    }
  }, [userLogged]);

  return (
    <BrowserRouter>
      <div>
        <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      </div>
      <Routes>
        <Route
          path="/formStudy"
          element={<FormStudy setIsLoggedin={setIsLoggedin} />}
        />
        <Route
          path="/formUser"
          element={<FormUser setIsLoggedin={setIsLoggedin} />}
        />
        <Route path="/" element={<About setIsLoggedin={setIsLoggedin} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/mydatas" element={<MyDatas />} />
        <Route
          path="/signin"
          element={<SignIn setIsLoggedin={setIsLoggedin} />}
        />
        <Route path="*" element={<About setIsLoggedin={setIsLoggedin} />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
