import { useEffect, useState } from 'react';
// import { menu } from '../components/commonConst/NavConst';
import * as S from './Link.modules';
// import TabSection from '../components/TabSection';
import LinkItem from '../components/link/LinkItem';
import Button from '../components/Button';
import { LinkTab } from '../components/link/LinkTab';
// import { getArchiveLinkCategories } from '../apis/LinkService';
import { getArchiveLinkCategories } from '../apis/LinkService';
import { LinkCartegoryType } from '../types/link/linkType';

const Link = () => {
  const content = [<LinkItem />, '내용1', '내용2'];
  const [isActiveTab, setIsActiveTab] = useState<number>(0);
  const [linkCategories, setLinkCategories] = useState<LinkCartegoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getArchiveLinkCategories();
        const apiData: LinkCartegoryType[] = res?.data.categories;
        setLinkCategories(apiData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <S.LinkWrapper>
      {linkCategories ? (
        <LinkTab
          isActiveTab={isActiveTab}
          setIsActiveTab={setIsActiveTab}
          linkCategories={linkCategories}
        />
      ) : (
        ''
      )}
      <S.TabContent>
        <S.CategoryHeader>
          <S.CategoryTitleWrapper>
            <S.SubTitle>기록 전체보기</S.SubTitle>
            <S.Count>50</S.Count>
          </S.CategoryTitleWrapper>
        </S.CategoryHeader>
        <S.CategoryContent className={'grid'}>
          {content[isActiveTab]}
        </S.CategoryContent>
        <S.CategoryFooter>
          <S.FooterItemCount>[1 to 5] 총 50개</S.FooterItemCount>
          {/* <Pagination /> */}
          <Button text={'등록'} type={'primary'} onClick={() => {}} />
        </S.CategoryFooter>
      </S.TabContent>
    </S.LinkWrapper>
  );
};

export default Link;
