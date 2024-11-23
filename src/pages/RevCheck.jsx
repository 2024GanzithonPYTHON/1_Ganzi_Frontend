import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as R from "../styles/StyledRevCheck";
import axios from "axios";

const RevCheck = () => {
  const [profileImage, setProfileImage] = useState(""); // 프로필 이미지 상태 저장
  const location = useLocation();
  const place = location.state;
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const gofav = () => {
    navigate("/favorite");
  };

  const gomy = () => {
    navigate("/my");
  };

  const gosearch = () => {
    navigate("/search");
  };

  const gohome = () => {
    navigate("/main");
  };

  useEffect(() => {
    console.log("Received place data:", place); // place 데이터를 콘솔에 출력
  }, [place]);

  useEffect(() => {
    // 프로필 이미지 가져오는 함수
    const fetchProfileImage = async () => {
      try {
        const token = localStorage.getItem("authToken"); // 로컬스토리지에서 토큰 가져오기

        const response = await axios.get("/users/profile/profile-picture", {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
          },
        });

        setProfileImage(response.data); // API에서 받은 이미지 URL 설정
      } catch (error) {
        console.error("Failed to fetch profile image:", error);
      }
    };

    fetchProfileImage();
  }, []);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // API 호출하여 리뷰 데이터 가져오기
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem("authToken"); // 로컬스토리지에서 토큰 가져오기

        // /place/:placeId/review 엔드포인트 호출
        const response = await axios.get(`/place/${place.id}/review`, {
          headers: {
            Authorization: `Bearer ${token}`, // 헤더에 토큰 포함
          },
        });

        console.log("Fetched review data:", response.data.data); // 리뷰 데이터 출력
        setReviews(response.data.data); // 리뷰 데이터 저장
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    if (place && place.id) {
      fetchReviews();
    }
  }, [place]);
  useEffect(() => {
    console.log("Image URL:", place.imageUrl);
  }, [place]);

  return (
    <R.Box>
      <R.Nav>
        <R.Profile>
          {profileImage ? (
            <img
              src={profileImage}
              alt="프로필"
              style={{
                width: "76.166px",
                height: "76.166px",
                borderRadius: "50%",
              }}
            />
          ) : (
            ""
          )}
        </R.Profile>
        <R.Home onClick={gohome}>
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/Home-none.svg`}
            alt="홈"
          />
          <div id="homename">메인홈</div>
        </R.Home>
        <R.Search onClick={gosearch}>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search-none.svg`}
            alt="검색"
          />
          <div id="searchname">검색하기</div>
        </R.Search>
        {/* <R.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </R.Review> */}
        <R.Recom>
          <img
            id="recom"
            src={`${process.env.PUBLIC_URL}/images/Recom.svg`}
            alt="추천"
          />
          <div id="recomname">추천장소</div>
        </R.Recom>
        <R.Fav onClick={gofav}>
          <img
            id="fav"
            src={`${process.env.PUBLIC_URL}/images/Fav-none.svg`}
            alt="즐겨찾기"
          />
          <div id="favname">즐겨찾기</div>
        </R.Fav>
        <R.My onClick={gomy}>
          <img
            id="my"
            src={`${process.env.PUBLIC_URL}/images/My-none.svg`}
            alt="마이"
          />
          <div id="myname">마이페이지</div>
        </R.My>
      </R.Nav>
      <R.Container>
        <R.Title>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Back.svg`}
            alt="뒤로가기"
            onClick={goback}
          />
          <div id="name">리뷰 확인하기</div>
        </R.Title>
        <R.Main>
          <R.Img>
            {place.imageUrl ? ( // imageUrl 값이 있는 경우만 렌더링
              <img
                src="https://gofarming-bucket.s3.ap-northeast-2.amazonaws.com/reviews/2713254e-4bf9-4aa4-9501-52e693d82bb6-750_750_20220706022041_photo1_I4JBSguSyF1Q.jpg"
                alt={`${place.name} 이미지`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // 이미지를 컨테이너에 맞게 조정
                  borderRadius: "7.84px 7.84px 0 0",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#d9d9d9", // 이미지가 없을 때 대체 배경색
                  borderRadius: "7.84px 7.84px 0 0",
                }}
              >
                이미지 없음
              </div>
            )}
          </R.Img>
          <R.Detail>
            <R.Keyword>
              {place.keywords &&
                place.keywords.map((item, index) => {
                  // 객체의 첫 번째 키 추출
                  const [keyword] = Object.keys(item);
                  const count = item[keyword]; // 키에 해당하는 값 추출

                  console.log("keyword:", keyword, "count:", count); // 콘솔 출력
                  return <R.WordBox key={index}>{keyword}</R.WordBox>;
                })}
            </R.Keyword>
            <R.Inf>
              <R.Place>
                <R.Name>
                  <div id="name">{place.name}</div>
                  <div id="categoryid">{place.category}</div>
                </R.Name>
                <R.Loc>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Location.svg`}
                    alt="장소"
                  />
                  <div>{place.address}</div>
                </R.Loc>
                <R.Tel>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Telephone.svg`}
                    alt="전화번호"
                  />
                  <div>{place.contact}</div>
                </R.Tel>
              </R.Place>
              <R.Favorite
                style={{
                  backgroundColor: place.savedFolderColors?.[0] || "", // savedFolderColors 배열의 첫 번째 값 사용. 없으면 기본값 red
                }}
              ></R.Favorite>
            </R.Inf>
          </R.Detail>
        </R.Main>
        <R.Photo>
          <R.PhotoRev>
            <div id="title">사진 리뷰</div>
            <div id="figure">
              {reviews.filter((review) => review.photos.length > 0).length}개
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Plus.svg`}
              alt="자세히보기"
            />
          </R.PhotoRev>
          <R.PhotoList
            style={{
              display: "flex",
              overflowX: "auto",
              overflowY: "hidden", // 수직 스크롤 방지
              WebkitOverflowScrolling: "touch", // 부드러운 스크롤
              scrollSnapType: "x mandatory", // 가로 스냅 활성화
              gap: "10px",
              scrollbarWidth: "none", // 스크롤 바 숨김 (Firefox)
            }}
          >
            {reviews.map((review, index) =>
              review.photos && review.photos.length > 0
                ? review.photos.map((photo, photoIndex) =>
                    photo ? (
                      <R.Image
                        key={`${index}-${photoIndex}`}
                        style={{ scrollSnapAlign: "start" }} // 스냅 정렬
                      >
                        <img src={photo} alt={`사진 리뷰 ${photoIndex + 1}`} />
                      </R.Image>
                    ) : null
                  )
                : null
            )}
          </R.PhotoList>
        </R.Photo>
        <R.Line>
          <R.LineRev>
            <div id="title">한 줄 리뷰</div>
            <div id="figure">{reviews.length}개</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Plus.svg`}
              alt="자세히보기"
            />
          </R.LineRev>
          <R.ReviewList
            style={{
              display: "flex",
              overflowX: "auto",
              overflowY: "hidden", // 수직 스크롤 방지
              WebkitOverflowScrolling: "touch", // 부드러운 스크롤
              scrollSnapType: "x mandatory",
              gap: "10px",
              scrollbarWidth: "none", // 스크롤 바 숨김 (Firefox)
            }}
          >
            {reviews.map((review) => (
              <R.Reviews
                key={review.id}
                style={{ scrollSnapAlign: "start" }} // 스냅 정렬
              >
                <div id="nick">{review.nickname}</div>
                <div id="content">{review.content}</div>
              </R.Reviews>
            ))}
          </R.ReviewList>
        </R.Line>
      </R.Container>
    </R.Box>
  );
};

export default RevCheck;
