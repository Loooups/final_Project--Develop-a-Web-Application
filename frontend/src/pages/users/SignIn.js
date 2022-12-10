import React from "react";
import Login from "../../components/autentication/Login";

const SignIn = (props) => {
  return <Login setIsLoggedin={props.setIsLoggedin} />;
};

export default SignIn;
