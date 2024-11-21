import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSearch";

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

  const gorec = () => {
    navigate("/recommend");
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
  return (
    <S.Box>
      <S.Nav>
        <S.Profile></S.Profile>
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
        <S.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </S.Review>
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
            <input id="search" type="text" placeholder="검색어를 입력하세요" />
            <img
              id="cancel"
              src={`${process.env.PUBLIC_URL}/images/Cancel.svg`}
              alt="지우기"
            />
          </S.Searchbar>
        </S.Det>
        {/* <S.Category></S.Category> */}
      </S.Container>
    </S.Box>
  );
};
export default Search;
