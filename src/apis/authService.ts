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

// 비밀번호 재설정

// 로그인 기능 해야 할 것
// 로그인 기능에서 토큰 설정!!
// 로그인 토큰 어떻게 했는지 정리하기!!
// 로그아웃
// 질문!!
// 로그아웃 할 때 왜 refresh 토큰을 줘야 하는지!!!
// - 유효성 검사 : 아이디 길이 검증, 비번 검증 길이 정책 어떻게 되는지?
// 연락처 인증하기 (아이디/비밀번호 찾기)
// - 이름, 연락처 입력 -> 인증번호 받기 -> 인증번호 확인 -> ~~
// 비밀번호 찾기 - 아이디 확인 & 비밀번호 재설정

// 간편 로그인 :
// - 버튼 누르면 => 토큰 삭제되고 해당 토큰이 sessionStorage 저장
