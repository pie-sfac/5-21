import { axiosInstance } from '../utils/axiosInstance';

export const authLoginRequest = async (username: string, password: string) => {
  const res = await axiosInstance.post('api/v1/admins/login', {
    username,
    password,
  });
  console.log('이거', res);
  return res;
};

// // async/await를 사용하려면 useEffect를 사용해야 합니다.
// useEffect(() => {
//   // 로그인 함수를 useEffect 안에서 호출합니다.
//   const loginAdmin = async () => {
//     const apiUrl = 'http://223.130.161.221/api/v1/admins/login';
//     const credentials = {
//       username: 'team21',
//       password: 'team21!!',
//     };

//     const base64Credentials = btoa(
//       `${credentials.username}:${credentials.password}`
//     );
//     const authHeader = `Basic ${base64Credentials}`;

//     try {
//       const response = await axios.post(apiUrl, credentials, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: authHeader,
//         },
//       });

//       const data = response.data;

//       console.log('관리자 로그인 완료!');

//       setAccessToken(data.accessToken);
//     } catch (error) {
//       console.error('로그인 실패:', error);
//     }
//   };

//   // 로그인 함수 호출
//   loginAdmin();
// }, []); // 빈 배열을 전달하여 처음 한 번만 실행되도록 설정합니다.

// const createModal = () => {
//   setCreateModalOpen(true);
// };
