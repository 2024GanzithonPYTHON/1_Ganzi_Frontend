import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogin";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const gosignup = () => {
    navigate("/signup");
  };

  const goback = () => {
    navigate(-1);
  };

  const gosearch = () => {
    navigate("/search");
  };

  const gofav = () => {
    navigate("/favorite");
  };

  const gomy = () => {
    navigate("/my");
  };

  // 상태값으로 아이디와 비밀번호 관리
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    try {
      const response = await axios.post("/users/login", {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        alert("로그인 성공!");
        navigate("/home");
      }
    } catch (error) {
      console.error("로그인 실패", error);
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.");
    }
  };

  return (
    <L.Box>
      <L.Nav>
        <L.Profile></L.Profile>
        <L.Home>
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/Home.svg`}
            alt="홈"
          />
          <div id="homename">메인홈</div>
        </L.Home>
        <L.Search onClick={gosearch}>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search-none.svg`}
            alt="검색"
          />
          <div id="searchname">검색하기</div>
        </L.Search>
        <L.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </L.Review>
        <L.Recom>
          <img
            id="recom"
            src={`${process.env.PUBLIC_URL}/images/Recom-none.svg`}
            alt="추천"
          />
          <div id="recomname">추천장소</div>
        </L.Recom>
        <L.Fav onClick={gofav}>
          <img
            id="fav"
            src={`${process.env.PUBLIC_URL}/images/Fav-none.svg`}
            alt="즐겨찾기"
          />
          <div id="favname">즐겨찾기</div>
        </L.Fav>
        <L.My onClick={gomy}>
          <img
            id="my"
            src={`${process.env.PUBLIC_URL}/images/My-none.svg`}
            alt="마이"
          />
          <div id="myname">마이페이지</div>
        </L.My>
        <L.Set>
          <img
            id="setting"
            src={`${process.env.PUBLIC_URL}/images/Setting-none.svg`}
            alt="설정"
          />
        </L.Set>
      </L.Nav>
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
              onClick={goback}
            />
          </L.Back>
          <L.Login>
            <div id="title">로그인</div>
          </L.Login>
        </L.Title>
        <L.Infbox>
          <form onSubmit={handleSubmit}>
            <L.Id>
              <div id="name1">아이디</div>
            </L.Id>
            <L.Putid>
              <input
                type="text"
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </L.Putid>
            <L.Pw>
              <div id="name2">비밀번호</div>
            </L.Pw>
            <L.Putpw>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </L.Putpw>
            <L.Hr />
            <L.Signin>
              <button type="submit" id="login">
                로그인
              </button>
            </L.Signin>
          </form>
          <L.Signup onClick={() => navigate("/signup")}>
            <div id="signup">회원가입</div>
          </L.Signup>
        </L.Infbox>
      </L.Container>
    </L.Box>
  );
};

export default Login;
