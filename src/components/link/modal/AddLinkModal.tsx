import * as S from './style';
import { LinkCartegoryType } from '../../../types/link/linkType';

import closeIcon from '../../../assets/icon-close-btn.svg';

interface AddLinkModalProps {
  isAddLinkModalOpen: boolean;
  isActiveTab: number;
  closeAddLinkModal: () => void;
  addLinkEvent: () => void;
  linkCategories: LinkCartegoryType[];
  setAddLinkTitle: React.Dispatch<React.SetStateAction<string>>;
  setAddLink: React.Dispatch<React.SetStateAction<string>>;
  setAddLinkMemo: React.Dispatch<React.SetStateAction<string>>;
  setAddLinkCartegory: React.Dispatch<React.SetStateAction<number>>;
}

const AddLinkModal = (props: AddLinkModalProps) => {
  return (
    <S.ModalWrapper
      style={{ display: props.isAddLinkModalOpen ? 'block' : 'none' }}
    >
      <S.AddLinkWrapper>
        <S.AddLinkHeader>
          <S.LinkModalH2>링크 추가</S.LinkModalH2>
          <S.CloseBtn
            onClick={() => {
              props.closeAddLinkModal;
            }}
          >
            <S.CloseImg src={closeIcon} />
          </S.CloseBtn>
        </S.AddLinkHeader>
        <S.AddLinkContent>
          <S.AddLinkTitleSection>
            <S.AddLinkTitle>
              <S.LinkModalH3>
                링크 제목
                <S.RequiredMark>*</S.RequiredMark>
              </S.LinkModalH3>
              <S.AddLinkTitleInput
                placeholder="링크 제목을 입력해 주세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.preventDefault();
                  props.setAddLinkTitle(e.target.value);
                }}
              ></S.AddLinkTitleInput>
            </S.AddLinkTitle>
            <S.AddLinkCartegoryDiv>
              <S.AddLinkH3Label>
                카테고리
                <S.RequiredMark>*</S.RequiredMark>
              </S.AddLinkH3Label>
              <S.AddLinkCartegorySelect
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  e.preventDefault();
                  const id = Number(e.target.value);
                  props.setAddLinkCartegory(id);
                }}
              >
                {props.linkCategories.map((category) => {
                  return (
                    <S.AddLinkCartegoryOption
                      key={category.id}
                      value={category.id}
                    >
                      {category.title}
                    </S.AddLinkCartegoryOption>
                  );
                })}
              </S.AddLinkCartegorySelect>
            </S.AddLinkCartegoryDiv>
          </S.AddLinkTitleSection>
          <S.AddLinkUrlSection>
            <S.LinkModalH3>
              링크
              <S.RequiredMark>*</S.RequiredMark>
            </S.LinkModalH3>
            <S.AddLinUrlInput
              placeholder="URL을 입력해 주세요."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                props.setAddLink(e.target.value);
              }}
            ></S.AddLinUrlInput>
          </S.AddLinkUrlSection>
          <S.AddLinkMemoSection>
            <S.LinkModalH3>
              메모
              <S.RequiredMark>*</S.RequiredMark>
            </S.LinkModalH3>
            <S.AddLinMemoDiv>
              <S.AddLinMemoTextarea
                maxLength={500}
                placeholder="링크를 식별하기 위한 간단한 메모를 작성해주세요.(500자 이내)"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  e.preventDefault();
                  props.setAddLinkMemo(e.target.value);
                }}
              ></S.AddLinMemoTextarea>
            </S.AddLinMemoDiv>
          </S.AddLinkMemoSection>
        </S.AddLinkContent>
        <S.AddLinkBtn>
          <S.CancelButton
            onClick={() => {
              props.closeAddLinkModal();
            }}
          >
            취소
          </S.CancelButton>
          <S.CompleteButton
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              props.addLinkEvent();
            }}
          >
            완료
          </S.CompleteButton>
        </S.AddLinkBtn>
      </S.AddLinkWrapper>
    </S.ModalWrapper>
  );
};
export default AddLinkModal;
