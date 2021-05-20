import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portalStep: 1,
  },
  mutations: {
    //MUTATIONS FOR MI PORTAL
    setMisMaterias(state) {
      state.portalStep = 1;
    },
    setMisTareas(state) {
      state.portalStep = 2;
    },
    setMisDocumentos(state) {
      state.portalStep = 3;
    },
    setMisTramites(state) {
      state.portalStep = 4;
    },
    // END OF MUTATIONS FOR MI PORTAL
  },
  actions: {},
  modules: {},
  getters: {},
});
