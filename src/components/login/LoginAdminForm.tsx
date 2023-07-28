import React, { useState, useEffect } from 'react';
import * as S from './style';
//img
import idIcon from '../../assets/icon-email.svg';
import passwordIcon from '../../assets/icon-password.svg';
import { useNavigate } from 'react-router-dom';
//api
import { loginApi, logoutApi } from '../../apis/authService';

const LoginAdminForm = () => {
    const navigation = useNavigate();

    const [id, setID] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [idError, setIdError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<string | null>(null);
    // 로그인 토큰 저장

    useEffect(() => {
        const tokens = localStorage.getItem('token');
        if (typeof tokens === 'string') {
            const loginRecently = JSON.parse(tokens);
            // console.log(loginRecently);
        }
    }, []);

    const onChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setID(event.target.value);
        if (event.target.value !== '') {
            setIdError('');
        }
    };

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        if (event.target.value !== '') {
            setPasswordError('');
        }
    };

    const onClickSubmit = () => {
        const data = { username: id, password };
        loginApi(data);
        if (!id) {
            setIsValid(false);
            setIdError('아이디를 입력해 주세요.');
        }
        if (!password) {
            setIsValid(false);
            setPasswordError('비밀번호를 입력해 주세요.');
        }
        if (id && password) {
            navigation('/record');
        }
    };

    return (
        <div>
            <S.LoginForm>
                <S.idContainer>
                    <S.idLabel>ID</S.idLabel>
                    <S.idBox className={isFocused === 'id' ? 'active' : ''}>
                        <S.idIcon src={idIcon} />
                        <S.idInput type='text' value={id} onFocus={() => setIsFocused('id')} onBlur={() => setIsFocused(null)} onChange={onChangeId} placeholder='Enter your ID' />
                    </S.idBox>
                    <S.ErrorMessage>{idError}</S.ErrorMessage>
                </S.idContainer>
                <S.PasswordContainer>
                    <S.PasswordLabel>Password</S.PasswordLabel>
                    <S.PasswordBox className={isFocused === 'password' ? 'active' : ''}>
                        <S.PasswordIcon src={passwordIcon} />
                        <S.PasswordInput
                            type='password'
                            value={password}
                            onFocus={() => setIsFocused('password')}
                            onBlur={() => setIsFocused(null)}
                            onChange={onChangePassword}
                            placeholder='Enter your Password'
                        />
                    </S.PasswordBox>
                    <S.ErrorMessage>{passwordError}</S.ErrorMessage>
                </S.PasswordContainer>
            </S.LoginForm>
            <S.LoginBtn onClick={onClickSubmit}>Login</S.LoginBtn>
            <S.DirectionWrapper>
                <S.DirectionPage>
                    <S.StyleLink to='/'>아이디 찾기</S.StyleLink>
                </S.DirectionPage>
                <S.DirectionPage>
                    <S.StyleLink to='/'>비밀번호 찾기</S.StyleLink>
                </S.DirectionPage>
                <S.DirectionPage>
                    <S.StyleLink to='/'>계정 만들기</S.StyleLink>
                </S.DirectionPage>
            </S.DirectionWrapper>
        </div>
    );
};

export default LoginAdminForm;
