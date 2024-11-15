import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSignup";

const Signup = () => {
  const [preview, setPreview] = useState(null); // 업로드한 이미지 URL 상태
  const fileInputRef = useRef(null);

  // input 클릭 트리거
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 숨겨진 input 태그 클릭
    }
  };

  // 파일 선택 처리
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file); // 미리보기 URL 생성
      setPreview(previewUrl); // 상태에 저장
    }
  };

  return (
    <S.Container>
      <S.Title>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/images/Back.svg`}
          alt="뒤로가기"
        />
        <div id="name">회원가입</div>
      </S.Title>
      <S.Infbox>
        <S.Basic>
          <div id="infor">기본정보</div>
          <div id="essential">*</div>
        </S.Basic>
        <S.Id>
          <S.Putid>
            <input type="text" placeholder="아이디를 입력하세요" />
          </S.Putid>
          <S.Idcheck>
            <div id="check">중복확인</div>
          </S.Idcheck>
        </S.Id>
        <S.Pw>
          <input type="password" placeholder="비밀번호를 입력하세요" />
        </S.Pw>
        <S.Pwagain>
          <input type="password" placeholder="비밀번호를 한 번 더 입력하세요" />
        </S.Pwagain>
        <S.Nickname>
          <S.Putnick>
            <input type="text" placeholder="닉네임을 입력하세요" />
          </S.Putnick>
          <S.Nickcheck>
            <div id="check">중복확인</div>
          </S.Nickcheck>
        </S.Nickname>
        <S.And>
          <S.Age>
            <S.Agetitle>
              <div id="age">연령대</div>
              <div id="essential">*</div>
            </S.Agetitle>
            <S.Agebox></S.Agebox>
          </S.Age>
          <S.Live>
            <S.Livetitle>
              <div id="loc">사는 지역</div>
            </S.Livetitle>
            <S.Livebox></S.Livebox>
          </S.Live>
        </S.And>
        <S.Agree>
          <div id="detail">위치 서비스 제공에 동의합니다</div>
        </S.Agree>
        <S.Profile>
          <div id="title">프로필 사진</div>
        </S.Profile>
        <S.Image onClick={handleClick}>
          {preview ? (
            // 업로드한 이미지가 있을 경우 미리보기 표시
            <img id="uploadedImage" src={preview} alt="Uploaded Preview" />
          ) : (
            // 업로드 전 기본 카메라 아이콘 표시
            <img
              id="camera"
              src={`${process.env.PUBLIC_URL}/images/Camera.svg`}
              alt="카메라"
            />
          )}
          <div id="detail">사진 업로드</div>
          {/* 숨겨진 input 태그 */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*" // 이미지 파일만 허용
            onChange={handleFileChange}
          />
        </S.Image>
        <S.Go>
          <div id="signup">회원가입 하기</div>
        </S.Go>
      </S.Infbox>
    </S.Container>
  );
};

export default Signup;
