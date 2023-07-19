import React, { useState } from 'react';
import { styled } from 'styled-components';
import Logo from '../assets/logo.svg';
import Notification from '../assets/notifications.svg';
import Profile from '../assets/Profile.svg';
import { Link } from 'react-router-dom';
import Menu from '../assets/menu.svg';
// active class 적용하기
type Props = {};

const HeaderBackDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
  padding: 0px 24px;
  font-family: Pretendard;
`;

const LogoImg = styled.img`
  height: 25px;
`;

const MenuImg = styled.img`
  width: 30px;
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

const MenuBarNav = styled.nav`
  display: flex;
  width: 80%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 900px) {
    justify-content: left;
    gap: 30px;
  }
`;

const GNBUl = styled.ul`
  width: 80%;
  display: flex;
  font-size: 16px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const GNBLi = styled.li`
  margin-right: 32px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
`;

const HeaderUserInfoDiv = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-left: 1px solid #e7e7e7;
  border-right: 1px solid #e7e7e7;
`;

const ProfileDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
`;

const ProfileImg = styled.img`
  height: 35px;
`;

const NicknameSpan = styled.span`
  font-size: 16px;
  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;

const LoginStatusDiv = styled.div``;

const LoginStatusSpan = styled.span`
  background-color: #f4f4f4;
  width: 90px;
  height: 35px;
  padding-left: 13px;
  border-radius: 4px;
  color: #2d62ea;
  display: flex;
  align-items: center;
  vertical-align: center;
  font-weight: 400;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const NotificationImg = styled.img`
  width: 35px;
`;

const Header = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const getMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <HeaderBackDiv>
        <MenuBarNav>
          <Link to="/" element={<div>메인화면</div>}>
            <LogoImg src={Logo} alt="logo" />
          </Link>
          <MenuImg type="submit" src={Menu} alt="menu" onClick={getMenu} />
          <GNBUl>
            <NavbarLink to="/range">
              <GNBLi>직원 관리</GNBLi>
            </NavbarLink>
            <NavbarLink to="/range">
              <GNBLi>수강권 관리</GNBLi>
            </NavbarLink>
            <NavbarLink to="/range">
              <GNBLi>기록 관리</GNBLi>
            </NavbarLink>
            <NavbarLink to="/range">
              <GNBLi>미디어 관리</GNBLi>
            </NavbarLink>
            <NavbarLink to="/range">
              <GNBLi>운영 데이터</GNBLi>
            </NavbarLink>
            <NavbarLink to="/range">
              <GNBLi>알림 메세지</GNBLi>
            </NavbarLink>
            <NavbarLink to="/range">
              <GNBLi>센터 정보</GNBLi>
            </NavbarLink>
          </GNBUl>
        </MenuBarNav>
        <HeaderUserInfoDiv>
          <ProfileDiv>
            <ProfileImg src={Profile} alt="profile" />
            <NicknameSpan>박관리자01</NicknameSpan>
            <LoginStatusDiv>
              <LoginStatusSpan>플랜 이용중</LoginStatusSpan>
            </LoginStatusDiv>
          </ProfileDiv>
        </HeaderUserInfoDiv>
        <NotificationImg src={Notification} alt="notification" />
      </HeaderBackDiv>
      {menu ? <GNBLeft /> : null}
    </>
  );
};

const GNBLeft = () => {
  const GNBLeftBack = styled.div`
    height: 50px;
    width: 100%;
  `;
  const GNBLeftUl = styled.ul`
    display: flex;
    font-size: 16px;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;
    height: 50px;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
  `;

  const GNBLeftLi = styled.li`
    margin-right: 32px;
  `;

  const NavbarLeftLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <GNBLeftBack>
      <GNBLeftUl>
        <NavbarLeftLink to="/range">
          <GNBLeftLi>직원 관리</GNBLeftLi>
        </NavbarLeftLink>
        <NavbarLeftLink to="/range">
          <GNBLeftLi>수강권 관리</GNBLeftLi>
        </NavbarLeftLink>
        <NavbarLeftLink to="/range">
          <GNBLeftLi>기록 관리</GNBLeftLi>
        </NavbarLeftLink>
        <NavbarLeftLink to="/range">
          <GNBLeftLi>미디어 관리</GNBLeftLi>
        </NavbarLeftLink>
        <NavbarLeftLink to="/range">
          <GNBLeftLi>운영 데이터</GNBLeftLi>
        </NavbarLeftLink>
        <NavbarLeftLink to="/range">
          <GNBLeftLi>알림 메세지</GNBLeftLi>
        </NavbarLeftLink>
        <NavbarLeftLink to="/range">
          <GNBLeftLi>센터 정보</GNBLeftLi>
        </NavbarLeftLink>
      </GNBLeftUl>
    </GNBLeftBack>
  );
};

export default Header;
