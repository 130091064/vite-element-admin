import { createStore, StoreOptions } from "vuex";
import { RootState } from "./types";
import user from "./modules/user";

const store: StoreOptions<RootState> = createStore({
  state: {
    version: '1.0.0',
    language: 'zh'
  },
  modules: {
    user,
  },
});

export default store;
