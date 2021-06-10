<template>
  <div class="misTramites">
    <v-window v-model="$store.state.formatosStep">
      <v-window-item :value="0">
        <v-row justify="space-around" class="rowSettings">
          <v-btn class="button-img">
            <v-img
              class="img-setings"
              src="@/assets/media/tramites-botones/btn-preInscripcion.png"
              @click="setTramiteSelected(1)"
            >
            </v-img>
          </v-btn>
          <v-btn class="button-img">
            <v-img
              class="img-setings"
              src="https://picsum.photos/id/12/600/300"
              @click="setTramiteSelected(2)"
            >
            </v-img>
          </v-btn>
          <v-btn class="button-img">
            <v-img
              class="img-setings"
              src="https://picsum.photos/id/13/700/300"
              @click="setTramiteSelected(3)"
            >
            </v-img>
          </v-btn>
          <v-btn class="button-img">
            <v-img
              class="img-setings"
              src="https://picsum.photos/id/14/600/300"
              @click="setTramiteSelected(4)"
            >
            </v-img>
          </v-btn>
          <v-btn class="button-img">
            <v-img
              class="img-setings"
              src="https://picsum.photos/id/15/600/300"
              @click="setTramiteSelected(5)"
            >
            </v-img>
          </v-btn>
          <v-btn class="button-img">
            <v-img
              class="img-setings"
              src="https://picsum.photos/id/16/600/300"
              @click="setTramiteSelected(6)"
            >
            </v-img>
          </v-btn>
        </v-row>
      </v-window-item>
      <v-window-item :value="1">
        <div class="my-12">
          <v-btn width="170" text height="60" left @click="goBackAction()">
            <v-icon left size="60"> mdi-arrow-left-bold-box-outline </v-icon>
            <span class="mx-4">REGRESAR</span>
          </v-btn>
          <div class="line-horizontal"></div>
        </div>
        <tramites-preinscripcion />
      </v-window-item>
      <v-window-item :value="2">
        <div class="my-12">
          <v-btn width="170" text height="60" left @click="goBackAction()">
            <v-icon left size="60"> mdi-arrow-left-bold-box-outline </v-icon>
            <span class="mx-4">REGRESAR</span>
          </v-btn>
          <div class="line-horizontal"></div>
        </div>
        <tramites-segunda />
      </v-window-item>

      <v-window-item :value="3">
        <div class="my-12">
          <v-btn width="170" text height="60" left @click="goBackAction()">
            <v-icon left size="60"> mdi-arrow-left-bold-box-outline </v-icon>
            <span class="mx-4">REGRESAR</span>
          </v-btn>
          <div class="line-horizontal"></div>
        </div>
        <tramites-tercera />
      </v-window-item>

      <v-window-item :value="4">
        <div class="my-12">
          <v-btn width="170" text height="60" left @click="goBackAction()">
            <v-icon left size="60"> mdi-arrow-left-bold-box-outline </v-icon>
            <span class="mx-4">REGRESAR</span>
          </v-btn>
          <div class="line-horizontal"></div>
        </div>
        <tramites-cuarta />
      </v-window-item>

      <v-window-item :value="5">
        <div class="my-12">
          <v-btn width="170" text height="60" left @click="goBackAction()">
            <v-icon left size="60"> mdi-arrow-left-bold-box-outline </v-icon>
            <span class="mx-4">REGRESAR</span>
          </v-btn>
          <div class="line-horizontal"></div>
        </div>
        <tramites-quinta />
      </v-window-item>
      <v-window-item :value="6">
        <div class="my-12">
          <v-btn width="170" text height="60" left @click="goBackAction()">
            <v-icon left size="60"> mdi-arrow-left-bold-box-outline </v-icon>
            <span class="mx-4">REGRESAR</span>
          </v-btn>
          <div class="line-horizontal"></div>
        </div>
        <tramites-sexta />
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import TramitesCuarta from "./tramites/tramitesCuarta.vue";
import TramitesPreinscripcion from "./tramites/tramitesPreinscripcion.vue";
import TramitesQuinta from "./tramites/tramitesQuinta.vue";
import TramitesSegunda from "./tramites/tramitesSegunda.vue";
import TramitesSexta from "./tramites/tramitesSexta.vue";
import TramitesTercera from "./tramites/tramitesTercera.vue";
export default {
  name: "misTramites",
  components: {
    TramitesPreinscripcion,
    TramitesSegunda,
    TramitesTercera,
    TramitesCuarta,
    TramitesQuinta,
    TramitesSexta,
  },

  data() {
    return {};
  },
  methods: {
    setTramiteSelected(num) {
      this.$store.state.formatosStep = num;
    },
    goBackAction() {
      this.$store.state.formatosStep = 0;
    },
  },
};
</script>

<style scoped>
.line-horizontal {
  height: 10px;
  width: 100%;
  border-radius: 20px;
  background-color: #26a69a;
}

.misTramites {
  width: 100%;
  margin-bottom: 20px;
}
.btnImg {
  height: auto;
  background-color: aqua;
  margin: 20px;
  height: 100px;
  width: 280px;
}
@media (min-width: 800px) {
  .misTramites {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }
}
.rowSettings {
  margin-top: 50px;
}
.button-img {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 300px !important;
  height: 120px !important;
}
.img-setings {
  width: 300px !important;
  height: 120px !important;
}
</style>
