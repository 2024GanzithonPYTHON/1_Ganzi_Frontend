import React from 'react';
import { Overlay, ModalContainer, TagContainer, Tag, Button, Title, Description } from '../styles/StyledMainModal';

const MainModal = ({ content, onClose, setShowRecomModal }) => {
  const handleRecommendationClick = () => {
    onClose(); // 메인 모달 닫기
    setShowRecomModal(true); // RecomModal 열기
  };

  return (
    <Overlay>
      <ModalContainer>
        <TagContainer>
          <Tag>공부하기 좋은</Tag>
          <Tag>커피가 맛있는</Tag>
          <Tag>배경음악이 좋은</Tag>
        </TagContainer>
        <Title>{content.split('\n')[0].replace('장소: ', '')}</Title>
        <Description>{content.split('\n')[1].replace('주소: ', '')}</Description>
        <div className="buttons" style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
          <Button onClick={onClose}>리뷰 확인하기</Button>
          <Button onClick={handleRecommendationClick}>추천하기</Button>
        </div>
      </ModalContainer>
    </Overlay>
  );
};

export default MainModal; 
