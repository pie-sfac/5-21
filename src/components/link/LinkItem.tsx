import * as S from './style';
import RecordImg from '../../assets/recordImg.jpeg';
import PlayArrow from '../../assets/icon-play_arrow.svg';
import { getLinkDataType } from '../../types/link/linkType';
import { useLinkContextState, useLinkDispatch } from '../../pages/LinkContxt';
import { getLinkApi } from '../../apis/LinkService';

interface LinkItemType {
  categoryData: getLinkDataType[];
}

const LinkItem = (props: LinkItemType) => {
  const { isCenterLinkModalOpen } = useLinkContextState();
  const dispatch = useLinkDispatch();

  const setIsCenterLinkModalOpen = (openStatus: boolean) => {
    dispatch({ type: 'OPEN_CENTER_LINK_MODAL', payload: openStatus });
  };

  const openModal = async (data: getLinkDataType) => {
    setIsCenterLinkModalOpen(!isCenterLinkModalOpen);
    dispatch({
      type: 'GET_SELECTED_LINK_ID',
      payload: data.id,
    });
  };

  return (
    <>
      {props.categoryData.map((data) => {
        return (
          <S.LinkItemWrapper key={data.id} onClick={() => openModal(data)}>
            <S.LinkItemImgContent>
              <S.LinkImg src={RecordImg} alt="" />
              <S.PlayBtnDiv>
                <S.PlayIcon src={PlayArrow} alt="playArrow" />
              </S.PlayBtnDiv>
            </S.LinkItemImgContent>
            <S.LinkContentDiv>
              <S.LinkCartegoryH2>{data.category.title}</S.LinkCartegoryH2>
              <S.LinklTitle>{data.title}</S.LinklTitle>
              <S.LinkExplain>
                <S.LinkExplainP>{data.description}</S.LinkExplainP>
              </S.LinkExplain>
              <S.LinkUploadDateSpan>
                등록일 : {data.createdAt.slice(0, 4)}년{' '}
                {data.createdAt.slice(5, 7)}월 {data.createdAt.slice(9, 11)}일
              </S.LinkUploadDateSpan>
            </S.LinkContentDiv>
          </S.LinkItemWrapper>
        );
      })}
    </>
  );
};

export default LinkItem;
