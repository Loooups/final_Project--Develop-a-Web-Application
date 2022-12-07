import React from "react";
import Dashboard from "../components/Dashbord";
import Footer from "../components/Footer";
import Register from "../components/Register";

export default function Admin() {
  return (
    <div>
      <Dashboard />
      <Register />
      <p>Admin</p>
      <Footer />
    </div>
  );
}
