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
    color: #ff3434;
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

export const Searchname = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 49px;
  #recent {
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
  margin-top: 28px;
  background: #f3f3f3;
`;

export const Recentlist = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Recent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 109px;
  width: 100%;

  #icon {
    margin-left: 49px;
    width: 45px;
    height: 45px;
    flex-shrink: 0;
  }

  #information {
    color: #797979;
    font-family: NanumGothic;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.945px;
    margin-left: 32px;
  }

  #delete {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    margin-right: 80px;
    margin-left: auto;
  }
`;
