import * as S from './style';
import LinkItem from './LinkItem';
import { LinkTabContentType } from '../../types/link/linkType';
import { useLinkContextState } from '../../pages/LinkContext';
// import { useEffect } from 'react';

const LinkTabContent = (props: LinkTabContentType) => {
  const { isActiveTab, links } = useLinkContextState();

  const category = props.linkCategories.find((data) => {
    return data.id === isActiveTab;
  });
  const categoryData = links.filter((data) => {
    // 전체보기
    if (isActiveTab === -1) {
      return links;
    }
    return data.category.id === isActiveTab;
  });

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const data = await getCategoryLinkApi(Number(isActiveTab))?.then(
  //         (res) => res?.data
  //       );
  //       console.log(data);
  //     };

  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [isActiveTab]);

  return (
    <>
      <S.TabContent>
        <S.TabContentHeader>
          <S.TitleWrapper>
            <S.TabContentTitle>
              {category ? category.title : '전체보기'}
            </S.TabContentTitle>
            <S.CountLabel>
              {category ? category.totalCount : links.length}
            </S.CountLabel>
          </S.TitleWrapper>
          <S.SortSelect>
            <S.SeleteOption>최신순</S.SeleteOption>
            <S.SeleteOption>오래된순</S.SeleteOption>
          </S.SortSelect>
        </S.TabContentHeader>
        <S.CategoryContent className={'grid'}>
          <LinkItem categoryData={categoryData} />
        </S.CategoryContent>
        <S.TabContentFooter>
          <S.FooterItemCount>
            총 {isActiveTab == -1 ? links.length : category?.totalCount}개
          </S.FooterItemCount>
          {/* <Pagination /> */}
        </S.TabContentFooter>
      </S.TabContent>
    </>
  );
};

export default LinkTabContent;
