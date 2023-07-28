const TOKEN = 'token';
// const REFRESH_TOKEN = 'refreshToken';
// const USERNAME 'username',
import { TokenInfo } from '../types/auth/authType';

class LocalStorage {
  // 로컬스토리지 초기 셋팅
  static setTokenInitial() {
    return localStorage.setItem(TOKEN, JSON.stringify([]));
  }

  // 토큰 정보 저장
  static setTokenItem(data: TokenInfo) {
    const tokenInfo = {
      username: data.username,
      userToken: data.userToken,
      refreshToken: data.refreshToken,
    };
    const getTokens = localStorage.getItem(TOKEN);
    if (getTokens) {
      const dataParse = JSON.parse(getTokens);
      // 이전에 저장된 토큰은 삭제
      const newTokens = dataParse.filter((user: TokenInfo) => {
        return user.username !== data.username;
      });
      newTokens.push(tokenInfo);
      return localStorage.setItem(TOKEN, JSON.stringify(newTokens));
    }
  }

  static getTokenItem(data: TokenInfo) {
    return localStorage.getItem(TOKEN);
  }

  // 토큰 목록에서 삭제(usernam 기준) ====>>> 테스트 전임
  static deleteTokenItem(username: string) {
    const getTokens = localStorage.getItem(TOKEN);
    if (getTokens) {
      const dataParse = JSON.parse(getTokens);
      const newTokens = dataParse.filter((user: TokenInfo) => {
        return user.username !== username;
      });
      return localStorage.setItem(TOKEN, JSON.stringify(newTokens));
    }
  }
}

Object.freeze(LocalStorage);
export default LocalStorage;
