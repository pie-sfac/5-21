import * as S from './style';
import LinkItem from './LinkItem';
import { LinkTabContentType } from '../../types/link/linkType';
import { useLinkContextState } from '../../pages/LinkContxt';

const LinkTabContent = (props: LinkTabContentType) => {
  const state = useLinkContextState();
  const category = props.linkCategories.find((data) => {
    return data.id === props.isActiveTab;
  });
  const categoryData = state.links.filter((data) => {
    // 전체보기
    if (props.isActiveTab === -1) {
      return state.links;
    }
    return data.category.id === props.isActiveTab;
  });

  return (
    <>
      <S.TabContent>
        <S.TabContentHeader>
          <S.TitleWrapper>
            <S.TabContentTitle>
              {category ? category.title : '전체보기'}
            </S.TabContentTitle>
            <S.CountLabel>{category ? category.totalCount : 0}</S.CountLabel>
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
            총{' '}
            {props.isActiveTab == -1
              ? state.links.length
              : category?.totalCount}
            개
          </S.FooterItemCount>
          {/* <Pagination /> */}
        </S.TabContentFooter>
      </S.TabContent>
    </>
  );
};

export default LinkTabContent;
