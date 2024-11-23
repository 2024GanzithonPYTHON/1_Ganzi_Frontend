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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  //   gap: 26px;
  justify-content: center;
  align-items: center;

  #figure {
    color: #ff3434;
    font-family: NanumGothic;
    font-size: 125px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -2.5px;
  }

  #small {
    color: #b9b9b9;
    text-align: center;
    font-family: NanumGothic;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 33px */
    letter-spacing: -0.77px;
  }
`;

export const Big = styled.div`
  margin-top: 26px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 26px;

  #big {
    color: #272727;
    font-family: NanumGothic;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.225px;
  }

  #figure2 {
    margin-left: 4px;
    color: #272727;
    font-family: NanumGothic;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.225px;
  }
`;

export const Reward = styled.div`
  margin-top: 225px;
  width: 600px;
  height: 67px;
  flex-shrink: 0;
  background: #b9b9b9;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

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

export const Home = styled.div`
  margin-top: 15px;
  width: 600px;
  height: 67px;
  flex-shrink: 0;
  background: #ff3434;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

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
