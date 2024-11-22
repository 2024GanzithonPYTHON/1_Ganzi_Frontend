import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as F from "../styles/StyledFE";
import Modal from "./FavoriteModal";
import axios from "axios";

const FavEdit = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    inputValue: "",
    selectedColor: "",
    selectedColorId: "색상을 선택해주세요",
  });
  const [selectedFolderId, setSelectedFolderId] = useState(null); // 선택된 폴더 ID 상태
  const [folders, setFolders] = useState([]); // API 데이터 상태 추가
  // 폴더 선택 핸들러
  const handleFolderClick = (folderId) => {
    setSelectedFolderId((prevId) => (prevId === folderId ? null : folderId)); // 이미 선택된 폴더를 클릭하면 선택 해제
  };
  const handleDeleteClick = async (folderId) => {
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.delete(`/folders/${folderId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        },
      });

      if (response.status === 200) {
        alert("폴더가 성공적으로 삭제되었습니다.");
        // 삭제된 폴더를 상태에서 제거
        setFolders((prevFolders) =>
          prevFolders.filter((folder) => folder.folderId !== folderId)
        );
      }
    } catch (error) {
      console.error("폴더 삭제 중 오류 발생:", error.response || error.message);
      alert("폴더 삭제에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    // API 호출
    axios
      .get("/folders", {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        },
      }) // 엔드포인트 설정
      .then((response) => {
        setFolders(response.data); // API 데이터 저장
      })
      .catch((error) => {
        console.error("폴더 데이터를 가져오는 중 에러 발생:", error);
      });
  }, []);

  const addFolder = (newFolder) => {
    setFolders((prevFolders) => [...prevFolders, newFolder]); // 새로운 폴더 추가
  };

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

  const gofav = () => {
    navigate("/favorite");
  };

  const gohome = () => {
    navigate("/");
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    // 모달 데이터 초기화
    setModalData({
      inputValue: "",
      selectedColor: "",
      selectedColorId: "색상을 선택해주세요",
    });
    setShowModal(false); // 모달 닫기
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

  return (
    <F.Box>
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        modalData={modalData} // 초기 데이터 전달
        setModalData={setModalData}
        addFolder={addFolder} // 새로운 폴더 추가 함수 전달
      />{" "}
      {/* 모달 추가 */}
      <F.Nav>
        <F.Profile>
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
        </F.Profile>
        <F.Home onClick={gohome}>
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
          {folders.map((folder) => (
            <F.Folder
              key={folder.folderId}
              onClick={() => handleFolderClick(folder.folderId)}
              style={{
                border:
                  selectedFolderId === folder.folderId
                    ? "1px solid #FF0000" // 선택된 폴더에만 border 적용
                    : "1px solid #E6E6E6", // 선택되지 않은 폴더는 기본값
              }}
            >
              <div
                id="img"
                style={{
                  backgroundColor: folder.color, // API 데이터로 배경색 설정
                }}
              ></div>
              <div id="folder">{folder.folderName}</div> {/* 폴더 이름 표시 */}
              {selectedFolderId === folder.folderId && ( // 선택된 폴더에만 이미지 렌더링
                <>
                  <img
                    id="edit"
                    src={`${process.env.PUBLIC_URL}/images/Edit.svg`}
                    alt="수정"
                  />
                  <img
                    id="delete"
                    src={`${process.env.PUBLIC_URL}/images/DelFolder.svg`}
                    alt="삭제"
                    onClick={(e) => {
                      e.stopPropagation(); // 부모의 onClick 이벤트 전파 방지
                      handleDeleteClick(folder.folderId);
                    }}
                  />
                </>
              )}
            </F.Folder>
          ))}
          <F.Hr></F.Hr>
          {/* <F.New onClick={openModal}>
            <img
              id="newfolder"
              src={`${process.env.PUBLIC_URL}/images/NewFolder.svg`}
              alt="새로운"
            />
            <div id="new">새 폴더 만들기</div>
          </F.New> */}
          <F.Edit onClick={gofav}>
            <div id="detail">완료하기</div>
          </F.Edit>
        </F.List>
      </F.Container>
    </F.Box>
  );
};

export default FavEdit;
