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
  width: 672px;
  height: auto; /* 자동 높이 조정 */
  max-height: 80%; /* 최대 높이 설정 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  gap: 30px; /* 태그 사이 간격 설정 */
  margin-bottom: 30px; /* 태그와 다음 요소 간격 설정 */
`;

export const Tag = styled.span`
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 14px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 30px 0; /* 위아래 간격을 30px로 설정 */
`;

export const Description = styled.p`
  margin: 30px 0 50px; /* 위쪽은 30px, 아래쪽은 50px으로 설정 */
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: transparent; /* 배경색을 투명으로 설정 */
  color: #A5A5A5; /* 글자 색깔 변경 */
  cursor: pointer;
  transition: color 0.3s; /* 색상 변화 부드럽게 전환 */

  &:hover {
    color: #FF3434; /* 호버 시 색상 변경 (필요시 조정 가능) */
  }
`;
