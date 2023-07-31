import { useEffect, useState } from 'react';
import TitleSection from '../components/TitleSection';
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
    // const res = getArchiveLinkCategories()

    // .then((res) =>
    //   setLinkCategories(res.data)
    // );
    getArchiveLinkCategories('archive-link-categories').then((res) =>
      setLinkCategories(res.data)
    );
  }, []);

  return (
    <S.LinkWrapper>
      <TitleSection depth01={'이거'} depth02={'저거'} depth03={'미디어 관리'} />
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
          <Button text={'등록'} type={'primary'} onClick="" />
        </S.CategoryFooter>
      </S.TabContent>
    </S.LinkWrapper>
  );
};

export default Link;
