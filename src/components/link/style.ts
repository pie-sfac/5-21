import { styled } from 'styled-components';

// ============= LinkTab =============

export const TabButton = styled.button`
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #999;
  position: relative;

  &.active {
    color: #2d62ea;
  }
  &.active::after {
    content: '';
    display: block;
    width: 80px;
    height: 2px;
    background-color: #2d62ea;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// ============= LinkItem =============
export const LinkItemWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 336px;
  cursor: pointer;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 0px 10px 30px 0px #e7e9f2;
  transition: all ease-in-out 0.2s;
  padding: 12px;
  background-size: cover;
  position: relative;

  &:hover {
    border: 1px solid #275cf5;
    background: #f9faff;
    box-shadow: 0px 10px 30px 0px #c6cbe3;
  }
`;

export const LinkItemImgContent = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  & > div {
    height: 100px;
  }
`;
export const PlayBtnDiv = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #fff;
  position: relative;
  top: 70%;
  left: 70%;
`;
export const PlayIcon = styled.img``;
export const LinkImg = styled.img`
  height: 178px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  position: absolute;
`;
export const LinklTitle = styled.h3`
  padding-top: 5px;
  font-size: 18px;
`;
export const LinkContentDiv = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  padding-top: 16px;
  padding-left: 20px;
  left: 0px;
  top: 190px;
  background-color: #fff;
`;

export const LinkCartegoryH2 = styled.h2`
  color: #6691ff;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
`;

export const LinkExplain = styled.div`
  width: 85%;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const LinkExplainP = styled.p`
  color: #888;
  font-size: 14px;
  font-style: normal;
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const LinkUploadDateSpan = styled.span`
  color: #aaa;
  font-size: 12px;
  font-style: normal;
`;

// ============= Tab-content =============
export const TabContent = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding: 24px;
  background-color: #f2f5ff;
`;
export const TabContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 0px 20px 16px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TabContentTitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
`;
export const CountLabel = styled.div`
  color: #fff;
  height: 22px;
  padding: 0px 12px;
  line-height: 24px;
  border-radius: 6px;
  background: #2d62ea;
  margin-left: 8px;
`;
export const SortSelect = styled.select`
  width: 116;
  height: 34px;
  padding: 0px 10px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background: #fff;
  padding-right: 8px;
`;
export const SeleteOption = styled.option``;

export const CategoryContent = styled.div`
  /* width: 354px; */
  /* width: 100%; */
  width: 1900px;
  height: auto;
  &.grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    grid-gap: 20px;
  }
`;
export const TabContentFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  position: relative;
`;
export const FooterItemCount = styled.p`
  position: absolute;
  left: 0px;
  top: 0;
  color: #999999;
  padding-top: 12px;
`;
