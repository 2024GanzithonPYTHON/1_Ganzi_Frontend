import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSignup";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [region, setRegion] = useState("");

  // 연령대 상태
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState(null);
  const ageGroups = [
    { label: "10대", value: 10 },
    { label: "20대", value: 20 },
    { label: "30대", value: 30 },
    { label: "40대", value: 40 },
    { label: "50대", value: 50 },
    { label: "60대 이상", value: 60 },
  ];

  // 사는 지역 상태
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationOptions, setLocationOptions] = useState([]);

  // 연령대 선택 핸들러
  const handleAgeSelect = (age) => {
    setSelectedAge(age.label);
    setIsAgeOpen(false);
    setAgeGroup(age.value);
  };

  const isFormComplete =
    username &&
    password &&
    passwordConfirm &&
    nickname &&
    ageGroup &&
    password === passwordConfirm;

  // 사는 지역 선택 핸들러 (Placeholder)
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setRegion(location);
    setIsLocationOpen(false);
  };

  // 백엔드 API 호출로 지역 데이터 가져오기
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("/province"); // 백엔드 엔드포인트 호출
        if (response.status === 200) {
          setLocationOptions(response.data.data); // 응답 데이터를 상태에 저장
        } else {
          console.error("API 호출 실패: 상태 코드", response.status);
        }
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    fetchLocations(); // 컴포넌트가 로드될 때 호출
  }, []);

  const [preview, setPreview] = useState(null); // 업로드한 이미지 URL 상태
  const fileInputRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

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

  // 프로필 이미지 업로드 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setProfilePicture(file); // 실제 파일 객체 저장
    }
  };

  // 회원가입 폼 제출 핸들러
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormComplete) {
      alert("모든 필드를 채워주세요.");
      return;
    }

    try {
      // FormData 생성
      const formData = new FormData();

      // 사진 추가 (파일)
      formData.append("profilePicture", profilePicture);

      // JSON 데이터 추가
      const jsonData = {
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
        nickname: nickname,
        ageGroup: ageGroup,
        region: region,
      };

      // JSON 데이터를 문자열로 직렬화하고, application/json 타입을 명시
      formData.append(
        "user",
        new Blob([JSON.stringify(jsonData)], { type: "application/json" })
      );

      // FormData 콘솔 출력
      // console.log("회원가입 요청 데이터:");
      // for (let pair of formData.entries()) {
      //   console.log(pair[0], pair[1]);
      // }

      // Axios 요청
      const response = await axios.post(
        "https://go-farming.shop/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("회원가입이 성공적으로 완료되었습니다!");
        navigate("/login");
      }
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert(error.response?.data?.message || "회원가입에 실패했습니다.");
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    validatePasswords(value, passwordConfirm); // password와 passwordConfirm을 비교
  };

  const handlePasswordConfirmChange = (e) => {
    const { value } = e.target;
    setPasswordConfirm(value);
    validatePasswords(password, value); // password와 passwordConfirm을 비교
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
        <S.Search>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search-none.svg`}
            alt="검색"
          />
          <div id="searchname">검색하기</div>
        </S.Search>
        {/* <S.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </S.Review> */}
        <S.Recom>
          <img
            id="recom"
            src={`${process.env.PUBLIC_URL}/images/Recom-none.svg`}
            alt="추천"
          />
          <div id="recomname">추천장소</div>
        </S.Recom>
        <S.Fav>
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
          <form onSubmit={handleSubmit}>
            <S.Basic>
              <div id="infor">기본정보</div>
              <div id="essential">*</div>
            </S.Basic>
            <S.Id>
              <S.Putid>
                <input
                  type="text"
                  name="username"
                  placeholder="아이디를 입력하세요"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </S.Putid>
              {/* <S.Idcheck>
                <div id="check">중복확인</div>
              </S.Idcheck> */}
            </S.Id>
            <S.Pw>
              <input
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </S.Pw>
            <S.Pwagain>
              <input
                type="password"
                name="passwordConfirm"
                placeholder="비밀번호를 한 번 더 입력하세요"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
                required
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
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  required
                />
              </S.Putnick>
              {/* <S.Nickcheck>
                <div id="check">중복확인</div>
              </S.Nickcheck> */}
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
                        isAgeOpen
                          ? "/images/Openbtn.svg"
                          : "/images/Downbtn.svg"
                      }
                      alt={isAgeOpen ? "닫기" : "열기"}
                    />
                  </S.DropdownHeader>
                  {isAgeOpen && (
                    <S.DropdownList>
                      {ageGroups.map((age) => (
                        <S.DropdownItem
                          key={age.value}
                          onClick={() => handleAgeSelect(age)}
                          className={
                            selectedAge === age.label ? "selected" : ""
                          }
                        >
                          <input
                            type="radio"
                            name="ageGroup"
                            checked={selectedAge === age.label}
                            readOnly
                          />
                          {age.label}
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
                    {selectedLocation
                      ? selectedLocation
                      : "지역을 선택해주세요"}
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
                            key={location.id}
                            onClick={() => handleLocationSelect(location.name)}
                            className={
                              selectedLocation === location.name
                                ? "selected"
                                : ""
                            }
                          >
                            <input
                              type="radio"
                              name="region"
                              checked={selectedLocation === location.name}
                              readOnly
                            />
                            {location.name}
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
                <img id="uploadedImage" src={preview} alt="Uploaded Preview" />
              ) : (
                <img
                  id="camera"
                  src={`${process.env.PUBLIC_URL}/images/Camera.svg`}
                  alt="카메라"
                />
              )}
              <div id="detail">사진 업로드</div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
            </S.Image>
            <S.Go
              style={{
                backgroundColor: isFormComplete ? "#FF3434" : "#D3D3D3",
              }}
            >
              <button type="submit" id="signup">
                회원가입 하기
              </button>
            </S.Go>
          </form>
        </S.Infbox>
      </S.Container>
    </S.Box>
  );
};

export default Signup;
