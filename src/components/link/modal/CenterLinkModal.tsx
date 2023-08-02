// @flow
import React, { useEffect, useState } from 'react';
import * as S from './style';
import closeIcon from '../../../assets/icon-close-btn.svg';
import LinkImg from '../../../assets/img-link.png';
import {
  useLinkContextState,
  useLinkDispatch,
} from '../../../pages/LinkContxt';
import { deleteLinkApi, getLinkApi } from '../../../apis/LinkService';

interface archiveLinkDetailType {
  id: number;
  centerId: number;
  category: {
    id: number;
    title: string;
    description: string;
  };
  site: string;
  url: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const CenterLinkModal = () => {
  const { isCenterLinkModalOpen, selectedLinkId } = useLinkContextState();
  const dispatch = useLinkDispatch();

  const setIsCenterLinkModalOpen = (openStatus: boolean) => {
    dispatch({ type: 'OPEN_CENTER_LINK_MODAL', payload: openStatus });
  };

  const [linkData, setLinkData] = useState<archiveLinkDetailType>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLinkApi(selectedLinkId)?.then((res) => res?.data);
      data !== null || data !== undefined ? setLinkData(data) : null;
    };
    fetchData();
  }, [selectedLinkId, linkData]);

  return (
    <S.ModalWrapper
      style={{ display: isCenterLinkModalOpen ? 'block' : 'none' }}
    >
      <S.CenterLinkWrapper>
        <S.CenterLinkHeader>
          <S.LinkModalH2>센터 링크</S.LinkModalH2>
          <S.CloseBtn
            onClick={() => {
              setIsCenterLinkModalOpen(!isCenterLinkModalOpen);
            }}
          >
            <S.CloseImg src={closeIcon} />
          </S.CloseBtn>
        </S.CenterLinkHeader>
        <S.CenterLinkContent>
          {/* <S.CenterLinkTitleSection> */}
          <S.CenterLinkTitle>
            <S.CenterLinkCartegoryH3>복합 관절 운동</S.CenterLinkCartegoryH3>
            <S.CenterLinkTitleH2>{linkData?.title}</S.CenterLinkTitleH2>
          </S.CenterLinkTitle>
          {/* </S.CenterLinkTitleSection> */}
          <S.CenterLinkSection>
            <S.LinkModalH3>영상 링크</S.LinkModalH3>
            <S.LinkAnchor href={linkData?.url}>{linkData?.url}</S.LinkAnchor>
            <S.LinkBox>
              <S.LinkImg src={LinkImg} alt="LinkImg" />
              <S.LinkExplainP>
                링크 설명이 들어가는 자리입니다. 해당 내용은 관리자가 직접
                작성합니다.
              </S.LinkExplainP>
            </S.LinkBox>
          </S.CenterLinkSection>
          {/* <S.CenterMemoSection> */}
          <S.LinkModalH3>영상 메모</S.LinkModalH3>
          <S.CenterLinkMemoP>{linkData?.description}</S.CenterLinkMemoP>
          {/* </S.CenterMemoSection> */}
        </S.CenterLinkContent>
        <S.CenterLinkBtn>
          <S.DeleteButton
            onClick={() => {
              deleteLinkApi(selectedLinkId);
              window.location.replace('/media');
              setIsCenterLinkModalOpen(!isCenterLinkModalOpen);
            }}
          >
            삭제
          </S.DeleteButton>
          <S.EditButton>수정</S.EditButton>
        </S.CenterLinkBtn>
      </S.CenterLinkWrapper>
    </S.ModalWrapper>
  );
};

export default CenterLinkModal;
