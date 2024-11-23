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
  height: 865px;
  flex-shrink: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: center;
`;

export const Close = styled.div`
  width: 59px;
  height: 59px;
  flex-shrink: 0;
`;

export const Container = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  #title {
    color: #272727;
    font-family: NanumGothic;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.225px;
  }
`;

export const Select = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

export const R1 = styled.div`
  width: 600px;
  height: 154px;
  flex-shrink: 0;
  fill: #fafafa;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  gap: 40px;
  //   justify-content: center;
  align-items: center;
`;

export const S1 = styled.div`
  margin-left: 40px;
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  background: #d9d9d9;
  border-radius: 50%;
`;

export const C1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  #title {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }

  #content {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.63px;
  }
`;

export const R2 = styled.div`
  width: 600px;
  height: 154px;
  flex-shrink: 0;
  fill: #fafafa;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  gap: 40px;
  //   justify-content: center;
  align-items: center;
`;

export const S2 = styled.div`
  margin-left: 40px;
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  background: #d9d9d9;
  border-radius: 50%;
`;

export const C2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  #title {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }

  #content {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.63px;
  }
`;

export const R3 = styled.div`
  width: 600px;
  height: 154px;
  flex-shrink: 0;
  fill: #fafafa;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  gap: 40px;
  //   justify-content: center;
  align-items: center;
`;

export const S3 = styled.div`
  margin-left: 40px;
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  background: #d9d9d9;
  border-radius: 50%;
`;

export const C3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  #title {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }

  #content {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.63px;
  }
`;

export const Get = styled.div`
  margin-top: 45px;
  width: 600px;
  height: 67px;
  flex-shrink: 0;
  background: #ff3434;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: #fff;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }
`;
