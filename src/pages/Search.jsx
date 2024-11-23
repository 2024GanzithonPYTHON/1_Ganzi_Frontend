import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSearch";
import axios from "axios";

const Search = () => {
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

  const gohome = () => {
    navigate("/main");
  };

  const gorec = () => {
    navigate("/recommend");
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

  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // 카카오 지도 API로 장소 검색
  const searchPlaces = async () => {
    if (!searchInput.trim()) return;

    const kakaoKey = "YOUR_KAKAO_API_KEY"; // 카카오 API 키
    const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(
      searchInput
    )}`;
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `KakaoAK ${kakaoKey}` },
      });
      setSearchResults(response.data.documents); // 검색 결과 저장
    } catch (error) {
      console.error("Failed to search places:", error);
    }
  };

  // 장소 선택 및 백엔드 API 호출
  const handleSelectPlace = async (place) => {
    setSelectedPlace(place); // 선택된 장소 저장

    const requestBody = {
      kakaoId: place.id,
      name: place.place_name,
    };

    try {
      const response = await axios.post("/place/kakao", requestBody);
      console.log("Place saved successfully:", response.data);
      alert("장소가 성공적으로 저장되었습니다!");
    } catch (error) {
      console.error("Failed to save place:", error);
      alert("장소 저장에 실패했습니다.");
    }
  };

  return (
    <S.Box>
      <S.Nav>
        <S.Profile>
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
        </S.Profile>
        <S.Home onClick={gohome}>
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/Home-none.svg`}
            alt="홈"
          />
          <div id="homename">메인홈</div>
        </S.Home>
        <S.Search>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search.svg`}
            alt="검색"
          />
          <div id="searchname">검색하기</div>
        </S.Search>
        {/* <S.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </S.Review> */}
        <S.Recom onClick={gorec}>
          <img
            id="recom"
            src={`${process.env.PUBLIC_URL}/images/Recom-none.svg`}
            alt="추천"
          />
          <div id="recomname">추천장소</div>
        </S.Recom>
        <S.Fav onClick={gofav}>
          <img
            id="fav"
            src={`${process.env.PUBLIC_URL}/images/Fav-none.svg`}
            alt="즐겨찾기"
          />
          <div id="favname">즐겨찾기</div>
        </S.Fav>
        <S.My onClick={gomy}>
          <img
            id="my"
            src={`${process.env.PUBLIC_URL}/images/My-none.svg`}
            alt="마이"
          />
          <div id="myname">마이페이지</div>
        </S.My>
        <S.Set>
          <img
            id="setting"
            src={`${process.env.PUBLIC_URL}/images/Setting-none.svg`}
            alt="설정"
          />
        </S.Set>
      </S.Nav>
      <S.Container>
        <S.Title>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Back.svg`}
            alt="뒤로가기"
            onClick={goback}
          />
          <div id="name">검색하기</div>
        </S.Title>
        <S.Det>
          <S.Searchbar>
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
          </S.Searchbar>
        </S.Det>
        <S.Searchname>
          <div id="recent">최근 검색어</div>
        </S.Searchname>
        <S.Hr />
        <S.Recentlist>
          {recentSearches.map((search, index) => (
            <S.Recent key={index}>
              <img
                id="icon"
                src={`${process.env.PUBLIC_URL}/images/Place.svg`}
                alt="장소아이콘"
              />
              <div id="information">{search}</div> {/* 검색어 표시 */}
              <img
                id="delete"
                src={`${process.env.PUBLIC_URL}/images/Delete.svg`}
                alt="삭제"
                onClick={() => handleDelete(index)} // 삭제 버튼 클릭 이벤트
              />
            </S.Recent>
          ))}
        </S.Recentlist>
      </S.Container>
    </S.Box>
  );
};
export default Search;
