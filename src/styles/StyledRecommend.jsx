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
    color: #ff3434;
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
`;

export const Det = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
`;

export const Searchbar = styled.div`
  margin-top: 40px;
  width: 650px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 197px;
  background: #fafafa;
  display: flex;
  flex=direction: row;
  justify-content: space-between; /* 양 끝 정렬 */
  align-items: center;

  #search {
    flex: 1; /* 입력 박스가 가로로 최대 공간 차지 */
    border: none; /* 테두리 제거 */
    background: none; /* 배경 제거 */
    outline: none; /* 포커스 시 외곽선 제거 */
    // color: #cacaca;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.805px;
    margin-left: 48px;

    /* placeholder 스타일 */
    &::placeholder {
      color: #cacaca;
    }
  }

  #cancel {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    margin-right: 20px;
  }

  #go {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    margin-right: 45px;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;

  div {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;

export const Hr = styled.div`
  width: 720px;
  height: 2px;
  background: #f3f3f3;
  margin-top: 28px;
`;

export const Detca = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const Region = styled.div`
  width: 129px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 197px;
  border: 1px solid #e6e6e6;
  background: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;

  div {
    color: #797979;
    text-align: center;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }

  img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const Div = styled.div`
  width: 129px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 197px;
  border: 1px solid #e6e6e6;
  background: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;

  div {
    color: #797979;
    text-align: center;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }

  img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const Age = styled.div`
  width: 151px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 197px;
  border: 1px solid #e6e6e6;
  background: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;

  div {
    color: #797979;
    text-align: center;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }

  img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const Op = styled.div`
  width: 178px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 197px;
  border: 1px solid #e6e6e6;
  background: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;

  div {
    color: #797979;
    text-align: center;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }

  img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const List = styled.div`
  margin-top: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

export const Let = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  #category {
    margin-left: 52px;
    color: #797979;
    font-family: NanumGothic;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.225px;
  }

  #figure {
    color: #d9d9d9;
    font-family: NanumGothic;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.7px;
    margin-left: 15px;

    align-self: center; /* 특정 요소에 대해 alignment 재조정 */
    margin-top: auto; /* 필요 시 추가적인 여백 조정 */
  }

  #order {
    color: #797979;
    font-family: NanumGothic;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.7px;
    margin-left: auto;
  }

  img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    margin-right: 60px;
  }
`;

export const Comp = styled.div`
  width: 617px;
  height: 261px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  justify-content: left;
  align-items: left;
`;

export const Place = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.5px;
  align-items: baseline;

  #name {
    color: #272727;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }

  #category {
    color: #bfbfbf;
    font-family: NanumGothic;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.49px;
  }
`;

export const Loc = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  img {
    width: 23.585px;
    height: 23.585px;
    flex-shrink: 0;
  }

  div {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.56px;
  }
`;

export const Tel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  img {
    width: 23.585px;
    height: 23.585px;
    flex-shrink: 0;
  }

  div {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.56px;
  }
`;

export const Check = styled.div`
  margin-top: 13px;
  width: 193.302px;
  height: 48.507px;
  flex-shrink: 0;
  background: #f8f8f8;
  border: 1px solid #e6e6e6;
  border-radius: 7.24px;
  align-items: center;
  justify-content: center;
  display: flex;

  div {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 16.652px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.583px;
  }
`;

export const Img = styled.div`
  width: 250px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;

  img {
    width: 250px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 10px;
  }
`;
