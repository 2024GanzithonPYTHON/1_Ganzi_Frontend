import React, { useState } from "react";
import * as R from "../styles/StyledRecomModal";

const ReviewSelectionModal = ({ onClose }) => {
  return (
    <R.ModalOverlay onClick={onClose}>
      <R.ModalContainer onClick={(e) => e.stopPropagation()}>
        <R.CloseButton onClick={onClose}>
          <img
            id="close"
            src={`${process.env.PUBLIC_URL}/images/Close.svg`}
            alt="닫기"
            style={{ width: '24px', height: '24px' }}
          />
        </R.CloseButton>
        <R.ModalTitle>원하는 방식을 선택해 주세요</R.ModalTitle>
        
        <R.Button 
          primary 
          style={{ width: '600px', height: '67px', flexShrink: 0 }} 
          onClick={() => alert('내가 작성한 리뷰 불러오기!')}
        >
          내가 작성한 리뷰 불러오기
        </R.Button>
        
        <R.Button 
          primary 
          style={{ width: '600px', height: '67px', flexShrink: 0 }} 
          onClick={() => alert('키워드로 검색하기!')}
        >
          키워드로 검색하기
        </R.Button>
        
        <R.Button 
          primary 
          style={{ width: '600px', height: '67px', flexShrink: 0 }} 
          onClick={() => alert('지도에서 장소 클릭하기!')}
        >
          지도에서 장소 클릭하기
        </R.Button>
        
        <R.Button 
          primary 
          style={{ width: '600px', height: '67px', flexShrink: 0 }} 
          onClick={() => alert('다음 단계로 넘어가기!')}
        >
          다음 단계로 넘어가기
        </R.Button>
      </R.ModalContainer>
    </R.ModalOverlay>
  );
};

const CategoryInputModal = ({ onClose }) => {
  return (
    <R.ModalOverlay onClick={onClose}>
      <R.ModalContainer onClick={(e) => e.stopPropagation()}>
        <R.CloseButton onClick={onClose}>
          <img
            id="close"
            src={`${process.env.PUBLIC_URL}/images/Close.svg`}
            alt="닫기"
            style={{ width: '24px', height: '24px' }}
          />
        </R.CloseButton>
        <R.ModalTitle>카테고리와 지역을 입력해 주세요</R.ModalTitle>

        <select style={{ width: '600px', height: '67px', flexShrink: 0, marginBottom: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E6E6E6' }}>
          <option value="" disabled defaultValue>메인 카테고리 선택</option>
          <option value="category1">카테고리 1</option>
          <option value="category2">카테고리 2</option>
        </select>

        <select style={{ width: '600px', height: '67px', flexShrink: 0, marginBottom: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E6E6E6' }}>
          <option value="" disabled defaultValue>세부 카테고리 선택</option>
          <option value="subcategory1">세부 카테고리 1</option>
          <option value="subcategory2">세부 카테고리 2</option>
        </select>

        <select style={{ width: '600px', height: '67px', flexShrink: 0, marginBottom: '10px', backgroundColor: '#FAFAFA', border: '1px solid #E6E6E6' }}>
          <option value="" disabled defaultValue>지역 선택</option>
          <option value="region1">지역 1</option>
          <option value="region2">지역 2</option>
        </select>

        <R.Button primary style={{ width: '600px', height: '67px', flexShrink: 0 }} onClick={() => alert('추천 받기!')}>
          추천 받을래요
        </R.Button>
      </R.ModalContainer>
    </R.ModalOverlay>
  );
};

const RecomModal = ({ onClose }) => {
  const [showCategoryInput, setShowCategoryInput] = useState(false);
  const [showReviewSelection, setShowReviewSelection] = useState(false);

  const handleRecommendationClick = () => {
    setShowCategoryInput(true);
  };

  const handleReviewSelectionClick = () => {
    setShowReviewSelection(true);
  };

  return (
    <>
      {showReviewSelection ? (
        <ReviewSelectionModal onClose={() => setShowReviewSelection(false)} />
      ) : showCategoryInput ? (
        <CategoryInputModal onClose={() => setShowCategoryInput(false)} />
      ) : (
        <R.ModalOverlay onClick={onClose}>
          <R.ModalContainer onClick={(e) => e.stopPropagation()}>
            <R.CloseButton onClick={onClose}>
              <img
                id="close"
                src={`${process.env.PUBLIC_URL}/images/Close.svg`}
                alt="닫기"
                style={{ width: '24px', height: '24px' }}
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
        </R.ModalOverlay>
      )}
    </>
  );
};

export default RecomModal;
