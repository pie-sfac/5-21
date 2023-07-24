import React, { useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { menu } from '../components/commonConst/NavConst';
// img
import logo from '../assets/Logo.svg';
import profile from '../assets/Profile.svg';
import alarm from '../assets/notifications.svg';

type Props = {};

const Header = (props: Props) => {
    const [isActive, setIsActive] = useState(0);

    return (
        <S.Header>
            <S.NavBar>
                <S.LogoImg src={logo} alt='logo-img' />
                <S.Gnb>
                    {menu.map((item) => (
                        <S.GnbItem key={item.id}>
                            <S.StyleLink
                                className={item.id === isActive ? 'active' : ''}
                                onClick={() => {
                                    setIsActive(item.id);
                                }}
                                to={item.path}
                            >
                                {item.name}
                            </S.StyleLink>
                        </S.GnbItem>
                    ))}
                </S.Gnb>
            </S.NavBar>
            <S.UserBar>
                <S.UserInfo>
                    <S.UserProfile>
                        <S.UserImg src={profile} alt='profile-img' />
                        <S.UserName>박관리자01</S.UserName>
                        <S.PlanLabel>플랜 이용중</S.PlanLabel>
                    </S.UserProfile>
                </S.UserInfo>
                <S.UserAlarm>
                    <S.AlarmImg src={alarm} alt='alarm-button-img' />
                </S.UserAlarm>
            </S.UserBar>
        </S.Header>
    );
};

export default Header;
