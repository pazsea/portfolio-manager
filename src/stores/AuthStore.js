import { observable, action, computed } from "mobx";

class AuthStore {
  @observable access = [];
  @observable positions = [];

  @action addToken = token => {
    this.access.push(token);
  };

  @action setPositions = ( position ) => {
    this.positions.splice(0, 1, position);
  };

  @computed
  get currentToken() {
    return this.access.token;
  }
}

const store = new AuthStore();
export default store;
