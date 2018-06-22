import { observable, action } from 'mobx';
import axios from 'axios';

export default class AppState {
  @observable authenticated = false;
  @observable items = [];

  @action ('fetch data') fetchData = async (path) => {
    let { data } = await axios.get(path);
    this.items = data;
  };

  @action ('clear data') clearItems = () => {
    this.items = [];
  };

  @action ('authenticate') authenticate = () => {
    this.authenticated = !this.authenticated;
  }
}
