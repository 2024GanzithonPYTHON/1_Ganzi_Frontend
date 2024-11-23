import React from 'react';
import { Overlay, ModalContainer, Tag, Button, Title, Description, TagContainer } from '../styles/StyledMainModal'; 
import RecomModal from './RecomModal';

const MainModal = ({ content, onClose, setShowRecomModal }) => { 
  const handleRecommendationClick = () => {
    onClose();
    setShowRecomModal(true);
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
