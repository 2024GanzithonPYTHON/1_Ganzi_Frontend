import React, { useState } from "react";
import * as F from "../styles/StyledFavoriteModal";
import axios from "axios";

const FavoriteModal = ({ isOpen, onClose, modalData, setModalData }) => {
  const { inputValue, selectedColor, selectedColorId } = modalData;
  // const [selectedColor, setSelectedColor] = useState("");
  // const [selectedColorId, setSelectedColorId] = useState("색상을 선택해주세요");
  // const [inputValue, setInputValue] = useState(""); // 입력값 관리

  // 색상을 선택하면 상태를 업데이트
  const handleColorClick = (color, colorId) => {
    setModalData((prevData) => ({
      ...prevData,
      selectedColor: color,
      selectedColorId: colorId,
    }));
  };
  // 입력 값 변경 처리
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 20) {
      setModalData((prevData) => ({ ...prevData, inputValue: value }));
    }
  };
  // Create 버튼 색상 조건
  const isReadyToCreate = selectedColor && inputValue.trim().length > 0;

  // 폴더 생성 요청 핸들러
  const handleSubmit = async (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    if (!inputValue || !selectedColorId) {
      alert("폴더명과 색상을 선택해주세요.");
      return;
    }

    try {
      // 로컬 스토리지에서 토큰 가져오기
      const token = localStorage.getItem("authToken");

      // if (!token) {
      //   alert("로그인이 필요합니다. 다시 로그인해주세요.");
      //   return;
      // }

      const requestBody = {
        folderName: inputValue, // 폴더명
        color: selectedColorId, // 선택된 색상 ID
      };

      // console.log("요청 데이터:", requestBody); // 디버깅용 요청 데이터 출력

      const response = await axios.post(
        "/folders", // API URL
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰 추가
            "Content-Type": "application/json", // JSON 데이터 전송
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("폴더가 성공적으로 생성되었습니다!");

        // 모달 창 닫기
        onClose();
        // 필요한 후속 작업 (예: 목록 갱신)
      }
    } catch (error) {
      console.error("폴더 생성 중 오류 발생:", error.response || error.message);
      alert("폴더 생성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <F.Overlay>
        <F.ModalContainer>
          <F.Close onClick={onClose}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Close.svg`}
              alt="닫기"
            />
          </F.Close>
          <F.Title>
            <div id="name">새 폴더 만들기</div>
          </F.Title>
          <form onSubmit={handleSubmit}>
            <F.Input>
              <F.FolName>
                <input
                  id="title"
                  type="text"
                  placeholder="폴더명을 입력해주세요"
                  value={inputValue}
                  onChange={handleInputChange} // 입력값 변경 이벤트 핸들러
                />
                <div id="number">({inputValue.length}/20)</div>
              </F.FolName>
              <F.Folcolor>
                <div id="select">{selectedColorId}</div>
                <div
                  id="eclipse"
                  style={{
                    backgroundColor: selectedColor,
                    borderRadius: "50%",
                  }}
                ></div>
              </F.Folcolor>
              <F.Color>
                <img
                  id="red"
                  src={`${process.env.PUBLIC_URL}/images/Red.svg`}
                  alt="빨강"
                  onClick={() => handleColorClick("#FF3434", "RED")}
                />
                <img
                  id="orange"
                  src={`${process.env.PUBLIC_URL}/images/Orange.svg`}
                  alt="주황"
                  onClick={() => handleColorClick("#FF9D00", "ORANGE")}
                />
                <img
                  id="yellow"
                  src={`${process.env.PUBLIC_URL}/images/Yellow.svg`}
                  alt="노랑"
                  onClick={() => handleColorClick("#FFEE00", "YELLOW")}
                />
                <img
                  id="green"
                  src={`${process.env.PUBLIC_URL}/images/Green.svg`}
                  alt="초록"
                  onClick={() => handleColorClick("#53E300", "GREEN")}
                />
                <img
                  id="blue"
                  src={`${process.env.PUBLIC_URL}/images/Blue.svg`}
                  alt="파랑"
                  onClick={() => handleColorClick("#005EFF", "BLUE")}
                />
                <img
                  id="purple"
                  src={`${process.env.PUBLIC_URL}/images/Purple.svg`}
                  alt="보라"
                  onClick={() => handleColorClick("#9100FF", "PURPLE")}
                />
                <img
                  id="pink"
                  src={`${process.env.PUBLIC_URL}/images/Pink.svg`}
                  alt="분홍"
                  onClick={() => handleColorClick("#FF55AD", "PINK")}
                />
              </F.Color>
              <F.Create
                style={{
                  backgroundColor: isReadyToCreate ? "#FF3434" : "#B9B9B9",
                }}
              >
                <button type="submit" id="create">
                  폴더 생성하기
                </button>
              </F.Create>
            </F.Input>
          </form>
        </F.ModalContainer>
      </F.Overlay>
    </>
  );
};

export default FavoriteModal;
