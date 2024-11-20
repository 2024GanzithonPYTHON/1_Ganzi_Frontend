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
    color: #ff3434;
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
    color: #b7b7b7;
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
  text-align: center;
  min-height: 100vh;
`;

export const Logo = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 59px;
  #logo {
    width: 172.471px;
    height: 79px;
    flex-shrink: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-top: 92px;
`;

export const Back = styled.div`
  width: 59px;
  height: 59px;
  flex-shrink: 0;
`;

export const Login = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  #title {
    color: #272727;
    // margin-top: 10px;
    font-family: NanumGothic;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.225px;
  }
`;

export const Infbox = styled.div`
  margin-top: 45px;
  margin-left: 88px;
  width: 544px;
  height: 663px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #e6e6e6;
  background: #fff;
`;

export const Id = styled.div`
  margin-top: 68px;
  margin-left: 39px;
  #name1 {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
    text-align: left; /* 왼쪽 정렬 설정 */
  }
`;

export const Putid = styled.div`
  margin-top: 15px;
  margin-left: 39px;
  width: 466px;
  height: 67px;
  flex-shrink: 0;
  fill: #fafafa;
  stroke-width: 1px;
  stroke: #e6e6e6;
  input {
    width: 100%; /* 부모 요소의 너비에 맞춤 */
    height: 100%; /* 부모 요소의 높이에 맞춤 */
    padding-left: 30px; /* 입력 필드의 왼쪽 여백 설정 */
    border: 1px solid #e6e6e6; /* 테두리 색상 */
    border-radius: 5px; /* 모서리 둥글게 */
    font-family: NanumGothic; /* 폰트 설정 */
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.7px;
    color: #272727; /* 입력 텍스트 색상 */
    background-color: #fafafa; /* 배경 색상 */
    outline: none; /* 포커스 시 테두리 제거 */

    &::placeholder {
      left: 30px;
      color: #d2d2d2; /* placeholder 색상 */
      font-family: NanumGothic;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.7px;
    }
`;

export const Pw = styled.div`
  margin-top: 29px;
  margin-left: 39px;
  #name2 {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
    text-align: left; /* 왼쪽 정렬 설정 */
  }
`;

export const Putpw = styled.div`
  margin-top: 15px;
  margin-left: 39px;
  width: 466px;
  height: 67px;
  flex-shrink: 0;
  fill: #fafafa;
  stroke-width: 1px;
  stroke: #e6e6e6;
  input {
    width: 100%; /* 부모 요소의 너비에 맞춤 */
    height: 100%; /* 부모 요소의 높이에 맞춤 */
    padding-left: 30px; /* 입력 필드의 왼쪽 여백 설정 */
    border: 1px solid #e6e6e6; /* 테두리 색상 */
    border-radius: 5px; /* 모서리 둥글게 */
    font-family: NanumGothic; /* 폰트 설정 */
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.7px;
    color: #272727; /* 입력 텍스트 색상 */
    background-color: #fafafa; /* 배경 색상 */
    outline: none; /* 포커스 시 테두리 제거 */

    &::placeholder {
      left: 30px;
      color: #d2d2d2; /* placeholder 색상 */
      font-family: NanumGothic;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.7px;
    }
`;

export const Hr = styled.div`
  width: 466px;
  height: 2px;
  background: #e6e6e6;
  margin-top: 51px;
  margin-left: 39px;
`;

export const Signin = styled.div`
  margin-top: 51px;
  width: 466px;
  height: 67px;
  flex-shrink: 0;
  background: #ff3434;
  border-radius: 10px;
  display: flex;
  margin-left: 39px;
  align-items: center;
  justify-content: center;
  text-align: center;
  #login {
    background: transparent;
    border: transparent;
    color: #fff;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }
`;

export const Signup = styled.div`
  width: 466px;
  margin-top: 15px;
  height: 67px;
  flex-shrink: 0;
  background: #f0f0f0;
  stroke-width: 1px;
  stroke: #e6e6e6;
  margin-left: 39px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  #signup {
    color: #797979;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }
`;

export const Find = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 22px;
`;

export const Idfind = styled.div`
  color: #d2d2d2;
  font-family: NanumGothic;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.49px;
`;

export const Pwfind = styled.div`
  color: #d2d2d2;
  font-family: NanumGothic;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.49px;
`;
