import { observable, action, computed } from "mobx";

class AuthStore {
  @observable access = [];
  @observable detailsId = [];

  @action addToken = token => {
    this.access.push(token);
  };

  @action setId = id => {
    this.detailsId.splice(0, 1, id);
  };

  @computed
  get currentToken() {
    return this.access.token;
  }
}

const store = new AuthStore();
export default store;
