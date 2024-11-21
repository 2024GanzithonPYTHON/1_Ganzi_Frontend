import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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

export const Close = styled.div`
  width: 59px;
  height: 59px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  #name {
    color: #272727;
    font-family: NanumGothic;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.225px;
  }
`;

export const Input = styled.div`
  margin-top: 45px;
  gap: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FolName = styled.div`
  width: 600px;
  height: 67px;
  flex-shrink: 0;
  background: #fafafa;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  #title {
    width: 80%;
    color: black;
    font-family: NanumGothic;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.7px;
    border: transparent;
    background: transparent;
    margin-left: 30px;
    outline: none; /* 포커스 시 테두리 제거 */

    &::placeholder {
      color: #d2d2d2; /* placeholder 색상 */
      font-family: NanumGothic;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.7px;
    }
  }

  #number {
    color: #d2d2d2;
    text-align: right;
    font-family: NanumGothic;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.7px;
  }
`;

export const Folcolor = styled.div`
  width: 600px;
  height: 67px;
  flex-shrink: 0;
  background: #fafafa;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  align-items: center;

  #select {
    margin-left: 30px;
    color: #d2d2d2;
    font-family: NanumGothic;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.7px;
  }

  #eclipse {
    margin-right: 30px;
    margin-left: auto;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    background: #d9d9d9;
    border-radius: 50%;
  }
`;

export const Color = styled.div`
  display: flex;
  margin-top: 24px;
  flex-direction: row;
  justify-content: center;
  align-imems: center;
  gap: 38px;
  img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const Create = styled.div`
  margin-top: 28px;
  width: 600px;
  height: 67px;
  flex-shrink: 0;
  background: #b9b9b9;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;

  #create {
    color: #fff;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }
`;
