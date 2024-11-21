import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 836px;
  text-align: center;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
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

export const MapContainer = styled.div`
  width: 80%; /*지도 너비*/
  height: 100%;
  position: relative; 
`;

export const Profile = styled.div`
  margin-top: 47px;
  width: 76.166px;
  height: 76.166px;
  flex-shrink: 0;
  border-radius: 50%; /* 둥근 모서리를 50%로 설정해 원 모양 생성 */
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;

  #Profile{
    margin-top: 1000px;
  }
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
  padding-top: 967px;
  padding-bottom: 184px;
`

// 콘텐츠 영역
export const ContentArea = styled.div`
  width: 100%;
  height: 200vh;
  padding-top: 52px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;  /* 수평 중앙 정렬 */
  align-items: center;
`;

// 상단 검색창
export const SearchBar = styled.div`
  width: 650px;
  height: 60px;
  border-radius: 30px; /* 둥근 모서리 */
  background: #FFF;
  display: flex;
  align-items: center;
  background: #FFF;
  box-shadow: 0px 4px 4px 2px rgba(143, 143, 143, 0.20);
  position: fixed;
  top: 20px;
  transform: translateX()(-50%);
  z-index: 1000;

  input {
    color: #CACACA;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
    width: 100%;
    height: 100%;
    color: #333; /* 어두운 텍스트 색상 */
    font-family: NanumGothic, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
    border: none;
    outline: none;
    background-color: transparent; /* 배경 투명 */
    padding-left: 15px;
    color: #333;
  }
  
    input::placeholder {
    color: #AAA; /* 회색 placeholder 색상 */
  }

  button{
    border: none; /* 테두리 제거 */
    border-radius: 30px; /* 둥근 모서리 */
    background: #FFF;
    font-size: 10px; /* 글자 크기 */
    cursor: pointer; /* 마우스 커서 포인터 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자 */
    transition: all 0.3s ease; /* 호버 시 부드러운 전환 효과 */
  }
`;


// 지도 영역
export const MapArea = styled.div`
  flex: 1;
  width: 100%;
  height: 200vh;
  flex-shrink: 0;
  position: relative;
`;

// 하단 정보 섹션
export const InfoSection = styled.div`
  width: 672px;
  height: 392px;
  flex-shrink: 0;
  font-size: 14px;
  background-color: #fff;
  border-top: 1px solid #dee2e6;
  fill: #FFF;
filter: drop-shadow(0px 4px 17px rgba(37, 37, 37, 0.20));


  h3 {
    margin: 0;
  }

  p {
    margin: 5px 0;
  }

  div {
    display: flex;
    gap: 10px;

    button {
      flex: 1;
      padding: 10px;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:first-child {
        background-color: #007bff;
      }

      &:last-child {
        background-color: #28a745;
      }
    }
  }
`;
