export default {
  SET_PACKAGES(state, payload) {
    state.packages = payload;
  },
  SET_PACKAGE(state, payload) {
    console.log(payload);
    state.package = payload;
  },
  SET_MODAL_STATE(state, payload) {
    state.modalIsOpen = payload;
  },
};
