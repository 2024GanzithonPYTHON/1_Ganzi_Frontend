import { styled } from "styled-components";

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
