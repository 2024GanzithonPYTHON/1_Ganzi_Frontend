import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0; /* 화면 바닥에 붙도록 설정 */
  left: 50%;
  transform: translateX(-50%); /* 가로 정중앙 정렬 */
  background: white;
  padding: 20px;
  border-radius: 8px 8px 0 0; /* 위쪽 모서리만 둥글게 */
  width: 672px;
  height: 554px;
  flex-shrink: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: center;
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

export const Button = styled.button`
  background: ${({ primary }) => '#f0f0f0'};
  color: ${({ primary }) => '#333'};
  border: none;
  width: 100%;
  height: 67px;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  margin: 10px 0;
  font-size: 25px;
  transition: background 0.3s;

  &:hover {
    background: #FF3434; /* 마우스를 올렸을 때 주황색으로 변경 */
    color: white; /* 텍스트 색상도 흰색으로 변경 */
  }
`;
