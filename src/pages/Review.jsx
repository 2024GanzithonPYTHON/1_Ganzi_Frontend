import React from 'react';
import ReviewModal from './ReviewModal'; 
import * as R from "../styles/StyledReviewModal"; 

const Review = () => {
    const reviews = [
        { name: '이디야커피', category: '카페', address: '경기 성남시 중원구 산성대로 460', phone: '031-749-9366', message: '4건의 리뷰를 작성했어요', highlighted: true },
        { name: '이디야커피', category: '카페', address: '경기 성남시 중원구 산성대로 460', phone: '031-749-9366', message: '2건의 리뷰를 작성했어요', highlighted: false },
        { name: '이디야커피', category: '카페', address: '경기 성남시 중원구 산성대로 460', phone: '031-749-9366', message: '2개 이상의 리뷰부터 추천이 가능해요', highlighted: false },
    ];

    const handleClose = () => {
        // 모달 닫기 로직 (추후에 추가)
    };

    const handleNext = () => {
        console.log('다음 단계로 넘어가기');
    };

    return (
        <R.Modal>
            <ReviewModal 
                reviews={reviews} 
                onClose={handleClose} 
                onNext={handleNext} 
            />
        </R.Modal>
    );
};

export default Review;
