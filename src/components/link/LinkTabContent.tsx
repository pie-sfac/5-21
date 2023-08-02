import * as S from './style';
import LinkItem from './LinkItem';
import { LinkTabContentType } from '../../types/link/linkType';
import { useLinkContextState, useLinkDispatch } from '../../pages/LinkContxt';
import { useEffect } from 'react';
import { getCategoryLinkApi } from '../../apis/LinkService';

const LinkTabContent = (props: LinkTabContentType) => {
  const { isActiveTab, links } = useLinkContextState();
  const dispatch = useLinkDispatch();

  const setIsCenterLinkModalOpen = (openStatus: boolean) => {
    dispatch({ type: 'OPEN_CENTER_LINK_MODAL', payload: openStatus });
  };

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryLinkApi(isActiveTab);

      console.log(data);
    };

    fetchData();
  }, [isActiveTab]);

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
