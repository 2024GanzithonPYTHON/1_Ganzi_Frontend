import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogin";

const Login = () => {
  return (
    <L.Container>
      <L.Logo>
        <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} alt="" />
      </L.Logo>
    </L.Container>
  );
};

export default Login;
