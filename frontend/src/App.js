import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Logbooks from "./pages/logbooks/Logbooks";

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(
    () => localStorage.getItem("access_token") !== null
  );

  // useEffect(() => {
  //   const userLogged = ;
  //   if (userLogged) {
  //     setIsLoggedin(true);
  //     console.log("user logged" + userLogged);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <div>
        <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      </div>
      <Routes>
        <Route
          path="/signin"
          element={<SignIn setIsLoggedin={setIsLoggedin} />}
        />
        <Route
          path="/formStudy"
          element={isLoggedin ? <FormStudy /> : <Navigate to="/signin" />}
        />
        <Route
          path="/formUser"
          element={isLoggedin ? <FormUser /> : <Navigate to="/signin" />}
        />
        <Route path="/" element={<About />} />
        <Route
          path="/users"
          element={isLoggedin ? <Users /> : <Navigate to="/signin" />}
        />
        <Route
          path="/studies"
          element={isLoggedin ? <Studies /> : <Navigate to="/signin" />}
        />
        <Route
          path="/patients"
          element={isLoggedin ? <Patients /> : <Navigate to="/signin" />}
        />
        <Route
          path="/logbooks"
          element={isLoggedin ? <Logbooks /> : <Navigate to="/signin" />}
        />
        <Route
          path="/mydatas"
          element={isLoggedin ? <MyDatas /> : <Navigate to="/signin" />}
        />
        <Route path="*" element={<About />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
