<template>
  <div class="navbar">
    <v-app-bar
      color="#26A69A"
      height="100px"
      fixed
      elevate-on-scroll
      class="navbar-generals"
    >
      <!--#region              LOGO -- IZQUIERDA    -->
      <div class="my-auto">
        <a href="/Home">
          <img
            class="img-logo mx-4"
            src="@/assets/media/logos/letrasdos.png"
            alt="XICO CLASS"
            width="200"
            height="80"
            @click="setInicio()"
          />
        </a>
      </div>
      <v-spacer></v-spacer>

      <!--#endregion-->

      <!--#region            VISTA DEL MENU DE SECCIONES EN WIDE VIEW                          -->
      <div class="hidden-sm-and-down">
        <v-row justify="space-around">
          <v-menu offset-y dark>
            <template v-slot:activator="{ on, attrs }">
              <div class="menu-text">
                <v-btn
                  id="Inicio"
                  depressed
                  plain
                  class="menu-text"
                  href="/Home"
                  @click="setInicio()"
                >
                  Inicio
                </v-btn>
                <v-btn
                  id="Avisos"
                  href="/Avisos"
                  depressed
                  plain
                  class="menu-text"
                  @click="setAvisos()"
                >
                  Avisos
                </v-btn>
                <v-btn
                  id="Biblioteca"
                  href="/Biblioteca"
                  depressed
                  plain
                  class="menu-text"
                  @click="setBiblioteca()"
                >
                  Biblioteca
                </v-btn>
                <v-btn
                  id="MiPortal"
                  href="/MiPortal"
                  depressed
                  plain
                  class="menu-text"
                  @click="setPortal()"
                >
                  Mi Portal
                </v-btn>
                <v-btn
                  id="Evaluacion"
                  href="/Evaluacion"
                  depressed
                  plain
                  class="menu-text"
                  @click="setEvaluacion()"
                >
                  Evaluación
                </v-btn>
                <v-btn
                  id="MiPerfil"
                  depressed
                  plain
                  v-bind="attrs"
                  v-on="on"
                  class="menu-text"
                >
                  Mi Perfil
                </v-btn>
              </div>
            </template>
            <v-list light>
              <v-list-item>
                <v-list-item-title
                  ><v-btn @click="setPerfil()" href="/MiPerfil" depressed plain
                    >Mi Perfil</v-btn
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><v-btn @click="CloseSession(), setInicio()" plain
                    >Cerrar Sesion</v-btn
                  ></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </div>
      <!--#endregion -->

      <!--#region            VISTA DEL MENU DE SECCIONES EN DISPOSITIVOS MOVILES               -->

      <div class="hidden-md-and-up">
        <v-menu>
          <template v-slot:activator="{ on, att }">
            <v-container>
              <v-row justify="space-around" class="mobile-container">
                <v-col cols="12">
                  <v-btn dark plain v-bind="att" v-on="on" rounded>
                    <v-icon color="white">mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title
                ><v-btn
                  id="smInicio"
                  href="/Home"
                  depressed
                  plain
                  @click="setInicio()"
                  >Inicio</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn
                  id="smAvisos"
                  href="/Avisos"
                  depressed
                  plain
                  @click="setAvisos()"
                  >Avisos</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn
                  id="smBiblio"
                  href="/Biblioteca"
                  depressed
                  plain
                  @click="setBiblioteca()"
                  >Biblioteca</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn
                  id="smPortal"
                  href="/MiPortal"
                  depressed
                  plain
                  @click="setPortal()"
                  >Mi Portal</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn
                  id="smEvaluacion"
                  href="/Evaluacion"
                  depressed
                  plain
                  @click="setEvaluacion()"
                  >Evaluación</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn
                  id="smPerfil"
                  href="/MiPerfil"
                  depressed
                  plain
                  @click="setPerfil()"
                  >Mi Perfil</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn
                  color="red"
                  @click="CloseSession(), setInicio()"
                  depressed
                  plain
                  >Cerrar Sesion</v-btn
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!--#endregion -->
    </v-app-bar>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'

export default {
  name: "navbar",
  data() {
    return {};
  },
  components: {},
  methods: {
    setInicio() {
      localStorage.selectedNavTab = 1;
    },
    setAvisos() {
      localStorage.selectedNavTab = 2;
    },
    setBiblioteca() {
      localStorage.selectedNavTab = 3;
    },
    setPortal() {
      localStorage.selectedNavTab = 4;
    },
    setPerfil() {
      localStorage.selectedNavTab = 5;
    },
    setEvaluacion() {
      localStorage.selectedNavTab = 6;
    },
    setSelected() {
      switch (localStorage.selectedNavTab) {
        case "1":
          document.getElementById("Inicio").classList.add("btn-selected");
          break;
        case "2":
          document.getElementById("Avisos").classList.add("btn-selected");
          break;
        case "3":
          document.getElementById("Biblioteca").classList.add("btn-selected");
          break;
        case "4":
          document.getElementById("MiPortal").classList.add("btn-selected");
          break;
        case "5":
          document.getElementById("MiPerfil").classList.add("btn-selected");
          break;
        case "6":
          document.getElementById("Evaluacion").classList.add("btn-selected");
          break;
        default:
          document.getElementById("Inicio").classList.add("btn-selected");
          break;
      }
    },
    setSelectedSmallView() {
      switch (localStorage.selectedNavTab) {
        case "1":
          document.getElementById("smInicio").classList.add("btn-selected");
          break;
        case "2":
          document.getElementById("smAvisos").classList.add("btn-selected");
          break;
        case "3":
          document.getElementById("smBiblio").classList.add("btn-selected");
          break;
        case "4":
          document.getElementById("smPortal").classList.add("btn-selected");
          break;
        case "5":
          document.getElementById("smPerfil").classList.add("btn-selected");
          break;
        case "6":
          document.getElementById("smEvaluacion").classList.add("btn-selected");
          break;
        default:
          document.getElementById("smInicio").classList.add("btn-selected");
          break;
      }
    },
    CloseSession() {
      window.sessionStorage.removeItem("id_alumno");
      window.sessionStorage.removeItem("nombre");
      window.sessionStorage.removeItem("appPat");
      window.sessionStorage.removeItem("appMat");
      window.sessionStorage.removeItem("fechaNac");
      window.sessionStorage.removeItem("usuario");
      window.sessionStorage.removeItem("id_grado");
      window.location.href = "/";
    },
  },
  mounted() {
    this.setSelected();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.navbar {
  display: block;
  height: 100px;
  width: 100%;
}
</style>

<style scoped>
.menu-text {
  color: white !important;
  font-size: 18px !important;
  font-family: "Poppins", sans-serif;
}
.btn-selected {
  color: #000000 !important;
}
.img-logo {
  margin-top: 7px;
}
</style>
