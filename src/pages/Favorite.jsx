import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as F from "../styles/StyledFav";
import Modal from "./FavoriteModal";

const Favorite = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const goback = () => {
    navigate(-1);
  };

  const gosearch = () => {
    navigate("/search");
  };

  const gomy = () => {
    navigate("/my");
  };

  const gorec = () => {
    navigate("/recommend");
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <F.Box>
      <Modal isOpen={showModal} onClose={closeModal} /> {/* 모달 추가 */}
      <F.Nav>
        <F.Profile></F.Profile>
        <F.Home>
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/Home-none.svg`}
            alt="홈"
          />
          <div id="homename">메인홈</div>
        </F.Home>
        <F.Search onClick={gosearch}>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search-none.svg`}
            alt="검색"
          />
          <div id="searchname">검색하기</div>
        </F.Search>
        <F.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </F.Review>
        <F.Recom onClick={gorec}>
          <img
            id="recom"
            src={`${process.env.PUBLIC_URL}/images/Recom-none.svg`}
            alt="추천"
          />
          <div id="recomname">추천장소</div>
        </F.Recom>
        <F.Fav>
          <img
            id="fav"
            src={`${process.env.PUBLIC_URL}/images/Fav.svg`}
            alt="즐겨찾기"
          />
          <div id="favname">즐겨찾기</div>
        </F.Fav>
        <F.My onClick={gomy}>
          <img
            id="my"
            src={`${process.env.PUBLIC_URL}/images/My-none.svg`}
            alt="마이"
          />
          <div id="myname">마이페이지</div>
        </F.My>
        <F.Set>
          <img
            id="setting"
            src={`${process.env.PUBLIC_URL}/images/Setting-none.svg`}
            alt="설정"
          />
        </F.Set>
      </F.Nav>
      <F.Container>
        <F.Title>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Back.svg`}
            alt="뒤로가기"
            onClick={goback}
          />
          <div id="name">즐겨찾기</div>
        </F.Title>
        <F.Side>
          <div id="type">전체 폴더</div>
        </F.Side>
        <F.List>
          <F.Folder>
            <div id="img"></div>
            <div id="folder">폴더명</div>
          </F.Folder>
          <F.Hr></F.Hr>
          <F.New onClick={openModal}>
            <img
              id="newfolder"
              src={`${process.env.PUBLIC_URL}/images/NewFolder.svg`}
              alt="새로운"
            />
            <div id="new">새 폴더 만들기</div>
          </F.New>
          <F.Edit>
            <div id="detail">폴더 수정/삭제하기</div>
          </F.Edit>
        </F.List>
      </F.Container>
    </F.Box>
  );
};

export default Favorite;
