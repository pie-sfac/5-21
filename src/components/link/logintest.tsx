import React, { useEffect, useState } from 'react';
// import { UserName } from '../style';
import Storage from '../../storage/storage';

import { loginApi } from '../../apis/authService';

const BASE_URL = import.meta.env.VITE_BASE_URL;

type UserToken = {
  accessToken: string;
  refreshToken: string;
  message: string;
};

const Logintest = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userToken, setUserToken] = useState<UserToken>();

  return (
    <div>
      <form>
        <input
          type="username"
          autoComplete="on"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          autoComplete="on"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={(e: any) => {
            e.preventDefault();

            const data = { username, password };
            loginApi(data);
          }}
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Logintest;
