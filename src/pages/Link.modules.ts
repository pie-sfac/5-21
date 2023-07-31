import { styled } from 'styled-components';

export const LinkWrapper = styled.div`
  /* display: flex; */
  width: 100%;
  height: 975px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
`;

// ============= TabContent =============
export const TabContent = styled.div`
  width: 100%;
  height: 848px;
  /* height: calc(100vh - 186px); */
  padding: 0 72px;
  background-color: #f6f8ff;
`;
export const CategoryHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CategoryTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
`;
export const Count = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #2d62ea;
`;
export const CategoryContent = styled.div`
  width: 1660px;
  height: 692px;
  &.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;

// ============= CategoryFooter =============
export const CategoryFooter = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
export const FooterItemCount = styled.span`
  color: #999999;
`;
