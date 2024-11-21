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

export const Infbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 60px;
  gap: 25px;
`;

export const Basic = styled.div`
  display: flex;
  flex-direction: row;
  #infor {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
  #essential {
    margin-left: 3px;
    color: #ba0000;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;

export const Id = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
`;

export const Putid = styled.div`
  width: 402px;
  height: 67px;
  flex-shrink: 0;
  fill: #fafafa;
  stroke-width: 1px;
  stroke: #e6e6e6;
  border-radius: 10px;
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

export const Idcheck = styled.div`
  width: 175px;
  height: 67px;
  flex-shrink: 0;
  background: #ff3434;
  border-radius: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  #check {
    color: #fff;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }
`;

export const Pw = styled.div`
  width: 600px;
  height: 67px;
  flex-shrink: 0;
  fill: #fafafa;
  stroke-width: 1px;
  stroke: #e6e6e6;
  border-radius: 10px;
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
  }

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

export const Pwagain = styled.div`
  width: 600px;
  height: 67px;
  flex-shrink: 0;
  background: #fafafa;
  stroke: #e6e6e6;
  border: 1px solid #e6e6e6; /* 테두리 색상 */
  border-radius: 10px; /* 모서리 둥글게 */
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* input과 #error를 양 끝으로 배치 */
  align-items: center;

  #error {
    font-family: NanumGothic;
    font-size: 18px;
    margin-right: 18px;
  }

  input {
    width: 340px;
    height: 100%; /* 부모 요소의 높이에 맞춤 */
    padding-left: 30px; /* 입력 필드의 왼쪽 여백 설정 */
    font-family: NanumGothic; /* 폰트 설정 */
    font-size: 20px;
    border: transparent;
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
  }
`;

export const Nickname = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
`;

export const Putnick = styled.div`
  width: 402px;
  height: 67px;
  flex-shrink: 0;
  fill: #fafafa;
  stroke-width: 1px;
  stroke: #e6e6e6;
  border-radius: 10px;
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
  }

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

export const Nickcheck = styled.div`
  width: 175px;
  height: 67px;
  flex-shrink: 0;
  background: #b9b9b9;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  #check {
    color: #fff;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }
`;

export const And = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 46px;
`;

export const Age = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Agetitle = styled.div`
  display: flex;
  flex-direction: row;
  #age {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
  #essential {
    margin-left: 3px;
    color: #ba0000;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;

export const Agebox = styled.div`
  width: 277px;
  height: 67px;
  flex-shrink: 0;
  border: 1px solid #e6e6e6; /* 테두리 색상 */
  background: #fafafa;
  stroke-width: 1px;
  stroke: #e6e6e6;
  border-radius: 10px;
`;

export const Live = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Livetitle = styled.div`
  #loc {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;

export const Livebox = styled.div`
  width: 277px;
  height: 67px;
  flex-shrink: 0;
  background: #fafafa;
  border: 1px solid #e6e6e6; /* 테두리 색상 */
  stroke-width: 1px;
  stroke: #e6e6e6;
  border-radius: 10px;
`;

export const Agree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: -18px;
  gap: 4px;
  #detail {
    color: #d1d1d1;
    font-family: NanumGothic;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.525px;
    text-align: right;
  }

  #agree {
    margin-left: 5px;
    margin-right: 5px;
    appearance: none; /* 기본 체크박스 스타일 제거 */
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border: 2px solid #d1d1d1; /* 테두리 색상 */
    border-radius: 4px; /* 모서리 둥글게 */
    background-color: white; /* 기본 배경색 */
    cursor: pointer;

    &:focus {
      outline: none; /* 포커스 상태에서도 테두리 제거 */
    }

    &:checked {
      background-color: white; /* 배경을 투명하게 유지하거나 색상 설정 */
      border-color: #ff3434; /* 테두리 색상 변경 */
      background-image: url("/images/Check.svg"); /* 이미지 경로 설정 */
      background-size: cover; /* 이미지 크기 설정 */
      background-position: center; /* 이미지 중앙 정렬 */
    }

    // &:checked::after {
    //   content: "";
    //   display: block;
    //   width: 6px;
    //   height: 10px;
    //   border: solid white;
    //   border-width: 0 2px 2px 0;
    //   transform: rotate(45deg);
    //   margin: 2px auto; /* 중앙에 체크 표시 위치 조정 */
    //   margin-top: -1px;
    // }
  }
`;

export const Prof = styled.div`
  #title {
    color: #797979;
    font-family: NanumGothic;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
  }
`;

export const Image = styled.div`
  width: 600px;
  height: 194px;
  flex-shrink: 0;
  background: #fafafa;
  stroke-width: 1px;
  stroke: #e6e6e6;
  border-radius: 10px;
  border: 1px solid #e6e6e6; /* 테두리 색상 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #camera {
    width: 60.78px;
    height: 60.78px;
    flex-shrink: 0;
  }
  #uploadedImage {
    height: 192px;
    position: absolute; /* 부모 요소 기준으로 절대 위치 */
    object-fit: cover; /* 이미지 비율 유지하며 박스 채움 */
  }
  #detail {
    margin-top: 12px;
    color: #d2d2d2;
    font-family: NanumGothic;
    font-size: 16.28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.57px;
  }
`;

export const Go = styled.div`
  width: 600px;
  height: 67px;
  flex-shrink: 0;
  background: #b9b9b9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  #signup {
    color: #fff;
    font-family: NanumGothic;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.805px;
  }
`;
export const DropdownContainer = styled.div`
  position: relative;
  background: #fafafa;
  border-width: 1px;
  border: #e6e6e6;
  width: 277px;
  height: 67px;
  border-radius: 10px;
  flex-shrink: 0;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px; /* 내부 여백 조정 */
  width: 100%; /* 부모 컨테이너 너비에 맞춤 */
  height: 100%; /* 부모 컨테이너 높이에 맞춤 */
  background: #fafafa;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  cursor: pointer;
  color: #d2d2d2;
  font-family: NanumGothic;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.7px;

  &:hover {
    border-color: #ff3434;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  z-index: 100;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  /* 스크롤 제거 및 모든 항목 표시 */
  max-height: none; /* 제한 제거 */
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #333;

  &:hover {
    background: #f9f9f9;
  }

  input[type="radio"] {
    margin-right: 10px;
    appearance: none; /* 기본 라디오 버튼 제거 */
    border: 2px solid #ccc;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    outline: none;
    display: inline-block;
    position: relative;
    background-color: #fff;
    cursor: pointer;

    /* 선택되지 않았을 때 */
    &:hover {
      border-color: #ff3434;
    }

    /* 선택된 상태 */
    &:checked {
      border: 2px solid #ff3434; /* 테두리를 빨간색으로 */
      background-color: #ff3434; /* 안쪽 빨간색 채우기 */
    }

    /* 선택된 상태의 내부 표시 */
    &:checked::before {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background: #fff; /* 안쪽 흰색 점 */
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.selected {
    background: #ffeded;
    color: #ff3434;
  }
`;
