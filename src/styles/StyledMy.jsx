import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 836px;
  text-align: center;
  position: relative;
  margin: 0 auto;
  height: 1483px;
`;

export const Nav = styled.div`
  display: flex;
  width: 113px;
  min-height: 100vh;
  background: #fff;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  align-items: center;
  position: relative; /* 자식 요소를 기준으로 위치 지정 가능 */
`;

export const Profile = styled.div`
  margin-top: 47px;
  width: 76.166px;
  height: 76.166px;
  flex-shrink: 0;
  border-radius: 50%; /* 둥근 모서리를 50%로 설정해 원 모양 생성 */
  background: gray;
`;

export const Home = styled.div`
  width: 44.865px;
  flex-shrink: 0;

  #homename {
    color: #b7b7b7;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.525px;
  }
`;

export const Search = styled.div`
  flex-shrink: 0;

  #search {
    width: 51px;
  }

  #searchname {
    color: #b7b7b7;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.525px;
  }
`;

export const Review = styled.div`
  flex-shrink: 0;

  #review {
    width: 42px;
  }

  #reviewname {
    color: #b7b7b7;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.525px;
  }
`;

export const Recom = styled.div`
  flex-shrink: 0;

  #recom {
    width: 34px;
  }

  #recomname {
    color: #b7b7b7;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.525px;
  }
`;

export const Fav = styled.div`
  flex-shrink: 0;

  #fav {
    width: 39px;
  }

  #favname {
    color: #b7b7b7;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.525px;
  }
`;

export const My = styled.div`
  flex-shrink: 0;

  #my {
    width: 46.437px;
  }

  #myname {
    color: #ff3434;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.525px;
  }
`;

export const Set = styled.div`
  position: absolute; /* 부모 컨테이너(Nav)를 기준으로 위치 조정 */
  bottom: 67px; /* 바닥에서 67px 위로 이동 */
  left: 50%; /* 가로 중앙 정렬 */
  transform: translateX(-50%); /* 중앙 정렬 보정 */
  width: 46px;
  height: 46px;
  flex-shrink: 0;
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 720px;
  display: flex; /* 플렉스 박스 활성화 */
  flex-direction: column;
  background: #fff;
  //   text-align: center;
  min-height: 100vh;
`;

export const Title = styled.div`
  margin-top: 47px;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  //   justify-content: center;
  //   text-align: center;
  align-items: center;

  #back {
    width: 59px;
    height: 59px;
    flex-shrink: 0;
  }

  #name {
    color: #272727;
    font-family: NanumGothic;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.225px;
  }

  #setting {
    margin-left: auto;
    width: 35.796px;
    height: 36.8px;
    flex-shrink: 0;
    margin-right: 73.2px;
  }
`;

export const Infbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-top: 24px;
  // justify-content: center;
  align-items: center;
`;

export const Img = styled.div`
  width: 143px;
  height: 143px;
  flex-shrink: 0;
  background: #d9d9d9;
  border-radius: 50%; /* 둥근 모서리를 50%로 설정해 원 모양 생성 */

  img {
    width: 143px;
    height: 143px;
    flex-shrink: 0;
    border-radius: 50%; /* 둥근 모서리를 50%로 설정해 원 모양 생성 */
  }
`;

export const Name = styled.div`
  color: #797979;
  font-family: NanumGothic;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.4px;
`;

export const Inf = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;

export const Age = styled.div`
  width: 121.111px;
  height: 53.827px;
  flex-shrink: 0;
  border-radius: 138.271px;
  border: 0.702px solid #e1e1e1;
  display: flex;
  background: #f3f3f3;
  align-items: center;
  justify-content: center;

  div {
    color: #797979;
    text-align: center;
    font-family: NanumGothic;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.595px;
  }
`;

export const Live = styled.div`
  width: 121.111px;
  height: 53.827px;
  flex-shrink: 0;
  border-radius: 138.271px;
  border: 0.702px solid #e1e1e1;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    color: #797979;
    text-align: center;
    font-family: NanumGothic;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.595px;
  }
`;

export const Hr = styled.div`
  margin-top: 8px;
  width: 720px;
  height: 2px;
  background: #f3f3f3;
`;

export const Manage = styled.div`
  margin-top: 30px;
  width: 600px;
  height: 102px;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;
  align-items: center;

  div {
    margin-left: 60px;
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;

export const Edit = styled.div`
  width: 600px;
  height: 102px;
  flex-shrink: 0;
  background: #fff;
  //   stroke-width: 0.784px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;
  align-items: center;

  div {
    margin-left: 60px;
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;

export const Logout = styled.div`
  width: 600px;
  height: 102px;
  flex-shrink: 0;
  background: #fff;
  //   stroke-width: 0.784px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;
  align-items: center;

  div {
    margin-left: 60px;
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;

export const Delete = styled.div`
  width: 600px;
  height: 102px;
  flex-shrink: 0;
  background: #fff;
  //   stroke-width: 0.784px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;
  align-items: center;

  div {
    margin-left: 60px;
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;
