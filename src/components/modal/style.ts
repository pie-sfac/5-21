import { styled } from 'styled-components';

export const AddLinkWrapper = styled.div`
  height: 540px;
  width: 584px;
  display: grid;
  grid-template-rows: 48px 426px 64px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
`;
// =============  AddLinkHeader ============
export const AddLinkHeaderSection = styled.section`
  width: 100%;
  border-bottom: 1px solid #f1f3f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  padding-top: 26px;
`;

export const AddLinkH2 = styled.h2`
  margin-bottom: 8px;
  width: 200px;
  color: #1d1d1d;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
`;
export const CloseBtn = styled.button`
  padding-right: 16px;
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  background-color: transparent;
`;
export const CloseImg = styled.img``;

// =============  AddLinkContent ============
export const ModalContent = styled.div`
  padding: 20px;
  text-align: center;
  width: 584px;
  height: 426px;
`;

export const AddLinkContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-start;
  gap: 8px;
`;

/// ============= 링크 제목 ============
export const AddLinkTitleSection = styled.section`
  width: 536px;
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;
export const AddLinkTitle = styled.div`
  height: 62px;
`;

//=============링크 카테고리 ================
export const AddLinkCartegoryDiv = styled.div`
  height: 62px;
`;

export const AddLinkH3Label = styled.label`
  width: 100%;
  margin-left: 4px;
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  color: #1d1d1d;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;

export const AddLinkCartegorySelect = styled.select`
  display: flex;
  width: 160px;
  height: 40px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background: var(--white-100, #fff);
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    color: #363636;
    border: 1px solid black;
  }
`;

export const AddLinkCartegoryOption = styled.option`
  color: #1d1d1d;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;

export const AddLinkH3 = styled.h3`
  width: 100%;
  margin-left: 4px;
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  color: #1d1d1d;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;
export const RequiredMark = styled.p`
  color: #2d62ea;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

export const AddLinkTitleInput = styled.input`
  width: 360px;
  height: 40px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background: var(--white-100, #fff);
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    color: #363636;
    border: 1px solid black;
  }
  &::placeholder {
    color: #ccc;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
  }
`;

// =============  AddLinkURL ============
export const AddLinkUrlSection = styled.section`
  margin-bottom: 8px;
`;
export const AddLinUrlInput = styled.input`
  width: 536px;
  height: 40px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background: var(--white-100, #fff);
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    color: #363636;
    border: 1px solid black;
  }
  &::placeholder {
    color: #ccc;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
  }
`;
// =============  AddLinMemo ============
export const AddLinkMemoSection = styled.section`
  margin-bottom: 24px;
`;
export const AddLinMemoInputDiv = styled.div`
  width: 536px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background: var(--white-100, #fff);
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    color: #363636;
    border: 1px solid black;
  }
`;

export const AddLinMemoInput = styled.input`
  padding: 12px;
  border: none;
  width: 400px;
  border-radius: 6px;

  &::placeholder {
    color: #ccc;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
  }
`;
// =============  AddLinkButton ============
export const AddLinkBtnSection = styled.section`
  display: flex;
  width: 582px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #f1f3f6;
  background: #fff;
  gap: 10px;
  border-radius: 10px;
`;
export const CancelButton = styled.button`
  display: flex;
  height: 36px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background-color: #f4f4f4;
`;
export const CompleteButton = styled.button`
  display: flex;
  height: 36px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: #2d62ea;
  color: #ffffff;
`;
