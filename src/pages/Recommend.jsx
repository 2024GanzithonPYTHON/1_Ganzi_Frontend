import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRecommend";
import axios from "axios";

const Recommend = () => {
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
    navigate("/");
  };

  const [recentSearches, setRecentSearches] = useState([]); // 검색어 목록 상태
  const [searchInput, setSearchInput] = useState(""); // 현재 검색어 입력 상태

  const handleAddSearch = () => {
    if (searchInput.trim()) {
      setRecentSearches((prev) => [searchInput, ...prev]); // 검색어 추가
      setSearchInput(""); // 입력 필드 초기화
    }
  };

  const handleDelete = (indexToDelete) => {
    setRecentSearches((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    ); // 선택된 검색어 삭제
  };

  const inputRef = useRef(null);

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // input 값 비우기
    }
  };

  const [places, setPlaces] = useState([]); // 장소 데이터 상태
  const [error, setError] = useState(null);

  const fetchPlaces = async () => {
    try {
      const authToken = localStorage.getItem("authToken");

      const response = await axios.get(
        "/place?categoryId=2&provinceId=1&cityId=2",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200 && response.data?.data?.places) {
        console.log("불러온 장소 데이터:", response.data.data.places);
        setPlaces(response.data.data.places); // 장소 데이터 상태 업데이트
      }
    } catch (err) {
      console.error("Failed to fetch places:", err);
      setError("장소 데이터를 불러오는 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const [profileImage, setProfileImage] = useState(""); // 프로필 이미지 상태 저장
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
        <R.Set>
          <img
            id="setting"
            src={`${process.env.PUBLIC_URL}/images/Setting-none.svg`}
            alt="설정"
          />
        </R.Set>
      </R.Nav>
      <R.Container>
        <R.Title>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Back.svg`}
            alt="뒤로가기"
            onClick={goback}
          />
          <div id="name">추천장소</div>
        </R.Title>
        <R.Det>
          <R.Searchbar>
            <input
              ref={inputRef}
              id="search"
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <img
              id="cancel"
              src={`${process.env.PUBLIC_URL}/images/Cancel.svg`}
              alt="지우기"
              onClick={handleClearInput}
            />
            <img
              id="go"
              src={`${process.env.PUBLIC_URL}/images/Search-none.svg`}
              alt="검색"
              onClick={handleAddSearch}
            />
          </R.Searchbar>
        </R.Det>
        {/* <R.Category>
          <div>전체</div>
        </R.Category> */}
        <R.Hr />
        <R.Detca>
          <R.Region>
            <div>지역</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Detail.svg`}
              alt="더보기"
            />
          </R.Region>
          <R.Div>
            <div>구분</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Detail.svg`}
              alt="더보기"
            />
          </R.Div>
          <R.Age>
            <div>연령대</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Detail.svg`}
              alt="더보기"
            />
          </R.Age>
          <R.Op>
            <div>운영여부</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Detail.svg`}
              alt="더보기"
            />
          </R.Op>
        </R.Detca>
        <R.List>
          <R.Let>
            <div id="category">전체</div>
            <div id="figure">개</div>
            <div id="order">추천순</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Detail.svg`}
              alt="더보기"
            />
          </R.Let>
          {places.length > 0 ? (
            places.map((place) => (
              <R.Comp key={place.id}>
                <R.Detail>
                  <R.Place>
                    <div id="name">{place.name}</div>
                    <div id="category">{place.category}</div>
                  </R.Place>
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
                      alt="전화"
                    />
                    <div>{place.contact}</div>
                  </R.Tel>
                  <R.Check
                    onClick={() => {
                      navigate("/recommend/review", { state: place });
                    }}
                  >
                    <div>리뷰 확인하기</div>
                  </R.Check>
                </R.Detail>
                <R.Img>
                  <img src={place.imageUrl} alt={`${place.name}`} />
                </R.Img>
              </R.Comp>
            ))
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div>장소 데이터를 불러오는 중입니다.</div>
          )}
        </R.List>
      </R.Container>
    </R.Box>
  );
};

export default Recommend;
