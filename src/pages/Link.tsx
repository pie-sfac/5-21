import { useEffect, useState } from 'react';
import * as S from './Link.modules';

import LinkItem from '../components/link/LinkItem';
import { LinkTab } from '../components/link/LinkTab';

import { getArchiveLinkCategories } from '../apis/LinkService';
import { LinkCartegoryType } from '../types/link/linkType';
// Components
import Nav from '../components/nav/Navigation';
import Header from '../components/nav/header';
import Button from '../components/Button';
import LinkTabContent from '../components/link/LinkTabContent';

const Link = () => {
  const content = [<LinkItem />, '내용1', '내용2'];
  const [isActiveTab, setIsActiveTab] = useState<number>(0);
  const [linkCategories, setLinkCategories] = useState<LinkCartegoryType[]>([]);

  const sortOption = [
    { value: 'latest', name: '최신순' },
    { value: 'oldest', name: '오래된순' },
  ];

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
    <S.Wrapper>
      <Nav />
      <S.LinkWrapper>
        <Header depth01={'미디어 관리'} depth02={''} depth03={''} />
        <S.LinkContent>
          <S.TitleSection>
            <S.LinkTitle>미디어 관리</S.LinkTitle>
            {/* <S.CreateTemplateBtn onClick={handleCreateModal}> */}
            {/* <S.AddIcon src={addIcon} alt="icon-create" /> */}
            {/* Create Template */}
            {/* </S.CreateTemplateBtn> */}
          </S.TitleSection>
          <S.TabWrapperDiv>
            <S.TabSectionDiv>
              {linkCategories.map((category) => {
                return (
                  <LinkTab
                    isActiveTab={isActiveTab}
                    category={category}
                    setIsActiveTab={setIsActiveTab}
                  />
                );
              })}
            </S.TabSectionDiv>
          </S.TabWrapperDiv>
          <LinkTabContent
            isActiveTab={isActiveTab}
            linkCategories={linkCategories}
          />
        </S.LinkContent>
      </S.LinkWrapper>
    </S.Wrapper>
  );
};

export default Link;
