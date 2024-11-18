import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSignup";

const Signup = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const gosearch = () => {
    navigate("/search");
  };

  const gofav = () => {
    navigate("/favorite");
  };

  // 연령대 상태
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState(null);
  const ageGroups = ["10대", "20대", "30대", "40대", "50대", "60대 이상"];

  // 사는 지역 상태
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const locationOptions = []; // Placeholder for backend API response

  // 연령대 선택 핸들러
  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    setIsAgeOpen(false);
  };

  // 사는 지역 선택 핸들러 (Placeholder)
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
  };

  const [preview, setPreview] = useState(null); // 업로드한 이미지 URL 상태
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    // age: "",
    // location: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const isFormComplete =
    Object.entries(formData)
      .filter(([key]) => key !== "location") // location 필드 제외
      .every(([, value]) => value.trim() !== "") && // 모든 필드가 채워져 있어야 함
    formData.password === formData.confirmPassword; // Pw와 Pwagain의 값이 동일해야 함

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "password" || name === "confirmPassword") {
      validatePasswords(
        name === "password" ? value : formData.password,
        name === "confirmPassword" ? value : formData.confirmPassword
      );
    }
  };

  const validatePasswords = (pw, pwAgain) => {
    if (pwAgain && pw !== pwAgain) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else if (pwAgain && pw === pwAgain) {
      setErrorMessage("비밀번호가 일치합니다.");
    } else {
      setErrorMessage("");
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  return (
    <S.Box>
      <S.Nav>
        <S.Profile></S.Profile>
        <S.Home>
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/Home.svg`}
            alt="홈"
          />
          <div id="homename">메인홈</div>
        </S.Home>
        <S.Search onClick={gosearch}>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search-none.svg`}
            alt="검색"
          />
          <div id="searchname">검색하기</div>
        </S.Search>
        <S.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </S.Review>
        <S.Recom>
          <img
            id="recom"
            src={`${process.env.PUBLIC_URL}/images/Recom-none.svg`}
            alt="추천"
          />
          <div id="recomname">추천장소</div>
        </S.Recom>
        <S.Fav onClick={gofav}>
          <img
            id="fav"
            src={`${process.env.PUBLIC_URL}/images/Fav-none.svg`}
            alt="즐겨찾기"
          />
          <div id="favname">즐겨찾기</div>
        </S.Fav>
        <S.My>
          <img
            id="my"
            src={`${process.env.PUBLIC_URL}/images/My-none.svg`}
            alt="마이"
          />
          <div id="myname">마이페이지</div>
        </S.My>
        <S.Set>
          <img
            id="setting"
            src={`${process.env.PUBLIC_URL}/images/Setting-none.svg`}
            alt="설정"
          />
        </S.Set>
      </S.Nav>
      <S.Container>
        <S.Title>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Back.svg`}
            alt="뒤로가기"
            onClick={goback}
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
              <input
                type="text"
                name="id"
                placeholder="아이디를 입력하세요"
                value={formData.id}
                onChange={handleInputChange}
              />
            </S.Putid>
            <S.Idcheck>
              <div id="check">중복확인</div>
            </S.Idcheck>
          </S.Id>
          <S.Pw>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleInputChange}
            />
          </S.Pw>
          <S.Pwagain>
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호를 한 번 더 입력하세요"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <div id="error">
              {errorMessage && (
                <div style={{ color: "red" }}>{errorMessage}</div>
              )}
            </div>
          </S.Pwagain>
          <S.Nickname>
            <S.Putnick>
              <input
                type="text"
                name="nickname"
                placeholder="닉네임을 입력하세요"
                value={formData.nickname}
                onChange={handleInputChange}
              />
            </S.Putnick>
            <S.Nickcheck>
              <div id="check">중복확인</div>
            </S.Nickcheck>
          </S.Nickname>
          <S.And>
            {/* 연령대 드롭다운 */}
            <S.Age>
              <S.Agetitle>
                <div id="age">연령대</div>
                <div id="essential">*</div>
              </S.Agetitle>
              <S.DropdownContainer>
                <S.DropdownHeader onClick={() => setIsAgeOpen(!isAgeOpen)}>
                  {selectedAge ? selectedAge : "연령대를 선택해주세요"}
                  <img
                    src={
                      isAgeOpen ? "/images/Openbtn.svg" : "/images/Downbtn.svg"
                    }
                    alt={isAgeOpen ? "닫기" : "열기"}
                  />
                </S.DropdownHeader>
                {isAgeOpen && (
                  <S.DropdownList>
                    {ageGroups.map((age) => (
                      <S.DropdownItem
                        key={age}
                        onClick={() => handleAgeSelect(age)}
                        className={selectedAge === age ? "selected" : ""}
                      >
                        <input
                          type="radio"
                          name="ageGroup"
                          checked={selectedAge === age}
                          readOnly
                        />
                        {age}
                      </S.DropdownItem>
                    ))}
                  </S.DropdownList>
                )}
              </S.DropdownContainer>
            </S.Age>

            {/* 사는 지역 드롭다운 */}
            <S.Live>
              <S.Livetitle>
                <div id="loc">사는 지역</div>
              </S.Livetitle>
              <S.DropdownContainer>
                <S.DropdownHeader
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                >
                  {selectedLocation ? selectedLocation : "지역을 선택해주세요"}
                  <img
                    src={
                      isLocationOpen
                        ? "/images/Openbtn.svg"
                        : "/images/Downbtn.svg"
                    }
                    alt={isLocationOpen ? "닫기" : "열기"}
                  />
                </S.DropdownHeader>
                {isLocationOpen && (
                  <S.DropdownList>
                    {locationOptions.length > 0 ? (
                      locationOptions.map((location) => (
                        <S.DropdownItem
                          key={location}
                          onClick={() => handleLocationSelect(location)}
                          className={
                            selectedLocation === location ? "selected" : ""
                          }
                        >
                          <input
                            type="radio"
                            name="location"
                            checked={selectedLocation === location}
                            readOnly
                          />
                          {location}
                        </S.DropdownItem>
                      ))
                    ) : (
                      <div>지역 목록 로드 중...</div>
                    )}
                  </S.DropdownList>
                )}
              </S.DropdownContainer>
            </S.Live>
          </S.And>
          <S.Agree>
            <div id="detail">위치 서비스 제공에 동의합니다</div>
            <input type="checkbox" name="agree" id="agree" />
          </S.Agree>
          <S.Prof>
            <div id="title">프로필 사진</div>
          </S.Prof>
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
          <S.Go
            style={{ backgroundColor: isFormComplete ? "#FF3434" : "#D3D3D3" }}
          >
            <div id="signup">회원가입 하기</div>
          </S.Go>
        </S.Infbox>
      </S.Container>
    </S.Box>
  );
};

export default Signup;
