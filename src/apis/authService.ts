import * as Api from '../utils/api.ts';

type LoginData = {
  username: string;
  password: string;
};

export const loginApi = (data: LoginData) => {
  const res = Api.login(`admins/login`, data);
  return res;
};
