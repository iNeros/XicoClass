<template>
  <div class="home">
    <navbar></navbar>
    <div class="tab">
      <menuTabsBiblio> </menuTabsBiblio>
    </div>

    <div class="AccionWindow">
      <v-window v-model="$store.state.tabsBiblio">
        <v-window-item :value="1">
          <impreso></impreso>
        </v-window-item>
        <v-window-item :value="2">
          <visual></visual>
        </v-window-item>
        <v-window-item :value="3">
          <didactico></didactico>
        </v-window-item>
        <v-window-item :value="4">
          <xicostore></xicostore>
        </v-window-item>
      </v-window>
    </div>

    <footerHome></footerHome>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import menuTabsBiblio from "@/components/Biblioteca/menuTabs/menuTabsBiblio.vue";
import impreso from "../components/Biblioteca/windows/impreso.vue";
import visual from "../components/Biblioteca/windows/visual.vue";
import didactico from "../components/Biblioteca/windows/didactico.vue";
import xicostore from "../components/Biblioteca/windows/xicostore.vue";

export default {
  name: "Biblioteca",

  components: {
    navbar,
    footerHome,
    menuTabsBiblio,
    impreso,
    visual,
    didactico,
    xicostore,
  },
  data() {
    return {};
  },
  methods: {
    Session() {
      if (window.sessionStorage.getItem("id_alumno") == null) {
        window.location.href = "/";
      }
    },
  },
  mounted() {
    this.Session();
  },
};
</script>

<style>
.spacer {
  display: block;
  height: 20px;
}
</style>
