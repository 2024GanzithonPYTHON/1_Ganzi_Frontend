import React from 'react';
import * as R from "../styles/StyledReviewModal"; 

const ReviewModal = ({ reviews, onClose, onNext }) => {
    // 리뷰를 최대 3개로 제한
    const limitedReviews = reviews.length >= 3 ? reviews.slice(0, 3) : [...reviews, ...Array(3 - reviews.length).fill({})];
    
    const canRecommend = reviews.length > 2; // 추천 가능 여부

    const renderReviewItem = (review, index) => {
        return (
            <R.ReviewItem key={index} style={{
                backgroundColor: review.highlighted ? '#ff4d4d' : '#f0f0f0',
                border: review.highlighted ? 'none' : '1px solid #ddd',
                color: review.highlighted ? '#fff' : '#000',
            }}>
                <h3 style={{ margin: '0 0 10px' }}>{review.name || '이름 없음'}</h3>
                <p style={{ margin: '5px 0' }}>카테고리: {review.category || '카테고리 없음'}</p>
                <p style={{ margin: '5px 0' }}>주소: {review.address || '주소 없음'}</p>
                <p style={{ margin: '5px 0' }}>전화: {review.phone || '전화 없음'}</p>
                <span style={{ fontWeight: 'bold' }}>
                    {review.reviewCount !== undefined ? `${review.reviewCount}개의 리뷰를 작성했어요` : '리뷰 수 없음'}
                </span>
            </R.ReviewItem>
        );
    };

    return (
        <R.ModalContainer>
            <R.ModalHeader>
                <R.CloseButton onClick={onClose}>X</R.CloseButton>
            </R.ModalHeader>
            <div style={{ padding: '20px', position: 'relative' }}>
                {limitedReviews.map((review, index) => renderReviewItem(review, index))}
                {/* 리뷰 수가 2개 이하일 때 메시지 표시 */}
                {!canRecommend && (
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 투명 검정색 배경
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '20px',
                        borderRadius: '8px',
                    }}>
                        <p style={{ margin: 0 }}>2개 이상의 리뷰부터 추천이 가능해요.</p>
                    </div>
                )}
            </div>
            <R.ModalFooter>
                <R.NextButton onClick={onNext} disabled={!canRecommend}>다음 단계로 넘어가기</R.NextButton>
            </R.ModalFooter>
        </R.ModalContainer>
    );
};

export default ReviewModal;
