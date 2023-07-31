// @flow
import React from 'react';
import * as S from './style';
import { LinkTabPropsType } from '../../types/link/linkType';

export const LinkTab = (props: LinkTabPropsType) => {
  return (
    // {props.linkCategories
    //   ? props.linkCategories.map((category) => {
    <>
      <S.TabButton
        key={props.category.id}
        onClick={() => {
          props.setIsActiveTab(props.category.id);
        }}
        className={props.isActiveTab === props.category.id ? 'active' : ''}
      >
        {props.category.title}
      </S.TabButton>
    </>
  );
};
