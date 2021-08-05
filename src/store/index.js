import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portalStep: 1,
    tabsBiblio: 1,
    formatosStep: 0,
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
    //MUTATIONS FOR BIBLIOTECA
    setImpresoTab(state) {
      state.tabsBiblio = 1;
    },
    setVisualTab(state) {
      state.tabsBiblio = 2;
    },
    setDidacticoTab(state) {
      state.tabsBiblio = 3;
    },
    setStoreTab(state) {
      state.tabsBiblio = 4;
    },
    // END OF MUTATIONS FOR BIBLIOTECA
  },
  actions: {},
  modules: {},
  getters: {},
});
