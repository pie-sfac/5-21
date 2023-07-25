import { axiosInstance } from '../utils/axiosInstance';

export const authLoginRequest = async (username: string, password: string) => {
  const res = await axiosInstance.post('api/v1/admins/login', {
    username,
    password,
  });
  console.log('이거', res);
  return res;
};
