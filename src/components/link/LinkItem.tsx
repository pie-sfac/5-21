import React, { useEffect } from 'react';
import * as S from './style';
import RecordImg from '../../assets/recordImg.jpeg';
import { getArchiveLinks } from '../../apis/authService';

const LinkItem = () => {
  useEffect(() => {
    getArchiveLinks();
  }, []);
  return (
    <S.LinkItemWrapper>
      <S.LinkImg src={RecordImg} alt="" />
      <S.LinkContentDiv>
        <S.LinklTitle>상체운동입니다.</S.LinklTitle>
        <S.LinklSpan>매일 아침 30분 따라해보세요</S.LinklSpan>
      </S.LinkContentDiv>
    </S.LinkItemWrapper>
  );
};

export default LinkItem;
