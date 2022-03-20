const app = {
  namespaced: true,
  state() {
    return {
      userName: "",
    };
  },
  mutations: {
    USER_NAME(state: { userName: string }, value: string) {
      state.userName = value;
    },
  },
  //   actions: {
  //       SetUserName ({commit:any, state}) {
  //         commit('USER_NAME')
  //       }
  //   }
};

export default app;
