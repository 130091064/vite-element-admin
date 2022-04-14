import { Module } from "vuex";
import { UserState, RootState, User } from "../types";

const user: Module<UserState, RootState> = {
  namespaced: true,
  state() {
    return {
      user: {
        name: "",
      },
    };
  },
  mutations: {
    SET_USER(state: UserState, value: User) {
      state.user = value;
    },
  },
  actions: {
    SetUser({ commit }) {
      commit("SET_USER");
    },
  },
};

export default user;
