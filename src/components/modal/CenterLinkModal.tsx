// @flow
import React from 'react';
import * as S from './style';
import closeIcon from '../../assets/icon-close-btn.svg';
import LinkImg from '../../assets/img-link.png';
const CenterLinkModal = () => {
  return (
    <S.CenterLinkWrapper>
      <S.CenterLinkHeader>
        <S.LinkModalH2>센터 영상</S.LinkModalH2>
        <S.CloseBtn>
          <S.CloseImg src={closeIcon} />
        </S.CloseBtn>
      </S.CenterLinkHeader>
      <S.CenterLinkContent>
        {/* <S.CenterLinkTitleSection> */}
        <S.CenterLinkTitle>
          <S.CenterLinkCartegoryH3>복합 관절 운동</S.CenterLinkCartegoryH3>
          <S.CenterLinkTitleH2>영상 제목입니다.</S.CenterLinkTitleH2>
        </S.CenterLinkTitle>
        {/* </S.CenterLinkTitleSection> */}
        <S.CenterLinkSection>
          <S.LinkModalH3>영상 링크</S.LinkModalH3>
          <S.LinkAnchor href="https://www.happypoint.com/fkjdfej123214">
            https://www.happypoint.com/fkjdfej123214
          </S.LinkAnchor>
          <S.LinkBox>
            <S.LinkImg src={LinkImg} alt="LinkImg" />
            <S.LinkExplainP>
              링크 설명이 들어가는 자리입니다. 해당 내용은 관리자가 직접
              작성합니다.
            </S.LinkExplainP>
          </S.LinkBox>
        </S.CenterLinkSection>
        {/* <S.CenterMemoSection> */}
        <S.LinkModalH3>영상 메모</S.LinkModalH3>
        <S.CenterLinkMemoP>
          링크 설명이 들어가는 자리입니다. 해당 내용은 관리자가 직접 작성합니다.
        </S.CenterLinkMemoP>
        {/* </S.CenterMemoSection> */}
      </S.CenterLinkContent>
      <S.CenterLinkBtn>
        <S.DeleteButton>삭제</S.DeleteButton>
        <S.EditButton>수정</S.EditButton>
      </S.CenterLinkBtn>
    </S.CenterLinkWrapper>
  );
};

export default CenterLinkModal;
