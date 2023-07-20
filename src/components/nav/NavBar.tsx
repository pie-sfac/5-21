import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Logo from '../../assets/logo.svg';
import Notification from '../../assets/notifications.svg';
import Profile from '../../assets/Profile.svg';
import { Link } from 'react-router-dom';
// import GNBLeft from './GNBLeft';
import { menu } from '../commonConst/NavConst.ts';

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

const MenuBarNav = styled.nav`
  display: flex;
  width: 80%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1130px) {
    justify-content: left;
    gap: 30px;
  }
`;

const GNBUl = styled.ul`
  width: 80%;
  display: flex;
  font-size: 16px;
  @media only screen and (max-width: 1130px) {
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
  margin-left: 20px;
  margin-right: 0px;
`;

const NavBar = () => {
  const [menuLeft, setMenuLeft] = useState(false);

  const [navActive, setNavActive] = useState<number>();
  () => {
    setMenuLeft(!menuLeft);
  };
  const onClickActiveEvent = (e: any) => {
    menu.map((item) => {
      if (item.name == e.target.value) {
        setNavActive(item.id);
      }
    });
  };

  return (
    <>
      <HeaderBackDiv>
        <MenuBarNav>
          <Link to="/">
            <LogoImg src={Logo} alt="logo" />
          </Link>

          <GNBUl>
            {menu.map((li) => {
              return (
                <NavbarLink type="button" to={li.path} key={li.id}>
                  <GNBLi>
                    <input
                      type="submit"
                      value={li.name}
                      onClick={onClickActiveEvent}
                      className={li.id == navActive ? ' active' : ''}
                    />
                  </GNBLi>
                </NavbarLink>
              );
            })}
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
    </>
  );
};

export default NavBar;
