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
    color: #ff3434;
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
`;

export const Side = styled.div`
  margin-top: 42px;
  margin-left: 60px;
  width: 100%;
  display: flex;

  #type {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;

export const List = styled.div`
  margin-top: 42px;
  gap: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Folder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
  height: 124px;
  flex-shrink: 0;
  background: #fff;
  stroke-width: 1px;
  border: 1px solid #e6e6e6; /* 테두리 색상 */
  border-radius: 10px;

  #img {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 50%;
    margin-left: 47px;
    background: #d9d9d9;
  }

  #folder {
    margin-left: 40px;
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }

  #edit {
    margin-left: auto;
    width: 42px;
    height: 43px;
    flex-shrink: 0;
  }

  #delete {
    margin-right: 47px;
    margin-left: 11px;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }
`;

export const Bottom = styled.div`
  position: fixed;
  bottom: 0; /* 화면의 바닥에 고정 */
  left: 52.5%; /* 가운데 정렬 */
  transform: translateX(-50%); /* 가운데 정렬 보정 */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10; /* 다른 요소 위에 표시되도록 z-index 설정 */
  gap: 25px;
  justify-content: center;
`;

export const Hr = styled.div`
  width: 600.003px;
  height: 2px;
  background: #f3f3f3;
  margin-top: auto;
`;

export const New = styled.div`
  width: 600px;
  height: 124px;
  flex-shrink: 0;
  background: #fff;
  border-width: 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e6e6e6; /* 테두리 색상 */

  #newfolder {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    margin-left: 47px;
  }

  #new {
    margin-left: 40px;
    color: #d2d2d2;
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
  height: 67px;
  flex-shrink: 0;
  background: #b9b9b9;
  margin-bottom: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;

  #detail {
    color: #fff;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.805px;
  }
`;
