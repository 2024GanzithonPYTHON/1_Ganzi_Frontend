import React, { useState } from "react";
import * as R from "../styles/StyledRecomModal";
import ReviewModal from './ReviewModal'; // ReviewModal을 import합니다.

const ReviewSelectionModal = ({ onClose, onReviewSelect }) => {
  return (
    <R.Overlay onClick={onClose}>
      <R.ModalContainer onClick={(e) => e.stopPropagation()}>
        <R.CloseButton onClick={onClose}>
          <img
            id="close"
            src={`${process.env.PUBLIC_URL}/images/Close.svg`}
            alt="닫기"
            style={{ width: "24px", height: "24px" }}
          />
        </R.CloseButton>
        <R.ModalTitle>원하는 방식을 선택해 주세요</R.ModalTitle>

        <R.Button 
          primary 
          style={{ width: '600px', height: '67px', flexShrink: 0 }} 
          onClick={onReviewSelect} // 리뷰 불러오기 클릭 시 호출
        >
          내가 작성한 리뷰 불러오기
        </R.Button>

        <R.Button
          primary
          style={{ width: "600px", height: "67px", flexShrink: 0 }}
          onClick={() => alert("키워드로 검색하기!")}
        >
          키워드로 검색하기
        </R.Button>

        <R.Button
          primary
          style={{ width: "600px", height: "67px", flexShrink: 0 }}
          onClick={() => alert("지도에서 장소 클릭하기!")}
        >
          지도에서 장소 클릭하기
        </R.Button>

        <R.Button
          primary
          style={{ width: "600px", height: "67px", flexShrink: 0 }}
          onClick={() => alert("다음 단계로 넘어가기!")}
        >
          다음 단계로 넘어가기
        </R.Button>
      </R.ModalContainer>
    </R.Overlay>
  );
};

const CategoryInputModal = ({ onClose }) => {
  return (
    <R.Overlay onClick={onClose}>
      <R.ModalContainer onClick={(e) => e.stopPropagation()}>
        <R.CloseButton onClick={onClose}>
          <img
            id="close"
            src={`${process.env.PUBLIC_URL}/images/Close.svg`}
            alt="닫기"
            style={{ width: "24px", height: "24px" }}
          />
        </R.CloseButton>
        <R.ModalTitle>카테고리와 지역을 입력해 주세요</R.ModalTitle>

        <select
          style={{
            width: "600px",
            height: "67px",
            flexShrink: 0,
            marginBottom: "10px",
            backgroundColor: "#FAFAFA",
            border: "1px solid #E6E6E6",
          }}
        >
          <option value="" disabled defaultValue>
            메인 카테고리 선택
          </option>
          <option value="category1">카테고리 1</option>
          <option value="category2">카테고리 2</option>
        </select>

        <select
          style={{
            width: "600px",
            height: "67px",
            flexShrink: 0,
            marginBottom: "10px",
            backgroundColor: "#FAFAFA",
            border: "1px solid #E6E6E6",
          }}
        >
          <option value="" disabled defaultValue>
            세부 카테고리 선택
          </option>
          <option value="subcategory1">세부 카테고리 1</option>
          <option value="subcategory2">세부 카테고리 2</option>
        </select>

        <select
          style={{
            width: "600px",
            height: "67px",
            flexShrink: 0,
            marginBottom: "10px",
            backgroundColor: "#FAFAFA",
            border: "1px solid #E6E6E6",
          }}
        >
          <option value="" disabled defaultValue>
            지역 선택
          </option>
          <option value="region1">지역 1</option>
          <option value="region2">지역 2</option>
        </select>

        <R.Button
          primary
          style={{ width: "600px", height: "67px", flexShrink: 0 }}
          onClick={() => alert("추천 받기!")}
        >
          추천 받을래요
        </R.Button>
      </R.ModalContainer>
    </R.Overlay>
  );
};

const RecomModal = ({ onClose }) => {
  const [showCategoryInput, setShowCategoryInput] = useState(false);
  const [showReviewSelection, setShowReviewSelection] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false); // ReviewModal을 보여줄 상태 추가

  const handleRecommendationClick = () => {
    setShowCategoryInput(true);
  };

  const handleReviewSelectionClick = () => {
    setShowReviewSelection(true);
  };

  const handleReviewSelect = () => {
    setShowReviewSelection(false); // 리뷰 선택 모달 닫기
    setShowReviewModal(true); // ReviewModal 열기
  };

  return (
    <>
      {showReviewModal ? (
        <ReviewModal 
          reviews={[
            { name: '이디야커피', category: '카페', address: '경기 성남시 중원구 산성대로 460', phone: '031-749-9366', message: '4건의 리뷰를 작성했어요', highlighted: true },
            // 추가 리뷰 데이터...
          ]}
          onClose={() => setShowReviewModal(false)} 
          onNext={() => alert('다음 단계로 넘어가기!')} // 다음 단계로 넘어가는 로직
        />
      ) : showReviewSelection ? (
        <ReviewSelectionModal onClose={() => setShowReviewSelection(false)} onReviewSelect={handleReviewSelect} />
      ) : showCategoryInput ? (
        <CategoryInputModal onClose={() => setShowCategoryInput(false)} />
      ) : (
        <R.Overlay onClick={onClose}>
          <R.ModalContainer onClick={(e) => e.stopPropagation()}>
            <R.CloseButton onClick={onClose}>
              <img
                id="close"
                src={`${process.env.PUBLIC_URL}/images/Close.svg`}
                alt="닫기"
                style={{ width: "24px", height: "24px" }}
              />
            </R.CloseButton>
            <R.ModalTitle>장소를</R.ModalTitle>
            <R.Button primary onClick={handleRecommendationClick}>
              추천 받을래요
              <p>유저들이 추천하는 장소를 알려드릴게요!</p>
            </R.Button>
            <R.Button onClick={handleReviewSelectionClick}>
              추천 할래요
              <p>내가 만족했던 장소를 사람들에게 공유할래요!</p>
            </R.Button>
          </R.ModalContainer>
        </R.Overlay>
      )}
    </>
  );
};

export default RecomModal;
