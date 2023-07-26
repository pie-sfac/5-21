import axios from 'axios';

type LoginData = {
  username: string;
  password: string;
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

const serverUrl = BASE_URL + '/api/v1' + '/';

async function get(endpoint: string, params = '') {
  console.log(
    `%cGET 요청 ${serverUrl + endpoint + '/' + params}`,
    'color: #a25cd1;'
  );

  return axios.get(serverUrl + 'archive-link-categories' + '/' + params, {
    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
}

async function login(endpoint: string, data: LoginData) {
  const base64Credentials = btoa(`${data.username}:${data.password}`);
  return axios.post(serverUrl + endpoint, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${base64Credentials}`,
    },
  });
}

async function post(endpoint: string, data: {}) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  const bodyData = JSON.stringify(data);

  console.log(`%cPOST 요청: ${serverUrl + endpoint}`, 'color: #296aba;');
  console.log(`%cPOST 요청 데이터: ${bodyData}`, 'color: #296aba;');

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
}

async function put(endpoint: string, data: {}) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  const bodyData = JSON.stringify(data);
  console.log(`%cPUT 요청: ${serverUrl + endpoint}`, 'color: #059c4b;');
  console.log(`%cPUT 요청 데이터: ${bodyData}`, 'color: #059c4b;');

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
}

async function del(endpoint: string, params = '') {
  console.log(`DELETE 요청 ${serverUrl + endpoint + '/' + params}`);
  return axios.delete(serverUrl + endpoint + '/' + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
}

// 아래처럼 export한 후, import * as Api 방식으로 가져오면,
// Api.get, Api.post 로 쓸 수 있음.
export { get, post, put, del as delete, login };
