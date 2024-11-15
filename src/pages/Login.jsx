import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogin";

const Login = () => {
  const navigate = useNavigate();

  const gosignup = () => {
    navigate("/signup");
  };

  return (
    <L.Container>
      <L.Logo>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
          alt="고파밍"
        />
      </L.Logo>
      <L.Title>
        <L.Back>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Back.svg`}
            alt="뒤로가기"
          />
        </L.Back>
        <L.Login>
          <div id="title">로그인</div>
        </L.Login>
      </L.Title>
      <L.Infbox>
        <L.Id>
          <div id="name1">아이디</div>
        </L.Id>
        <L.Putid>
          <input type="text" placeholder="아이디를 입력하세요" />
        </L.Putid>
        <L.Pw>
          <div id="name2">비밀번호</div>
        </L.Pw>
        <L.Putpw>
          <input type="password" placeholder="비밀번호를 입력하세요" />
        </L.Putpw>
        <L.Hr />
        <L.Signin>
          <div id="login">로그인</div>
        </L.Signin>
        <L.Signup onClick={gosignup}>
          <div id="signup">회원가입</div>
        </L.Signup>
        {/* <L.Find>
          <L.Idfind>
            <div id="idfind">아이디 찾기</div>
          </L.Idfind>
          <L.Pwfind>
            <div id="pwfind">비밀번호 찾기</div>
          </L.Pwfind>
        </L.Find> */}
      </L.Infbox>
    </L.Container>
  );
};

export default Login;
