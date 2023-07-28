import styled from 'styled-components';

// ============= Login =============
export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
// left-banner
export const LoginBanner = styled.section`
  width: 50%;
  height: 100%;
  padding: 24px;
`;
export const BannerInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: #f0f4ff;
  overflow: hidden;
`;
export const LoginBannerImg = styled.img``;
// content
export const LoginContent = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContentInner = styled.div``;
export const LoginHeader = styled.header`
  padding-bottom: 100px;
`;
export const LoginTitle = styled.h3`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 4px;
`;
export const LoginDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #929292;
`;

// ============= Tab =============
export const Tab = styled.li``;
export const TabItem = styled.button`
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
    width: 100%;
    height: 2px;
    background-color: #2d62ea;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
