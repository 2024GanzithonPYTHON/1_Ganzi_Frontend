import React, { useState } from "react";
import * as C from "../styles/StyledComplete";
import axios from "axios";

const Complete = () => {
  //   if (!isOpen) return null;

  return (
    // <>
    <C.Overlay>
      <C.ModalContainer>
        <C.Close>
          <img src={`${process.env.PUBLIC_URL}/images/Close.svg`} alt="닫기" />
        </C.Close>
        <C.Container>
          <C.Content>
            <div id="figure">2</div>
            <C.Big>
              <div id="big">지금까지 </div>
              <div id="figure2">2</div>
              <div id="big">개의 장소를 추천했어요!</div>
            </C.Big>
            <div id="small">앞으로 3개의 장소를 더 추천하면</div>
            <div id="small"> 리워드를 받을 수 있어요</div>
          </C.Content>
          <C.Reward>
            <div>장소 추천하고 리워드 받기</div>
          </C.Reward>
          <C.Home>
            <div>메인홈으로</div>
          </C.Home>
        </C.Container>
      </C.ModalContainer>
    </C.Overlay>
    // </>
  );
};

export default Complete;
