import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  width: 700px;  /* 모달의 너비를 늘림 */
  height: auto;  /* 높이를 자동으로 조정하여 내용에 맞게 조정 */
  max-width: 90%; /* 최대 너비를 90%로 설정하여 작은 화면에서도 적절하게 보이게 함 */
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative; /* CloseButton을 절대 위치로 설정하기 위해 필요 */
`;

export const ModalTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const CloseButton = styled.button`
  position: absolute; /* 절대 위치로 설정 */
  top: 10px; /* 위쪽 여백 */
  left: 10px; /* 왼쪽 여백 */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0; /* 여백 제거 */

  &:hover {
    opacity: 0.7; /* 마우스를 올렸을 때 투명도 변경 */
  }
`;

export const ModalDescription = styled.p`
  margin: 10px 0 20px;
  color: #666;
`;

export const Button = styled.button`
  background: ${({ primary }) => '#f0f0f0'};
  color: ${({ primary }) => '#333'};
  border: none;
  width: 600px;
  height: 148px;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  font-size: 25px;
  transition: background 0.3s;

  p {
    font-size: 15px; /* p 태그의 글씨 크기를 15px로 설정 */
    margin: 5px 0 0; /* 추가: p 태그의 여백 조정 */
  }

  &:hover {
    background: #FF3434;; /* 마우스를 올렸을 때 주황색으로 변경 */
    color: white; /* 텍스트 색상도 흰색으로 변경 */
  }
`;
