import { observable, action, computed } from "mobx";

class AuthStore {
  @observable access = [];
//   @observable login = false;

  @action addToken = token => {
    this.access.push(token);
  };

  @computed get currentToken() {
    return this.access.token;
  }
}

const store = new AuthStore();
export default store;
