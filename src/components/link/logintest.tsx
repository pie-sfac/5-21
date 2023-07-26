import React, { useEffect, useState } from 'react';
import { authLoginRequest } from '../../apis/authService';
import { UserName } from '../style';
import Storage from '../../storage/storage';
import { axiosInstance } from '../../utils/axiosInstance';
import axios from 'axios';
import * as Api from '../../api.ts';

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
          onClick={async (e: any) => {
            e.preventDefault();

            const data = { username, password };
            const base64Credentials = btoa(`${data.username}:${data.password}`);
            axios
              .post(`${BASE_URL}/api/v1/admins/login`, data, {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Basic ${base64Credentials}`,
                },
              })
              .then((res) => setUserToken(res.data));

            const AccessToken = userToken?.accessToken;
            const RefreshToken = userToken?.refreshToken;
            AccessToken && Storage.setTokenItem(AccessToken);
            RefreshToken && Storage.setRefreshTokenItem(RefreshToken);
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
