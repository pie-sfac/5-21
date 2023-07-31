// @flow
import React from 'react';
import * as S from './style';
import { LinkTabPropsType } from '../../types/link/linkType';

export const LinkTab = (props: LinkTabPropsType) => {
  return (
    <S.TabWrapperDiv>
      <S.TabSectionDiv>
        {props.linkCategories
          ? props.linkCategories.map((category) => {
              return (
                <S.TabButton
                  key={category.id}
                  onClick={() => {
                    props.setIsActiveTab(category.id);
                  }}
                  className={props.isActiveTab === category.id ? 'active' : ''}
                >
                  {category.title}
                </S.TabButton>
              );
            })
          : ''}
        {/* <S.TabButton
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
        </S.TabButton> */}
      </S.TabSectionDiv>
    </S.TabWrapperDiv>
  );
};
