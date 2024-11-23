import styled from 'styled-components';

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
  bottom: 0; /* 화면 바닥에 붙도록 설정 */
  left: 50%;
  transform: translateX(-50%); /* 가로 정중앙 정렬 */
  background: white;
  padding: 20px;
  border-radius: 16px 16px 0 0; /* 위쪽 모서리 둥글게 */
  width: 672px; /* 너비 조정 */
  height: 554px; /* 자동 높이 조정 */
  max-height: 80%; /* 최대 높이 설정 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
`;

export const ModalTitle = styled.h2`
  padding-top: 20px;
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center; /* 제목 중앙 정렬 */
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
  width: 100%; /* 버튼 너비를 부모 컨테이너에 맞춤 */
  height: 148px; /* 버튼 높이 조정 */
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  margin: 20px 0; /* 버튼 간 간격 */
  font-size: 25px;
  transition: background 0.3s;

  &:hover {
    background: #FF3434; /* 마우스를 올렸을 때 주황색으로 변경 */
    color: white; /* 텍스트 색상도 흰색으로 변경 */
  }
`;

export const Dropbox = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  width: 100%; /* 부모 컨테이너의 너비에 맞춤 */
  margin-bottom: 20px; /* 아래쪽 여백 추가 */
`;


