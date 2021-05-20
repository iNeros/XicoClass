<template>
  <div class="navbar">
    <v-app-bar
      color="#5D576B"
      height="100px"
      dense
      fixed
      dark
      class="navbar-generals"
    >
      <!--#region              LOGO -- IZQUIERDA    -->
      <div class="img-logo mx-5">
        <img
          class="mx-10"
          src="@/assets/media/logos/letras.png"
          alt="XICO CLASS"
          width="200"
          height="80"
        />
      </div>
      <v-spacer></v-spacer>

      <!--#endregion-->

      <!--#region            VISTA DEL MENU DE SECCIONES EN WIDE VIEW                          -->
      <div class="hidden-sm-and-down mx-12">
        <v-row justify="space-around">
          <v-menu offset-y dark>
            <template v-slot:activator="{ on, attrs }">
              <div class="menu-text">
                <v-btn
                  id="Inicio"
                  href="/Home"
                  depressed
                  plain
                  class="menu-text"
                  @click="CambiarColor(), (seleccionado = 1)"
                >
                  Inicio
                </v-btn>
                <v-btn
                  id="Avisos"
                  href="/Avisos"
                  depressed
                  plain
                  class="menu-text"
                   @click="CambiarColor(), (seleccionado = 2)"
                >
                  Avisos
                </v-btn>
                <v-btn
                  id="Biblioteca"
                  href="/Biblioteca"
                  depressed
                  plain
                  class="menu-text"
                   @click="CambiarColor(), (seleccionado = 3)"
                >
                  Biblioteca
                </v-btn>
                <v-btn
                  id="MiPortal"
                  href="/MiPortal"
                  depressed
                  plain
                  class="menu-text"
                   @click="CambiarColor(), (seleccionado = 4)"
                >
                  Mi Portal
                </v-btn>
                <v-btn
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
                  ><v-btn href="/MiPerfil" depressed plain
                    >Mi Perfil</v-btn
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><v-btn href="/" depressed plain
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
            <v-btn dark plain v-bind="att" v-on="on" rounded>
              <v-icon color="white">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title
                ><v-btn
                  id="navbar-inicio"
                  class="btn-selected"
                  href="/Home"
                  depressed
                  plain
                  >Inicio</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn id="navbar-avisos" href="/avisos" depressed plain
                  >Avisos</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn id="navbar-biblio" href="/Biblioteca" depressed plain
                  >Biblioteca</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn id="navbar-portal" href="/MiPortal" depressed plain
                  >Mi Portal</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn id="navbar-perfil" href="/MiPerfil" depressed plain
                  >Mi Perfil</v-btn
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><v-btn color="red" href="/" depressed plain
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

  components: {},
  methods: {
    CambiarColor() {
      switch (this.seleccionado) {
        case 1:
          document.getElementById("Inicio").classList.add("btn-selected");
          break;
        case 2:
          document.getElementById("Avisos").classList.add("btn-selected");
          break;
        case 3:
          document.getElementById("Biblioteca").classList.add("btn-selected");
          break;
        case 4:
          document.getElementById("MiPortal").classList.add("btn-selected");
          break;
        default:
          document.getElementById("Inicio").classList.add("btn-selected");
          break;
      }
    },
  },
  data() {
    return {
      seleccionado: "",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
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
  font-family: "Montserrat", sans-serif;
}
.btn-selected {
  color: #30dba0 !important;
}
</style>
