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

// export const LinkWrapper = styled.div`
//   /* display: flex; */
//   width: 100%;
//   height: 975px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   background: #fff;
// `;

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
  margin-right: 8px;
`;
export const SeleteOption = styled.option``;

export const CategoryContent = styled.div`
  width: 100%;
  height: auto;
  &.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
  margin-top: 24px;
  position: relative;
`;
export const FooterItemCount = styled.p`
  position: absolute;
  left: 0px;
  top: 0;
  color: #999999;
`;
