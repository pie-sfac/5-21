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
      </S.TabSectionDiv>
    </S.TabWrapperDiv>
  );
};
