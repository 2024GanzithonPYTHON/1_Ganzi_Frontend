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

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 425px;
`;

export const Img = styled.div`
  height: 204px;
  border-radius: 7.84px 7.84px 0 0;
  background: #d9d9d9;
  width: 600px;
`;

export const Detail = styled.div`
width: 600px;
height: 220px;
display: flex
flex-direction: column;
background: #fff;
border: 1px solid #e6e6e6;
border-radius: 0 0 7.84px 7.84px;
gap: 20px;
justify-content: center;
align-items: center;
`;

export const Keyword = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const WordBox = styled.div`
  width: 167.65px;
  height: 39.055px;
  flex-shrink: 0;
  border-radius: 9.63px;
  border: 1px solid #e6e6e6;
  background: #f8f8f8;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Inf = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 48px;
`;

export const Place = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  #name {
    color: #272727;
    font-family: NanumGothic;
    font-size: 27.448px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.961px;
  }

  #categoryid {
    color: #bfbfbf;
    font-family: NanumGothic;
    font-size: 15.685px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.549px;

    align-self: center; /* 특정 요소에 대해 alignment 재조정 */
    margin-top: auto; /* 필요 시 추가적인 여백 조정 */
  }
`;

export const Loc = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;

  img {
    width: 25.879px;
    height: 25.879px;
    flex-shrink: 0;
  }

  div {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 17.253px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.604px;
  }
`;

export const Tel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;

  img {
    width: 25.879px;
    height: 25.879px;
    flex-shrink: 0;
  }

  div {
    color: #a5a5a5;
    font-family: NanumGothic;
    font-size: 17.253px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.604px;
  }
`;

export const Favorite = styled.div`
  margin-left: auto;
  width: 31.369px;
  height: 31.369px;
  flex-shrink: 0;
  border-radius: 50%;
  background: red;
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 82px;
  width: 100%;
`;

export const PhotoRev = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 60px;
  gap: 10px;

  #title {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }

  #figure {
    color: #d9d9d9;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.525px;

    align-self: center; /* 특정 요소에 대해 alignment 재조정 */
    margin-top: auto; /* 필요 시 추가적인 여백 조정 */
  }

  img {
    margin-left: auto;
    margin-right: 60px;
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const PhotoList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-left: 60px;

  /* 수평 스크롤 활성화 */
  overflow-x: auto;
  overflow-y: hidden; /* 수직 스크롤 방지 */
  -webkit-overflow-scrolling: touch; /* 부드러운 스크롤 */
  scroll-snap-type: x mandatory; /* 스냅 스크롤 적용 */

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox용 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari용 */
  }
`;

export const Image = styled.div`
  width: 250px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 10px;

  /* 스냅 정렬 */
  scroll-snap-align: start; /* 스크롤 시 시작 지점에 맞춤 */

  img {
    width: 250px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 10px;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 82px;
  gap: 25px;
  width: 100%;
`;

export const LineRev = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-left: 60px;

  #title {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }

  #figure {
    color: #d9d9d9;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.525px;

    align-self: center; /* 특정 요소에 대해 alignment 재조정 */
    margin-top: auto; /* 필요 시 추가적인 여백 조정 */
  }

  img {
    margin-right: 60px;
    margin-left: auto;
    width: 35px;
    height: 35px;
    flex-shrink: 0;
  }
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-left: 60px;

  /* 수평 스크롤 활성화 */
  overflow-x: auto;
  overflow-y: hidden; /* 수직 스크롤 방지 */
  -webkit-overflow-scrolling: touch; /* 부드러운 스크롤 */
  scroll-snap-type: x mandatory; /* 스냅 스크롤 적용 */

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox용 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari용 */
  }
`;

export const Reviews = styled.div`
  width: 364px;
  height: 125px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  background: #fff;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* 스냅 정렬 */
  scroll-snap-align: start; /* 스크롤 시 시작 지점에 맞춤 */

  div {
    margin-left: 32px;
  }

  #nick {
    color: #797979;
    font-family: NanumGothic;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.56px;
  }

  #content {
    color: #d9d9d9;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 149.965%; /* 22.495px */
    letter-spacing: -0.525px;
  }
`;
