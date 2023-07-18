import * as React from 'react';
import { styled } from 'styled-components';
import Logo from '../assets/logo.svg';
import Notification from '../assets/notifications.svg';
import Profile from '../assets/Profile.svg';

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

const MenuBarDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

const GNBUl = styled.ul`
  width: 80%;
  display: flex;
  & > li {
    margin-right: 32px;
  }
`;

const HeaderUserInfoDiv = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ProfileDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImg = styled.img`
  height: 35px;
`;

const NicknameH2 = styled.h2``;

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
`;

const NotificationImg = styled.img`
  width: 35px;
`;

const Header = (props: Props) => {
  return (
    <HeaderBackDiv>
      <MenuBarDiv>
        <LogoImg src={Logo} alt="logo" />
        <GNBUl>
          <li>직원 관리</li>
          <li>수강권 관리</li>
          <li>기록 관리</li>
          <li>미디어 관리</li>
          <li>운영 데이터</li>
          <li>알림 메세지</li>
          <li>센터 정보</li>
        </GNBUl>
      </MenuBarDiv>
      <HeaderUserInfoDiv>
        <ProfileDiv>
          <ProfileImg src={Profile} alt="profile" />
          <NicknameH2>박관리자01</NicknameH2>
          <LoginStatusDiv>
            <LoginStatusSpan>플랜 이용중</LoginStatusSpan>
          </LoginStatusDiv>
        </ProfileDiv>
        <NotificationImg src={Notification} alt="notification" />
      </HeaderUserInfoDiv>
    </HeaderBackDiv>
  );
};

export default Header;
