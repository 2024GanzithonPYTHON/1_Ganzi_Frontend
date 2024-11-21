import React from "react";
import * as F from "../styles/StyledFavoriteModal";

const FavoriteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <F.Overlay>
        <F.ModalContainer>
          <F.Close onClick={onClose}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Close.svg`}
              alt="닫기"
            />
          </F.Close>
          <F.Title>
            <div id="name">새 폴더 만들기</div>
          </F.Title>
          <F.Input>
            <F.FolName>
              <input
                id="title"
                type="text"
                placeholder="폴더명을 입력해주세요"
              />
            </F.FolName>
            <F.Folcolor>
              <div id="select">색상을 선택해주세요</div>
              <div id="eclipse"></div>
            </F.Folcolor>
          </F.Input>
          <F.Color></F.Color>
          <F.Create>
            <div id="create">폴더 생성하기</div>
          </F.Create>
        </F.ModalContainer>
      </F.Overlay>
    </>
  );
};

export default FavoriteModal;
