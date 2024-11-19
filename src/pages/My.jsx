import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMy";
import axios from "axios";

const My = () => {
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

  return (
    <M.Box>
      <M.Nav>
        <M.Profile></M.Profile>
        <M.Home>
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/Home-none.svg`}
            alt="홈"
          />
          <div id="homename">메인홈</div>
        </M.Home>
        <M.Search onClick={gosearch}>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search-none.svg`}
            alt="검색"
          />
          <div id="searchname">검색하기</div>
        </M.Search>
        <M.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </M.Review>
        <M.Recom>
          <img
            id="recom"
            src={`${process.env.PUBLIC_URL}/images/Recom-none.svg`}
            alt="추천"
          />
          <div id="recomname">추천장소</div>
        </M.Recom>
        <M.Fav onClick={gofav}>
          <img
            id="fav"
            src={`${process.env.PUBLIC_URL}/images/Fav-none.svg`}
            alt="즐겨찾기"
          />
          <div id="favname">즐겨찾기</div>
        </M.Fav>
        <M.My>
          <img
            id="my"
            src={`${process.env.PUBLIC_URL}/images/My.svg`}
            alt="마이"
          />
          <div id="myname">마이페이지</div>
        </M.My>
        <M.Set>
          <img
            id="setting"
            src={`${process.env.PUBLIC_URL}/images/Setting-none.svg`}
            alt="설정"
          />
        </M.Set>
      </M.Nav>
      <M.Container>
        <M.Title>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Back.svg`}
            alt="뒤로가기"
            onClick={goback}
          />
          <div id="name">마이페이지</div>
        </M.Title>
        <M.Infbox>
          <M.Img></M.Img>
          <M.Name></M.Name>
          <M.Inf>
            <M.Age>
              <div>연령대</div>
            </M.Age>
            <M.Live>
              <div>거주지</div>
            </M.Live>
          </M.Inf>
          <M.Hr />
          <M.Manage>
            <div>리뷰/추천장소 관리</div>
          </M.Manage>
          <M.Edit>
            <div>회원정보 수정</div>
          </M.Edit>
          <M.Logout>
            <div>로그아웃</div>
          </M.Logout>
          <M.Delete>
            <div>회원 탈퇴하기</div>
          </M.Delete>
        </M.Infbox>
      </M.Container>
    </M.Box>
  );
};

export default My;
