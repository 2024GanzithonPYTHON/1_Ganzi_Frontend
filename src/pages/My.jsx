import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMy";
import axios from "axios";

const My = () => {
  const navigate = useNavigate();
  // State 선언
  const [profilePic, setProfilePic] = useState(""); // 프로필 사진 URL
  const [nickname, setNickname] = useState(""); // 닉네임
  const [ageGroup, setAgeGroup] = useState(""); // 연령대
  const [region, setRegion] = useState(""); // 거주지

  const goback = () => {
    navigate(-1);
  };

  const gohome = () => {
    navigate("/");
  };

  const gosearch = () => {
    navigate("/search");
  };

  const gofav = () => {
    navigate("/favorite");
  };

  const gorec = () => {
    navigate("/recommend");
  };

  useEffect(() => {
    // 서버와의 통신으로 데이터 가져오기
    const fetchProfileData = async () => {
      try {
        // 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem("authToken");
        // 프로필 사진 호출
        const profileResponse = await axios.get(
          "https://go-farming.shop/users/profile/profile-picture",
          {
            headers: {
              Authorization: `Bearer ${token}`, // 토큰 추가
            },
          }
        );
        setProfilePic(profileResponse.data);
        console.log("사진", profileResponse.data);

        // 닉네임 호출
        const nicknameResponse = await axios.get(
          "https://go-farming.shop/users/profile/nickname",
          {
            headers: {
              Authorization: `Bearer ${token}`, // 토큰 추가
            },
          }
        );
        setNickname(nicknameResponse.data);

        // 연령대 호출
        const ageGroupResponse = await axios.get(
          "https://go-farming.shop/users/profile/age-group",
          {
            headers: {
              Authorization: `Bearer ${token}`, // 토큰 추가
            },
          }
        );
        setAgeGroup(ageGroupResponse.data);

        // 거주지 호출
        const regionResponse = await axios.get(
          "https://go-farming.shop/users/profile/region",
          {
            headers: {
              Authorization: `Bearer ${token}`, // 토큰 추가
            },
          }
        );
        setRegion(regionResponse.data);
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      }
    };

    fetchProfileData(); // 프로필 데이터 로드 함수 호출
  }, []);

  const handleLogout = async () => {
    try {
      // 로컬 스토리지에서 토큰 가져오기
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "https://go-farming.shop/users/logout",
        {}, // 로그아웃 요청에 필요한 바디 (없다면 빈 객체)
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰 추가
          },
        }
      );
      console.log(response.data.message);
      alert("로그아웃 성공!");

      // 로컬 스토리지에서 토큰 제거
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // 로그인 페이지로 이동
    } catch (error) {
      console.error("로그아웃 실패:", error);
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <M.Box>
      <M.Nav>
        <M.Profile></M.Profile>
        <M.Home onClick={gohome}>
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
        <M.Recom onClick={gorec}>
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
          <M.Img>
            {profilePic ? (
              <img src={profilePic} alt="프로필" />
            ) : (
              "이미지 로딩 중..."
            )}
          </M.Img>
          <M.Name>{nickname}</M.Name>
          <M.Inf>
            <M.Age>
              <div>{ageGroup}대</div>
            </M.Age>
            <M.Live>
              <div>{region}</div>
            </M.Live>
          </M.Inf>
          <M.Hr />
          <M.Manage>
            <div>리뷰/추천장소 관리</div>
          </M.Manage>
          <M.Edit>
            <div>회원정보 수정</div>
          </M.Edit>
          <M.Logout onClick={handleLogout}>
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
