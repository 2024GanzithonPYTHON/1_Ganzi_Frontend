import React, { useState } from "react";
import * as F from "../styles/StyledFavoriteModal";

const FavoriteModal = ({ isOpen, onClose }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedColorId, setSelectedColorId] = useState("색상을 선택해주세요");
  const [inputValue, setInputValue] = useState(""); // 입력값 관리

  // 색상을 선택하면 상태를 업데이트
  const handleColorClick = (color, colorId) => {
    setSelectedColor(color);
    setSelectedColorId(colorId); // select 텍스트 변경
  };
  // 입력 값 변경 처리
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 20) {
      setInputValue(value); // 최대 글자수(20) 이내로만 업데이트
    }
  };
  // Create 버튼 색상 조건
  const isReadyToCreate = selectedColor && inputValue.trim().length > 0;

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
              <div id="create">폴더 생성하기</div>
            </F.Create>
          </F.Input>
        </F.ModalContainer>
      </F.Overlay>
    </>
  );
};

export default FavoriteModal;
