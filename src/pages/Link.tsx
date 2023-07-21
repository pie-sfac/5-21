import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Setting from '../assets/setting.svg';
import Home from '../assets/home.svg';
import Navigate from '../assets/navigate.svg';
import Apps from '../assets/apps.svg';
import List from '../assets/list.svg';
import RecordImg from '../assets/recordImg.jpeg';
import axios from 'axios';

const Link = () => {
  return (
    <MediaBackDiv>
      <TitleDiv>
        <TitleH2>미디어 관리</TitleH2>
        <TitlePathDiv>
          <HomeImg src={Home} alt="home" />
          <NavigateNextImg src={Navigate} alt="navigate" />
          <CurentLocationSpan>미디어 관리</CurentLocationSpan>
        </TitlePathDiv>
      </TitleDiv>
      <TabWrapperDiv>
        <TabUl>
          <TabLi>
            <TabButton>전체보기</TabButton>
          </TabLi>
          <TabLi>
            <TabButton>문진</TabButton>
          </TabLi>
          <TabLi>
            <TabButton>처치</TabButton>
          </TabLi>
        </TabUl>
        <TagSettingDiv>
          <button type="submit">
            <TagSettingImg src={Setting} alt="setting" />
          </button>
          <SortSelect>
            <SortOption>1</SortOption>
            <SortOption>1</SortOption>
            <SortOption>1</SortOption>
          </SortSelect>
          <ViewOptionAppsDiv>
            <ViewOptionAppsImg src={Apps} alt="apps" />
          </ViewOptionAppsDiv>
          <ViewOptionListDiv>
            <ViewOptionListImg src={List} alt="list" />
          </ViewOptionListDiv>
        </TagSettingDiv>
      </TabWrapperDiv>

      <MediaContainerDiv>
        <MideaCardDiv>
          <ClipImg src={RecordImg} alt="recordImg" />
          <ClipExpDiv>
            <ClipTitleH3>Title</ClipTitleH3>
            <ClipDiscriptionSpan>블라블라</ClipDiscriptionSpan>
          </ClipExpDiv>
        </MideaCardDiv>
        <MideaCardDiv>A</MideaCardDiv>
        <MideaCardDiv>B</MideaCardDiv>
        <MideaCardDiv>C</MideaCardDiv>
        <MideaCardDiv>D</MideaCardDiv>
        <MideaCardDiv>E</MideaCardDiv>
        <MideaCardDiv>F</MideaCardDiv>
        <MideaCardDiv>F</MideaCardDiv>
      </MediaContainerDiv>

      {/* <PageNumberDiv>
          <NavigateFirstPageImg src={NavigateFirst}/>
  <NavigateBeforeImg src={NavigateBefore}/> */}
    </MediaBackDiv>
  );
};

const MediaBackDiv = styled.div`
  display: flex;
  width: 100%;
  height: 975px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
`;
const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  background: #eaedf9;
`;
const TitleH2 = styled.h2`
  color: #444;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
`;
const TitlePathDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
const HomeImg = styled.img`
  width: 22px;
  height: 22px;
  color: #97aeea;
`;
const NavigateNextImg = styled.img`
  width: 12px;
  height: 12px;
`;
const CurentLocationSpan = styled.span`
  color: #666;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 14px */
`;
const RecordContentWrapperDiv = styled.div`
  display: flex;
  height: 845px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;
const TabWrapperDiv = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
const TabUl = styled.ul`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const TabLi = styled.li``;
const TabButton = styled.button`
  display: flex;
  width: 85px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  border-radius: 6px;
  background: #2d62ea;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  color: #ffffff;
`;
const TagSettingDiv = styled.div`
  display: flex;
  width: 233px;
  height: 35px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;
const SortSelect = styled.select`
  width: 100px;
  height: 34px;
  padding: 7px 10px;
`;
const SortOption = styled.option``;

const TagSettingImg = styled.img`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
`;
const ViewOptionAppsDiv = styled.div`
  display: flex;
  width: 34px;
  height: 34px;
  padding-top: 4px;
  padding-right: 1px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #2d62ea;
`;
const ViewOptionAppsImg = styled.img`
  width: 28px;
  height: 28px;
`;
const ViewOptionListDiv = styled.div`
  display: flex;
  width: 34px;
  height: 34px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #f8f9fe;
`;
const ViewOptionListImg = styled.img`
  width: 24px;
  height: 24px;
`;
const MediaContainerDiv = styled.div`
  width: 100%;
  height: 845px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  padding: 0px 24px;
`;
const MideaCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
const ClipImg = styled.img`
  height: 200px;
  width: 100%;
  background-size: cover;
`;
const ClipExpDiv = styled.div`
  display: flex;
  width: 452px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const ClipTitleH3 = styled.h3``;
const ClipDiscriptionSpan = styled.span``;
export default Link;
