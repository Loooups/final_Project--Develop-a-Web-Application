import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";
import Studies from "./pages/Studies";
import Patients from "./pages/Patients";
import MyDatas from "./pages/MyDatas";
import About from "./pages/About";
import Test from "./pages/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/mydatas" element={<MyDatas />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
