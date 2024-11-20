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

  function getCookie(name) {
    const cookies = document.cookie.split(";"); // 쿠키 문자열을 ";"로 나눔
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim(); // 쿠키의 앞뒤 공백 제거
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1); // "name=" 이후의 값 반환
      }
    }
    return null; // 쿠키가 없으면 null 반환
  }
  console.log(document.cookie);

  const jsessionId = getCookie("JSESSIONID"); // JSESSIONID 가져오기
  console.log("현재 쿠키에 저장된 JSESSIONID:", jsessionId);

  useEffect(() => {
    // Axios 기본 설정 (쿠키 자동 포함)
    axios.defaults.withCredentials = true;

    // 프로필 사진 호출
    axios
      .get("https://go-farming.shop/users/profile/profile-picture", {
        headers: {
          Cookie: `JSESSIONID=${jsessionId}`,
        },
      })
      .then((response) => {
        setProfilePic(response.data.message); // message 값에서 이미지 URL 저장
      })
      .catch((error) => console.error("프로필 사진 로드 실패:", error));

    // 닉네임 호출
    axios
      .get("https://go-farming.shop/users/profile/nickname")
      .then((response) => {
        setNickname(response.data.message); // message 값에서 닉네임 저장
      })
      .catch((error) => console.error("닉네임 로드 실패:", error));

    // 연령대 호출
    axios
      .get("https://go-farming.shop/users/profile/age-group")
      .then((response) => {
        setAgeGroup(response.data.message); // message 값에서 연령대 저장
      })
      .catch((error) => console.error("연령대 로드 실패:", error));

    // 거주지 호출
    axios
      .get("https://go-farming.shop/users/profile/region")
      .then((response) => {
        setRegion(response.data.message); // message 값에서 거주지 저장
      })
      .catch((error) => console.error("거주지 로드 실패:", error));
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post("https://go-farming.shop/users/logout");
      console.log(response.data.message); // 성공 메시지 출력
      alert("로그아웃 성공!");
      // 추가적으로 로그아웃 이후 처리 (예: 페이지 이동)
      window.location.href = "/login"; // 로그아웃 후 로그인 페이지로 이동
    } catch (error) {
      console.error("로그아웃 실패:", error);
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    }
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
          <M.Img>
            {profilePic ? (
              <img src={profilePic} alt="프로필" />
            ) : (
              "이미지 로딩 중..."
            )}
          </M.Img>
          <M.Name>
            {nickname ? <h2>{nickname}</h2> : "닉네임 로딩 중..."}
          </M.Name>
          <M.Inf>
            <M.Age>
              <div>{ageGroup ? `${ageGroup}대` : "로딩 중..."}</div>
            </M.Age>
            <M.Live>
              <div>{region || "로딩 중..."}</div>
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
