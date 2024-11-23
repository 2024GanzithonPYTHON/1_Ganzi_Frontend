import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as R from "../styles/StyledRevCheck";
import axios from "axios";

const RevCheck = () => {
  const [profileImage, setProfileImage] = useState(""); // 프로필 이미지 상태 저장
  const location = useLocation();
  const place = location.state;
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const gofav = () => {
    navigate("/favorite");
  };

  const gomy = () => {
    navigate("/my");
  };

  const gosearch = () => {
    navigate("/search");
  };

  const gohome = () => {
    navigate("/main");
  };

  useEffect(() => {
    // 프로필 이미지 가져오는 함수
    const fetchProfileImage = async () => {
      try {
        const token = localStorage.getItem("authToken"); // 로컬스토리지에서 토큰 가져오기

        const response = await axios.get("/users/profile/profile-picture", {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
          },
        });

        setProfileImage(response.data); // API에서 받은 이미지 URL 설정
      } catch (error) {
        console.error("Failed to fetch profile image:", error);
      }
    };

    fetchProfileImage();
  }, []);

  return (
    <R.Box>
      <R.Nav>
        <R.Profile>
          {profileImage ? (
            <img
              src={profileImage}
              alt="프로필"
              style={{
                width: "76.166px",
                height: "76.166px",
                borderRadius: "50%",
              }}
            />
          ) : (
            ""
          )}
        </R.Profile>
        <R.Home onClick={gohome}>
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/Home-none.svg`}
            alt="홈"
          />
          <div id="homename">메인홈</div>
        </R.Home>
        <R.Search onClick={gosearch}>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search-none.svg`}
            alt="검색"
          />
          <div id="searchname">검색하기</div>
        </R.Search>
        {/* <R.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </R.Review> */}
        <R.Recom>
          <img
            id="recom"
            src={`${process.env.PUBLIC_URL}/images/Recom.svg`}
            alt="추천"
          />
          <div id="recomname">추천장소</div>
        </R.Recom>
        <R.Fav onClick={gofav}>
          <img
            id="fav"
            src={`${process.env.PUBLIC_URL}/images/Fav-none.svg`}
            alt="즐겨찾기"
          />
          <div id="favname">즐겨찾기</div>
        </R.Fav>
        <R.My onClick={gomy}>
          <img
            id="my"
            src={`${process.env.PUBLIC_URL}/images/My-none.svg`}
            alt="마이"
          />
          <div id="myname">마이페이지</div>
        </R.My>
      </R.Nav>
      <R.Container>
        <R.Title>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Back.svg`}
            alt="뒤로가기"
            onClick={goback}
          />
          <div id="name">리뷰 확인하기</div>
        </R.Title>
        <R.Main>
          <R.Img></R.Img>
          <R.Detail>
            <R.Keyword>
              {place.keywords &&
                Object.entries(place.keywords).map(
                  ([keyword, count], index) => (
                    <R.WordBox key={index}>{keyword}</R.WordBox>
                  )
                )}
            </R.Keyword>
            <R.Inf>
              <R.Place>
                <R.Name>
                  <div id="name">{place.name}</div>
                  <div id="categoryid">{place.categoryId}</div>
                </R.Name>
                <R.Loc>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Location.svg`}
                    alt="장소"
                  />
                  <div>{place.address}</div>
                </R.Loc>
                <R.Tel>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Telephone.svg`}
                    alt="전화번호"
                  />
                  <div>{place.contact}</div>
                </R.Tel>
              </R.Place>
              <R.Favorite></R.Favorite>
            </R.Inf>
          </R.Detail>
        </R.Main>
        <R.Photo>
          <R.PhotoRev>
            <div id="title">사진 리뷰</div>
            <div id="figure">몇개</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Plus.svg`}
              alt="자세히보기"
            />
          </R.PhotoRev>
          <R.PhotoList>
            <R.Image></R.Image>
          </R.PhotoList>
        </R.Photo>
        <R.Line>
          <R.LineRev>
            <div id="title">한 줄 리뷰</div>
            <div id="figure">몇개</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Plus.svg`}
              alt="자세히보기"
            />
          </R.LineRev>
          <R.ReviewList>
            <R.Reviews>
              <div id="nick">닉네임</div>
              <div id="content">어쩌구저쩌구</div>
            </R.Reviews>
          </R.ReviewList>
        </R.Line>
      </R.Container>
    </R.Box>
  );
};

export default RevCheck;
