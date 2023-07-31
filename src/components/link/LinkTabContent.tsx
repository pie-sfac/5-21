import React from 'react';
import * as S from './style';
import LinkItem from './LinkItem';
import { LinkTabContentType } from '../../types/link/linkType';

const LinkTabContent = (props: LinkTabContentType) => {
  const category = props.linkCategories.find((data) => {
    return data.id === props.isActiveTab;
  });

  return (
    <>
      <S.TabContent>
        <S.TabContentHeader>
          <S.TitleWrapper>
            <S.TabContentTitle>
              {category ? category.title : '제목'}
            </S.TabContentTitle>
            <S.CountLabel>{category ? category.totalCount : 0}</S.CountLabel>
          </S.TitleWrapper>
          <S.SortSelect>
            <S.SeleteOption>최신순</S.SeleteOption>
            <S.SeleteOption>오래된순</S.SeleteOption>
          </S.SortSelect>
        </S.TabContentHeader>
        <S.CategoryContent className={'grid'}>
          <LinkItem />
        </S.CategoryContent>
        <S.TabContentFooter>
          <S.FooterItemCount>총 {category?.totalCount}개</S.FooterItemCount>
          {/* <Pagination /> */}
        </S.TabContentFooter>
      </S.TabContent>
    </>
  );
};

export default LinkTabContent;
