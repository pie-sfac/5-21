import { useState } from 'react';
import TitleSection from '../components/TitleSection';
import { menu } from '../components/commonConst/NavConst';
import * as S from './Link.modules';
import { TabSection } from '../components/style';
import ViewOption from '../components/ViewOption';
import LinkItem from '../components/link/LinkItem';
import Button from '../components/Button';
import { LinkTab } from '../components/link/LinkTab';
// import * as Api from '../../api';

const Link = () => {
  const content = [<LinkItem />, '내용1', '내용2'];
  const [isActiveTab, setIsActiveTab] = useState<number>(0);

  return (
    <S.LinkWrapper>
      <TitleSection depth01={menu[3].name} depth02={''} depth03={''} />
      <LinkTab isActiveTab={isActiveTab} setIsActiveTab={setIsActiveTab} />

      <S.TabContent>
        <S.CategoryHeader>
          <S.CategoryTitleWrapper>
            <S.SubTitle>기록 전체보기</S.SubTitle>
            <S.Count>50</S.Count>
          </S.CategoryTitleWrapper>
          <ViewOption />
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
      <TabSection />
    </S.LinkWrapper>
  );
};

export default Link;
