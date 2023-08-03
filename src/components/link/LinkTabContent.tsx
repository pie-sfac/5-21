import * as S from './style';
import LinkItem from './LinkItem';
import { LinkTabContentType, getLinkDataType } from '../../types/link/linkType';
import { useLinkContextState } from '../../pages/LinkContext';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';

const LinkTabContent = (props: LinkTabContentType) => {
  const { isActiveTab, links } = useLinkContextState();

  // 선택한 카테고리 찾기
  const category = props.linkCategories.find((data) => {
    return data.id === isActiveTab;
  });
  const [sortedData, setSortedData] = useState<getLinkDataType[] | null>(null);

  useEffect(() => {
    // 선택한 카테고리 데이터
    const categoryData = links.filter((data) => {
      // 전체보기
      if (isActiveTab === -1) {
        return links;
      }
      return data.category.id === isActiveTab;
    });
    setSortedData(categoryData);
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
          <S.SortSelect
            onChange={(e) => {
              const sortedLinks = sortedData;
              if (e.target.value === 'ascending') {
                sortedLinks?.sort((a, b) => {
                  if (Date.parse(a.createdAt) < Date.parse(b.createdAt)) {
                    return 1;
                  } else if (
                    Date.parse(a.createdAt) > Date.parse(b.createdAt)
                  ) {
                    return -1;
                  } else {
                    return 0;
                  }
                });
              } else {
                sortedLinks?.sort((a, b) => {
                  if (Date.parse(a.createdAt) > Date.parse(b.createdAt)) {
                    return 1;
                  } else if (
                    Date.parse(a.createdAt) < Date.parse(b.createdAt)
                  ) {
                    return -1;
                  } else {
                    return 0;
                  }
                });
              }
              setSortedData(sortedLinks);
              console.log(sortedData);
            }}
          >
            <S.SeleteOption value="ascending">최신순</S.SeleteOption>
            <S.SeleteOption value="descending">오래된순</S.SeleteOption>
          </S.SortSelect>
        </S.TabContentHeader>
        <S.CategoryContent className={'grid'}>
          <LinkItem sortedData={sortedData} />
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
