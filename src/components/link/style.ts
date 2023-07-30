import { styled } from 'styled-components';

// ============= LinkTab =============

export const TabWrapperDiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabSectionDiv = styled.div`
  display: flex;
  width: 75%;
  padding: 0 52px;
`;
export const TabButton = styled.button`
  display: flex;
  width: 90px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #999999;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; //14px
  &.active {
    color: #2d62ea;
  }
  &.active::after {
    content: '';
    display: block;
    width: 79px;
    height: 2px;
    background-color: #2d62ea;
    position: absolute;
    top: 17.5%;
    /* left: 50%; */
    /* transform: translateX(-50%); */
  }
`;

// ============= LinkItem =============
export const LinkItemWrapper = styled.div`
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
  height: 214px;
  width: auto;
  position: relative;
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
  top: 138px;
  left: 272px;
`;
export const PlayIcon = styled.img``;
export const LinkImg = styled.img`
  height: 178px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  position: absolute;
`;
export const LinklTitle = styled.h3`
  padding-top: 5px;
  font-size: 18px;
`;
export const LinkContentDiv = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  padding-top: 16px;
  padding-left: 20px;
  left: 0px;
  top: 190px;
`;

export const LinkCartegoryH2 = styled.h2`
  color: #6691ff;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
`;

export const LinkExplain = styled.div`
  width: 388px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const LinkExplainP = styled.p`
  color: #888;
  width: 350px;
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
