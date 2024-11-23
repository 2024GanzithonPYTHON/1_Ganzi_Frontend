import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* 어두운 배경 */
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
  justify-content: center;
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
`;

export const TagContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
`

export const Tag = styled.span`
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  fill: #F8F8F8;
  stroke-width: 1px;
  stroke: #E6E6E6;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #FF3434;
  }
`;

export const Title = styled.h1`
    font-size: 24px;
    margin: 20px 0;
`;

export const Description = styled.p`
    margin: 10px 0 30px;
`;
