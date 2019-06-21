import { observable, action, computed } from "mobx";

class AuthStore {
  @observable user = {};
  @observable positions = [];

  @action toggleUserStatus() {
    return Object.assign(this.user, { authUser: !this.user.authUser });
  }

  @action setPositions = position => {
    this.positions.splice(0, 1, position);
  };

  @computed
  get currentToken() {
    return this.access.token;
  }
}

const store = new AuthStore();
export default store;
