import React from 'react';
import * as R from "../styles/StyledReviewModal"; 

const ReviewModal = ({ reviews, onClose, onNext }) => {
    const renderReviewItem = (review) => {
        return (
            <R.ReviewItem style={{
                backgroundColor: review.highlighted ? '#ff4d4d' : '#f0f0f0',
                border: review.highlighted ? 'none' : '1px solid #ddd',
                color: review.highlighted ? '#fff' : '#000',
            }}>
                <h3 style={{ margin: '0 0 10px' }}>{review.name}</h3>
                <p style={{ margin: '5px 0' }}>카테고리: {review.category}</p>
                <p style={{ margin: '5px 0' }}>주소: {review.address}</p>
                <p style={{ margin: '5px 0' }}>전화: {review.phone}</p>
                <span style={{ fontWeight: 'bold' }}>
                    {review.reviewCount}개의 리뷰를 작성했어요
                </span>
            </R.ReviewItem>
        );
    };

    return (
        <R.ModalContainer>
            <R.ModalHeader>
                <R.CloseButton onClick={onClose}>X</R.CloseButton>
            </R.ModalHeader>
            <div style={{ padding: '20px' }}>
                {reviews.map((review, index) => (
                    <React.Fragment key={index}>
                        {renderReviewItem(review)}
                    </React.Fragment>
                ))}
            </div>
            <R.ModalFooter>
                <R.NextButton onClick={onNext}>다음 단계로 넘어가기</R.NextButton>
            </R.ModalFooter>
        </R.ModalContainer>
    );
};

export default ReviewModal;
