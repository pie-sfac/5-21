import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// ============= Link =============
export const StyleLink = styled(Link)`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  color: #1d1d1d;
  &.active {
    color: #2d62ea;
  }
`;

// ============= Header =============
export const Header = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--scale-gray-scale-gray-200, #e7e7e7);
  background: var(--bg-bg-wh, #fff);
`;
export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LogoImg = styled.img`
  margin-right: 40px;
`;
export const Gnb = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const GnbItem = styled.li`
  margin-right: 32px;
  &:hover a {
    color: #2d62ea;
  }
`;
export const UserBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const UserInfo = styled.div``;
export const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 16px;
`;
export const UserImg = styled.img``;
export const UserName = styled.span`
  margin: 0px 8px;
`;
export const PlanLabel = styled.span`
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  color: #2d62ea;
  background: #ecefff;
`;
export const UserAlarm = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AlarmImg = styled.img``;

// ============= button =============
export const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  height: 36px;
  padding: 0 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  background: #2d62ea;
  color: #fff;
  text-align: center;
  line-height: 36px;

  // secondary
  &.secondary {
    background: #f4f4f4;
    color: #1d1d1d;
  }

  // delete
  &.delete {
    background-color: #fc4957;
    color: #fff;
  }
`;

// ============= Modal =============
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(40, 40, 40, 0.6);
`;
const ModalFade = keyframes`
    0% {
    transform: translate(-50%, -45%);
  }
    100% {
  }
`;
export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 110;

  width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.4);

  animation: ${ModalFade} 0.2s linear;
`;
// Header
export const ModalHeader = styled.div`
  width: 100%;
  padding: 14px 16px;
  border-bottom: 1px solid #f1f3f6;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ModalHeaderTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  background-color: transparent;
`;
export const CloseImg = styled.img``;
// Content
export const ModalContent = styled.div`
  padding: 20px;
  text-align: center;
`;
export const ModalContentTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: inherit;

  &.confirm {
    color: inherit;
  }
  &.complete {
    color: #2d62ea;
  }
  &.delete {
    color: #fc4957;
  }
`;
export const ModalDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
  word-break: keep-all;
  line-height: 22px;
`;
// Footer
export const ModalFooter = styled.div`
  width: 100%;
  padding: 14px 0px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #f1f3f6;

  &.double > button:first-child {
    margin-right: 8px;
  }
`;

// ============= TitleSection =============
export const TitleSection = styled.div`
  width: 100%;
  height: 96px;
  padding: 24px 72px;
`;
export const breadcrumb = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  & > li:first-of-type > a {
    color: #2d62ea;
    font-weight: 700;
  }
`;
export const breadcrumbItem = styled.li`
  margin-right: 4px;

  & > a {
    color: #999;
    font-size: 12px;
    font-weight: 400;
  }
`;
export const breadcrumbArrow = styled.img`
  opacity: 0;
  vertical-align: middle;
  &.show {
    opacity: 1;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
`;
export const Title = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
export const SettingBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  outline: none;
  border: none;
`;
export const SettingIcon = styled.img``;

// ============= Tab =============
export const TabSection = styled.div``;
export const TabWrapper = styled.ul`
  width: 100%;
  height: 40px;
  padding: 0 56px;
  display: flex;
`;
export const Tab = styled.li`
  cursor: pointer;
  width: 80px;
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
    width: 56px;
    height: 2px;
    background-color: #2d62ea;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// ============= TabContent =============
export const TabContent = styled.div`
  width: 100%;
  height: calc(100vh - 186px);
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
  width: 100%;
  height: auto;
  &.grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
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

// ============= ViewOption =============
export const ViewOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Selete = styled.select`
  width: 116;
  height: 34px;
  padding: 0px 10px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background: #fff;
  margin-right: 8px;
`;
export const SeleteOption = styled.option``;
export const ViewBtnWrapper = styled.ul``;
export const ViewBtnType = styled.li``;
export const CardViewBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 6px;
  background: #2d62ea;
  outline: none;
  border: none;
  margin-right: 8px;
`;
export const CardViewIcon = styled.img`
  vertical-align: middle;
`;

export const ListViewBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background: #fff;
  outline: none;
`;
export const ListViewIcon = styled.img`
  vertical-align: middle;
`;

// ============= Pagination =============
export const Pagination = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
`;
export const BackBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #eaedf9;
  margin-right: 8px;
  outline: none;
  border: none;
  &:focus,
  &:hover {
    background-color: #d0dbff;
  }
  &.disabled {
    background: #d1d6e4;
  }
`;
export const BackBtnIcon = styled.img`
  vertical-align: middle;
`;
export const NextBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #eaedf9;
  margin-right: 8px;
  outline: none;
  border: none;
  &:focus,
  &:hover {
    background-color: #d0dbff;
  }
  &.disabled {
    background: #d1d6e4;
  }
`;
export const NextBtnIcon = styled.img`
  vertical-align: middle;
`;

export const Pager = styled.li`
  cursor: pointer;
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 6px;
  outline: none;
  background-color: #eaedf9;
  margin-right: 8px;
  &.active {
    background-color: #2d62ea;
    color: #fff;
  }
`;
