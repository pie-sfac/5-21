import React from 'react';
import * as S from './style';

import closeIcon from '../../assets/icon-close-btn.svg';
// Wrapper -> Content -> Section ->

const AddLinkModal = () => {
  return (
    <S.AddLinkWrapper>
      <S.AddLinkHeaderSection>
        <S.AddLinkH2>링크 추가</S.AddLinkH2>
        <S.CloseBtn>
          <S.CloseImg src={closeIcon} />
        </S.CloseBtn>
      </S.AddLinkHeaderSection>
      <S.AddLinkContent>
        <S.AddLinkTitleSection>
          <S.AddLinkTitle>
            <S.AddLinkH3>
              링크 제목
              <S.RequiredMark>*</S.RequiredMark>
            </S.AddLinkH3>
            <S.AddLinkTitleInput placeholder="링크 제목을 입력해 주세요."></S.AddLinkTitleInput>
          </S.AddLinkTitle>
          <S.AddLinkCartegoryDiv>
            <S.AddLinkH3Label>
              카테고리
              <S.RequiredMark>*</S.RequiredMark>
            </S.AddLinkH3Label>
            <S.AddLinkCartegorySelect>
              <S.AddLinkCartegoryOption>
                복합 관절 운동
              </S.AddLinkCartegoryOption>
            </S.AddLinkCartegorySelect>
          </S.AddLinkCartegoryDiv>
        </S.AddLinkTitleSection>
        <S.AddLinkUrlSection>
          <S.AddLinkH3>
            링크
            <S.RequiredMark>*</S.RequiredMark>
          </S.AddLinkH3>
          <S.AddLinUrlInput placeholder="URL을 입력해 주세요."></S.AddLinUrlInput>
        </S.AddLinkUrlSection>
        <S.AddLinkMemoSection>
          <S.AddLinkH3>
            메모
            <S.RequiredMark>*</S.RequiredMark>
          </S.AddLinkH3>
          <S.AddLinMemoInputDiv>
            <S.AddLinMemoInput placeholder="링크를 식별하기 위한 간단한 메모를 작성해주세요.(500자 이내)"></S.AddLinMemoInput>
          </S.AddLinMemoInputDiv>
        </S.AddLinkMemoSection>
      </S.AddLinkContent>
      <S.AddLinkBtnSection>
        <S.CancelButton>취소</S.CancelButton>
        <S.CompleteButton>완료</S.CompleteButton>
      </S.AddLinkBtnSection>
    </S.AddLinkWrapper>
  );
};
export default AddLinkModal;
