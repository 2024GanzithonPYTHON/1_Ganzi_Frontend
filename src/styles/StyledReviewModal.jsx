import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%; /* 화면 중앙에 위치 */
  left: 50%;
  transform: translate(-50%, -50%); /* 가로 및 세로 정중앙 정렬 */
  background: white;
  padding: 20px;
  border-radius: 10px; /* 모서리 둥글게 */
  width: 600px; /* 너비 조정 */
  max-height: 80%; /* 최대 높이 설정 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7; /* 마우스를 올렸을 때 투명도 변경 */
  }
`;

export const ModalTitle = styled.h2`
  padding-top: 20px;
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center; /* 제목 중앙 정렬 */
`;

export const ReviewItem = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  color: #000; /* 기본 텍스트 색상 */
`;

export const ModalFooter = styled.div`
  text-align: center;
`;

export const NextButton = styled.button`
  background-color: rgba(0, 0, 0, 0.73); /* 버튼의 배경 색상 변경 */
  color: white; /* 텍스트 색상 */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%; /* 버튼 너비를 부모 컨테이너에 맞춤 */
  transition: background 0.3s;

  &:hover {
    background-color: #FF3434; /* 호버 시 배경 색상 변경 */
  }
`;
