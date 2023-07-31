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

export const LinkTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
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
  padding: 0 24px;
`;
