// @flow
import React from 'react';
import * as S from './style';

interface Props {
  setIsActiveTab: (num: number) => void;
  isActiveTab: number;
}

export const LinkTab = (props: Props) => {
  return (
    <S.TabWrapperDiv>
      <S.TabSectionDiv>
        <S.TabButton
          onClick={() => {
            // setTab(0);
            props.setIsActiveTab(0);
          }}
          className={props.isActiveTab === 0 ? 'active' : ''}
        >
          전체 보기
        </S.TabButton>

        <S.TabButton
          onClick={() => {
            // setTab(1);
            props.setIsActiveTab(1);
          }}
          className={props.isActiveTab === 1 ? 'active' : ''}
        >
          복합 관절 운동
        </S.TabButton>

        <S.TabButton
          onClick={() => {
            // setTab(2);
            props.setIsActiveTab(2);
          }}
          className={props.isActiveTab === 2 ? 'active' : ''}
        >
          단순 관절 운동
        </S.TabButton>
      </S.TabSectionDiv>
    </S.TabWrapperDiv>
  );
};
