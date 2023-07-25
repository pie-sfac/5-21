import React, { useEffect, useState } from 'react';
import { authLoginRequest } from '../../apis/authService';
import { UserName } from '../style';
import Storage from '../../storage/storage';
import { axiosInstance } from '../../utils/axiosInstance';
import axios from 'axios';

type UserData = {
  username: string;
  password: string;
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Logintest = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios
  //       .post(BASE_URL + '/api/v1/admins/login', {
  //         username,
  //         password,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  //     return response;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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

            // fetchUsers();
            authLoginRequest(username, password);
            Storage.setTokenItem('token');
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
