const USER_TOKEN = 'userToken';
const REFRESG_TOKEN = 'refreshToken';
// const USERNAME 'username',

class Storage {
  static setTokenItem(token: string) {
    sessionStorage.setItem(USER_TOKEN, token);
  }
  static setRefreshTokenItem(refreshToken: string) {
    sessionStorage.setItem(REFRESG_TOKEN, refreshToken);
  }
  static getTokenItem() {
    return sessionStorage.getItem(USER_TOKEN);
  }
  static getRefreshTokenItem() {
    return sessionStorage.getItem(REFRESG_TOKEN);
  }
  static clearItemAll() {
    sessionStorage.clear();
  }
}

Object.freeze(Storage);
export default Storage;
