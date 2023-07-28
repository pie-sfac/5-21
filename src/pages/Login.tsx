import React, { useState, useEffect } from 'react';
import * as S from './Login.style';
//img
import BannerImg from '../assets/login-banner.svg';
import LoginAdminForm from '../components/login/LoginAdminForm';
import LoginEmployeeForm from '../components/login/LoginEmployeeForm';

const Login: React.FC = () => {
  const [isActiveTab, setIsActiveTab] = useState<number>(0);

  const TabArr = [
    { id: 0, value: '관리자 로그인', content: '' },
    { id: 1, value: '직원 로그인', content: '' },
  ];

  const handleTab = (idx: number) => {
    setIsActiveTab(idx);
  };

  return (
    <S.LoginWrapper>
      <S.LoginBanner>
        <S.BannerInner>
          <S.LoginBannerImg src={BannerImg} />
        </S.BannerInner>
      </S.LoginBanner>
      <S.LoginContent>
        <S.ContentInner>
          <S.LoginHeader>
            <S.LoginTitle>Welcome to PoinT</S.LoginTitle>
            <S.LoginDesc>Register your account</S.LoginDesc>
          </S.LoginHeader>
          <S.Tab>
            {TabArr.map((item) => (
              <S.TabItem
                key={item.id}
                className={item.id === isActiveTab ? 'active' : ''}
              >
                {item.value}
              </S.TabItem>
            ))}
          </S.Tab>
          {isActiveTab ? <LoginEmployeeForm /> : <LoginAdminForm />}
        </S.ContentInner>
      </S.LoginContent>
    </S.LoginWrapper>
  );
};
export default Login;
