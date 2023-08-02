import { keyframes, styled } from 'styled-components';

const ModalFade = keyframes`
    0% {
    transform: translate(-50%, -45%);
  }
    100% {
  }
`;

// =============  AddLinkModal============
// export const AddLinkWrapper = styled.div`
//   height: 540px;
//   width: 584px;
//   display: grid;
//   grid-template-rows: 48px 426px 64px;
//   background: #fff;
//   border-radius: 10px;
//   border: 1px solid #fff;
//   box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.4);
//   transition: all ease-in-out 0.2s;
//   position: fixed;
//   top: 20%;
//   left: 40%;

//   /* transform: translate(50%, 50%); */
// `;
//  AddLinkHeader
export const AddLinkHeader = styled.section`
  width: 100%;
  border-bottom: 1px solid #f1f3f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px 8px 16px;
`;

export const LinkModalH2 = styled.h2`
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

//  AddLinkContent
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

///  링크 제목
export const AddLinkTitleSection = styled.section`
  width: 536px;
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;
export const AddLinkTitle = styled.div`
  height: 62px;
`;

//링크 카테고리
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

export const LinkModalH3 = styled.h3`
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

// AddLinkURL
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
// AddLinMemo
export const AddLinkMemoSection = styled.section`
  margin-bottom: 24px;
  height: 222px;
`;
export const AddLinMemoDiv = styled.div`
  width: 536px;
  height: 140px;
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

export const AddLinMemoTextarea = styled.textarea`
  padding: 12px;
  border: none;
  width: 100%;
  height: 100%;
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
//  AddLinkButton
export const AddLinkBtn = styled.section`
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

// =============  CenterLinkModal ============

export const CenterLinkWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 110;
  /* height: 540px; */
  width: 698px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-rows: 48px 426px 64px;

  animation: ${ModalFade} 0.2s linear;
`;
// header
export const CenterLinkHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #f1f3f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px 8px 16px;
`;
// content
export const CenterLinkContent = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const CenterLinkTitleSection = styled.section``;
export const CenterLinkTitle = styled.div``;
export const CenterLinkCartegoryH3 = styled.h3`
  width: 98px;
  padding-bottom: 8px;
  color: #6691ff;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;
export const CenterLinkTitleH2 = styled.h2`
  width: 179px;
  padding-bottom: 16px;
  color: #1d1d1d;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
`;
export const CenterLinkSection = styled.section`
  display: flex;
  flex-direction: column;
`;
export const LinkAnchor = styled.a`
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  text-decoration-line: underline;
  margin-bottom: 10px;
`;
export const LinkBox = styled.div`
  display: flex;
  height: 70px;
  width: 650px;
  align-items: center;
  gap: 19px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  margin-bottom: 16px;
`;
export const LinkImg = styled.img`
  width: 116px;
  height: 68px;
  border-radius: 6px 0px 0px 6px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
export const LinkExplainP = styled.p`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: none;
  color: #888;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;
export const CenterMemoSection = styled.section``;
export const CenterLinkMemoP = styled.p`
  overflow-y: scroll;
  display: flex;
  width: 650px;
  height: 173px;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  color: #888;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

//  CenterLinkButton
export const CenterLinkBtn = styled.div`
  display: flex;
  width: 697px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #f1f3f6;
  background: #fff;
  gap: 10px;
  border-radius: 10px;
`;
export const DeleteButton = styled.button`
  display: flex;
  height: 36px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background-color: #888888;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;
export const EditButton = styled.button`
  display: flex;
  height: 36px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background-color: #2d62ea;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(40, 40, 40, 0.6);
`;

export const AddLinkWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 110;
  height: 540px;
  width: 584px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-rows: 48px 426px 64px;

  animation: ${ModalFade} 0.2s linear;
`;

// =============  DeleteModal ============
