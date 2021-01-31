export const state = () => ({
  auth: false,
});

export const getters = {
  isAuth: (state) => state.auth,
};

export const mutations = {
  setAuth: (state) => (state.auth = true),
};
