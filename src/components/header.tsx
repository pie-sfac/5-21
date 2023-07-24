import * as React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
// img
import logo from '../assets/Logo.svg';
import profile from '../assets/Profile.svg';
import alarm from '../assets/notifications.svg';

type Props = {};

const header = (props: Props) => {
    return (
        <S.Header>
            <S.NavBar>
                <S.LogoImg src={logo} alt='logo-img' />
                <S.Gnb>
                    <S.GnbItem>
                        <S.StyleLink to='/'>직원 관리</S.StyleLink>
                    </S.GnbItem>
                    <S.GnbItem>
                        <S.StyleLink to='/'>수강권 관리</S.StyleLink>
                    </S.GnbItem>
                    <S.GnbItem>
                        <S.StyleLink to='/record'>기록 관리</S.StyleLink>
                    </S.GnbItem>
                    <S.GnbItem>
                        <S.StyleLink to='/link/clips'>미디어 관리</S.StyleLink>
                    </S.GnbItem>
                    <S.GnbItem>
                        <S.StyleLink to='/'>운영 데이터</S.StyleLink>
                    </S.GnbItem>
                    <S.GnbItem>
                        <S.StyleLink to='/'>알림메시지</S.StyleLink>
                    </S.GnbItem>
                    <S.GnbItem>
                        <S.StyleLink to='/'>센터 정보</S.StyleLink>
                    </S.GnbItem>
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

export default header;
