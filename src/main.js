import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/analytics";
import "firebase/functions";
import "firebase/storage";

Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(Vuex);
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBJ1T3z7etFCO38QpGl8UQvqcYCAWRPs6c",
  authDomain: "xicoclassproject-579bb.firebaseapp.com",
  projectId: "xicoclassproject-579bb",
  storageBucket: "xicoclassproject-579bb.appspot.com",
  messagingSenderId: "396970834685",
  appId: "1:396970834685:web:bd23a246b1676f014a9c94",
  measurementId: "G-925M3LDKTF",
};

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");

firebase.initializeApp(firebaseConfig);

const fr = firebase.firestore();
const auth = firebase.auth();
const db = firebase.database();
const analytics = firebase.analytics();
const storage = firebase.storage();

export { fr, auth, db, analytics, storage, firebase };
