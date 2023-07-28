import React, { useEffect, useState } from 'react';
// import { UserName } from '../style';
import { loginApi, logoutApi } from '../../apis/authService';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Logintest = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const tokens = localStorage.getItem('token');
    if (typeof tokens === 'string') {
      const loginRecently = JSON.parse(tokens);
      // console.log(loginRecently);
    }
  }, []);

  return (
    <div>
      <form>
        <input
          type="id"
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
          onClick={(e) => {
            e.preventDefault();
            const data = { username, password };
            loginApi(data);
          }}
          type="submit"
        >
          로그인
        </button>
        <Image></Image>
      </form>

      {/* //==========간편로그인 기능================// */}
      <div>
        {/* <div style={{ width: '100px', height: '50px' }}> */}
        {/* <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              // 로그인 하면 정보 저장 여부 묻기(생략)
              // 2. 로컬 스토리지에 정보가 있으면 컴포넌트 띄우기 (useContex로 데이터 관리)
              // 해당 버튼을 누르면 => 로컬스토리지의 토큰을 가져와서 세션 스토리지에 넣어주기
              // 삭제기능 : 로컬 스토리지에서 삭제하기
            }}
          >
            간편 로그인 한다! team21!!
          </button> */}
        {/* </div> */}

        <button>팀14</button>
        <button>팀21</button>
        <button>팀14</button>
        <button>팀15</button>
      </div>
    </div>
  );
};

export default Logintest;
