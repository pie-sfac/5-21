import { useEffect, useState } from 'react';
import { useLinkContextState, useLinkDispatch } from './LinkContxt';
import * as S from './Link.modules';

//api
import {
  addLinkApi,
  getAllLinksApi,
  getArchiveLinkCategoriesApi,
} from '../apis/LinkService';
//type
import {
  LinkCartegoryType,
  addLinkDataType,
  getLinkDataType,
} from '../types/link/linkType';
// Components
import { LinkTab } from '../components/link/LinkTab';
import Nav from '../components/nav/Navigation';
import Header from '../components/nav/header';
import LinkTabContent from '../components/link/LinkTabContent';

// img
import addIcon from '../assets/icon-create-template.svg';
import settingIcon from '../assets/icon-setting.svg';

//Modal
import AddLinkModal from '../components/link/modal/AddLinkModal';
import CenterLinkModal from '../components/link/modal/CenterLinkModal';
import { AddLinkCartegoryOption } from '../components/modal/style';

const Link = () => {
  const { isActiveTab, isCenterLinkModalOpen } = useLinkContextState();
  const dispatch = useLinkDispatch();

  const setIsActiveTab = (tabNumber: number) => {
    dispatch({ type: 'SET_ACTIVE_TAB', payload: tabNumber });
  };
  // const [isActiveTab, setIsActiveTab] = useState<number>(-1);
  const [linkCategories, setLinkCategories] = useState<LinkCartegoryType[]>([]);
  const [allLinkData, setAllLinkData] = useState<getLinkDataType[]>([]);
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  // const [isCenterLinkModalOpen, setIsCenterLinkModalOpen] = useState(false);

  //addLink
  const [AddLinkCartegory, setAddLinkCartegory] = useState<number>(-1);
  const [addLinkTitle, setAddLinkTitle] = useState<string>('');
  const [addLink, setAddLink] = useState<string>('');
  const [addLinkMemo, setAddLinkMemo] = useState<string>('');

  const openAddLinkModal = () => setIsAddLinkModalOpen(true);
  const closeAddLinkModal = () => setIsAddLinkModalOpen(false);

  const addLinkEvent = async () => {
    const addLinkData: addLinkDataType = {
      categoryId: AddLinkCartegory,
      url: addLink,
      title: addLinkTitle,
      description: addLinkMemo,
    };

    await addLinkApi(addLinkData);
    closeAddLinkModal();
    setAddLink('');
    setAddLinkTitle('');
    setAddLinkMemo('');
  };

  // const sortOption = [
  //   { value: 'latest', name: '최신순' },
  //   { value: 'oldest', name: '오래된순' },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      const cartegoryData: LinkCartegoryType[] =
        await getArchiveLinkCategoriesApi()?.then(
          (res) => res?.data.categories
        );
      setLinkCategories(cartegoryData);
      // 링크 전체 가져오기
      const getAllData: getLinkDataType[] = await getAllLinksApi()?.then(
        (res) => res?.data
      );
      setAllLinkData(getAllData);
    };
    fetchData();
  }, []);

  return (
    <>
      <S.Wrapper>
        <Nav />

        <S.LinkWrapper>
          <Header depth01={''} depth02={'미디어 관리'} depth03={''} />
          <S.LinkContent>
            <S.TitleSection>
              <S.LinkTitleContent>
                <S.LinkTitle>미디어 관리</S.LinkTitle>
                <S.SettingImg src={settingIcon} alt="settingButton" />
              </S.LinkTitleContent>
              <S.CreateTemplateBtn onClick={openAddLinkModal}>
                <S.AddIcon src={addIcon} alt="icon-create" />
                Add Link
              </S.CreateTemplateBtn>
            </S.TitleSection>
            <S.TabWrapperDiv>
              <S.TabSectionDiv>
                <S.TabButton
                  onClick={() => {
                    setIsActiveTab(-1);
                  }}
                  className={isActiveTab === -1 ? 'active' : ''}
                >
                  전체 보기
                </S.TabButton>
                {linkCategories.map((category) => {
                  return (
                    <LinkTab
                      key={category.id}
                      isActiveTab={isActiveTab}
                      category={category}
                    />
                  );
                })}
              </S.TabSectionDiv>
            </S.TabWrapperDiv>

            <LinkTabContent
              isActiveTab={isActiveTab}
              linkCategories={linkCategories}
              allLinkData={allLinkData}
            />
          </S.LinkContent>
        </S.LinkWrapper>

        {
          //Modal
          <CenterLinkModal />
        }
      </S.Wrapper>

      {
        //Modal
        <AddLinkModal
          isAddLinkModalOpen={isAddLinkModalOpen}
          closeAddLinkModal={closeAddLinkModal}
          linkCategories={linkCategories}
          isActiveTab={isActiveTab}
          addLinkEvent={addLinkEvent}
          setAddLinkTitle={setAddLinkTitle}
          setAddLink={setAddLink}
          setAddLinkMemo={setAddLinkMemo}
          setAddLinkCartegory={setAddLinkCartegory}
        />
      }
    </>
  );
};

export default Link;
