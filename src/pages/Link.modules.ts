import { styled } from 'styled-components';

// ============= Common =============
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkWrapper = styled.div`
  width: calc(100% - 260px);
`;

// ============= LinkContent =============
export const LinkContent = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background: #fafbff;
`;

export const TitleSection = styled.section`
  width: 100%;
  height: 66px;
  padding: 0px 40px;
  background-color: #fafbff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LinkTitleContent = styled.div`
  width: 109px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

//button
export const SettingImg = styled.img`
  width: 18px;
  padding-bottom: 2px;
`;

export const CreateTemplateBtn = styled.button`
  height: 36px;
  padding: 0px 16px;
  color: #fff;
  border-radius: 6px;
  background: #2d62ea;
  transition: all ease-in-out 0.2s;
  &:hover {
    background-color: #1850de;
    box-shadow: 0px 6px 10px 0px rgba(45, 98, 234, 0.2);
  }
`;
export const AddIcon = styled.img`
  margin-right: 4px;
  vertical-align: middle;
`;

// ============= Tab =============

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
  /* padding: 0 24px; */
`;
export const TabButton = styled.button`
  margin-left: 14px;
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
    width: 55px;
    height: 2px;
    background-color: #2d62ea;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
