import React, { useState } from "react";
import * as F from "../styles/StyledReward";
// import axios from "axios";

const Reward = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (row) => {
    setSelectedRow(row); // 선택된 Row 업데이트
  };
  const getRowStyle = (row) => {
    // 선택된 Row만 border를 적용
    return selectedRow === row
      ? { border: "1px solid #FF3434" }
      : { border: "1px solid #E6E6E6" };
  };

  const getSStyle = (row) => ({
    backgroundColor: selectedRow === row ? "#FF3434" : "#D9D9D9",
  });

  const getTextColor = (row) => ({
    color: selectedRow === row ? "#FF3434" : "#A5A5A5", // 선택된 Row만 글자색 변경
  });

  const getButtonStyle = () => ({
    backgroundColor: selectedRow ? "#FF3434" : "#B9B9B9", // 선택되었으면 빨간색, 아니면 회색
  });
  return (
    <>
      <F.Overlay>
        <F.ModalContainer>
          <F.Close>
            <img
              src={`${process.env.PUBLIC_URL}/images/Close.svg`}
              alt="닫기"
            />
          </F.Close>
          <F.Container>
            <div id="title">원하는 리워드를 선택하세요</div>
            <F.Select>
              <F.R1
                style={getRowStyle("R1")}
                onClick={() => handleClick("R1")} // 클릭 이벤트 핸들러
              >
                <F.S1 style={getSStyle("R1")}></F.S1>
                <F.C1>
                  <div id="title" style={getTextColor("R1")}>
                    지역화폐
                  </div>
                  <div id="content" style={getTextColor("R1")}>
                    현재 거주지에서 사용 가능한 지역화폐 10,000원 지급
                  </div>
                </F.C1>
              </F.R1>
              <F.R2 style={getRowStyle("R2")} onClick={() => handleClick("R2")}>
                <F.S2 style={getSStyle("R2")}></F.S2>
                <F.C2>
                  <div id="title" style={getTextColor("R2")}>
                    공연 무료 관람권
                  </div>
                  <div id="content" style={getTextColor("R2")}>
                    아트센터에서 열리는 공연 무료 관람권 지급
                  </div>
                </F.C2>
              </F.R2>
              <F.R3 style={getRowStyle("R3")} onClick={() => handleClick("R3")}>
                <F.S3 style={getSStyle("R3")}></F.S3>
                <F.C3>
                  <div id="title" style={getTextColor("R3")}>
                    온라인 문화상품권
                  </div>
                  <div id="content" style={getTextColor("R3")}>
                    컬쳐랜드, 해피머니, 북앤라이프 중 택 1 지급
                  </div>
                </F.C3>
              </F.R3>
            </F.Select>
            <F.Get style={getButtonStyle()}>
              <div>리워드 받기</div>
            </F.Get>
          </F.Container>
        </F.ModalContainer>
      </F.Overlay>
    </>
  );
};

export default Reward;
