import * as Api from '../utils/api.ts';
import { LoginData } from '../types/auth/authType';

export const loginApi = (data: LoginData) => {
  const res = Api.login(`admins/login`, data);
  return res;
};

// refresh 토큰으로 로그아웃
// 테스트 전임
export const logoutApi = () => {
  const res = Api.logout('logout');
  console.log(res);
  return res;
};
