import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

// ============= Link =============
export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #9e9e9e;
  &:hover {
    color: #1d1d1d;
  }
`;
// ============= Form =============
export const LoginForm = styled.form`
  margin-bottom: 16px;
  margin-top: 48px;
`;
export const idContainer = styled.div`
  padding-bottom: 12px;
`;
export const idLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 12px;
`;
export const idBox = styled.div`
  width: 380px;
  height: 50px;
  padding-left: 12px;
  border-radius: 6px;
  border: 1px solid #bdccd8;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  transition: all ease-in-out 0.3s;

  &.active {
    border: 1px solid #2d62ea;
    background-color: #f2f5ff;
  }
`;
export const idIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const idInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding-left: 8px;
  &::placeholder {
    color: #bdccd8;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #ff5050;
`;

export const PasswordContainer = styled.div``;
export const PasswordBox = styled.div`
  width: 380px;
  height: 50px;
  padding-left: 12px;
  border-radius: 6px;
  border: 1px solid #bdccd8;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  transition: all ease-in-out 0.3s;

  &.active {
    border: 1px solid #2d62ea;
    background-color: #f2f5ff;
  }
`;
export const PasswordLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const PasswordIcon = styled.img``;
export const PasswordInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding-left: 8px;
  &::placeholder {
    color: #bdccd8;
  }
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  font-size: 16px;
  background: #2d62ea;
  color: #fff;
`;
// 아이디찾기 등 페이지 이동
export const DirectionWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`;
export const DirectionPage = styled.li`
  margin-right: 16px;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 10px;
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #9e9e9e;
  }
  &:last-child::after {
    display: none;
  }
`;

//employee Form

export const codeContainer = styled.div`
  padding-bottom: 12px;
`;
export const codeLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 12px;
`;
export const codeBox = styled.div`
  width: 380px;
  height: 50px;
  padding-left: 12px;
  border-radius: 6px;
  border: 1px solid #bdccd8;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  transition: all ease-in-out 0.3s;

  &.active {
    border: 1px solid #2d62ea;
    background-color: #f2f5ff;
  }
`;
export const codeIcon = styled.img`
  width: 32px;
  height: 32px;
  color: gray;
`;
export const codeInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding-left: 8px;
  &::placeholder {
    color: #bdccd8;
  }
`;
