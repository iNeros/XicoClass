<template>
  <div class="Avisos">
    <navbar></navbar>

    <h2 style="color: #d50000" id="ods">Hoy</h2>
    <hr color="#D50000" id="od" />
    <div v-show="Var">
      <v-row class="margenes">
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
          v-for="user in AvisosH"
          :key="user.id_avisos"
        >
          <v-card class="sizes" color="#ef5350" dark elevation="5">
            <v-card-title class="ods">
              {{ user.nombre }}
            </v-card-title>
            <v-card-subtitle class="texto">{{
              user.descripcion
            }}</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#D50000" dark @click="Enlace(user.urls)">
                Enlace
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div v-if="AvisosH == ''">
      <v-row class="margenes">
        <v-col cols="12" sm="12" md="6" lg="4" xl="3">
          <v-card class="sizes" color="#ef5350 " dark>
            <v-card-title class="ods"> Nada nuevo por aquí </v-card-title>
            <v-card-subtitle class="texto"
              >No hay avisos nuevos el día de hoy</v-card-subtitle
            >
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <h2 style="color: #ff9800" id="ods">Esta semana</h2>
    <hr color="#FF9800" id="od" />
    <div v-show="Var2">
      <v-row class="margenes">
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
          v-for="user in AvisosS"
          :key="user.id_avisos"
        >
          <v-card class="sizes" color="#FFCA28" dark elevation="5">
            <v-card-title class="ods">
              {{ user.nombre }}
            </v-card-title>
            <v-card-subtitle class="texto">{{
              user.descripcion
            }}</v-card-subtitle>
            <v-card-actions>
              <div class="ml-2">
                <!-- ESTOS DEBERIAN SER DIVS NO BOTONES WTF, simon pero ya se despedorró el diseño, mejor botón -->
                {{ user.fecha }}
              </div>
              <v-spacer></v-spacer>
              <v-btn color="#FF9800" dark @click="Enlace(user.urls)">
                Enlace
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-if="AvisosS == ''">
      <v-row class="margenes">
        <v-col cols="12" sm="12" md="6" lg="4" xl="3">
          <v-card class="sizes" color="#FFCA28 " dark>
            <v-card-title class="ods"> Nada nuevo por aquí </v-card-title>
            <v-card-subtitle class="texto"
              >No hay avisos nuevos avisos esta semana.</v-card-subtitle
            >
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <h2 style="color: #00c853" id="ods">Ultimos meses</h2>
    <hr color="#00c853" id="od" />
    <v-row class="margenes mb-4">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        xl="3"
        v-for="user in AvisosM"
        :key="user.id_avisos"
      >
        <v-card class="sizes" color="#64dd17" dark elevation="5">
          <v-card-title class="ods">
            {{ user.nombre }}
          </v-card-title>
          <v-card-subtitle class="texto">{{
            user.descripcion
          }}</v-card-subtitle>
          <v-card-actions>
            <div class="ml-2">
              {{ user.fecha }}
            </div>
            <v-spacer></v-spacer>
            <v-btn color="#00c853" dark @click="Enlace(user.urls)">
              Enlace
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import axios from "axios";

export default {
  name: "avisos",

  components: {
    navbar,
    footerHome,
  },
  data() {
    return {
      Var: true,
      Var2: true,
      AvisosH: "",
      AvisosS: "",
      AvisosM: "",
    };
  },
  methods: {
    Enlace(id) {
      if (id != "") {
        window.open("" + id, "_blank");
      } else {
        return 0;
      }
    },
    ObtenerAvisosH() {
      axios
        .get(
          "https://xicoclass.online/Avisos.php?tiempo=1&id_grupo=" +
            window.sessionStorage.getItem("id_grado")
        )
        .then((r) => {
          this.AvisosH = r.data;
          if (this.AvisosH.length == 0) {
            this.Var = false;
          } //console.log(this.AvisosH);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    ObtenerAvisosS() {
      axios
        .get(
          "https://xicoclass.online/Avisos.php?tiempo=2&id_grupo=" +
            window.sessionStorage.getItem("id_grado")
        )
        .then((r) => {
          this.AvisosS = r.data;
          if (this.AvisosS.length == 0) {
            this.Var2 = false;
          } //console.log(this.AvisosS);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    ObtenerAvisosM() {
      axios
        .get(
          "https://xicoclass.online/Avisos.php?tiempo=3&id_grupo=" +
            window.sessionStorage.getItem("id_grado")
        )
        .then((r) => {
          this.AvisosM = r.data;
          //console.log(this.AvisosM);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    Session() {
      if (window.sessionStorage.getItem("id_alumno") == null) {
        window.location.href = "/";
      }
    },
  },
  mounted() {
    this.ObtenerAvisosH();
    this.ObtenerAvisosS();
    this.ObtenerAvisosM();
    this.Session();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.v-text-field {
  margin-left: 20px;
  margin-right: 20px;
}
#od {
  margin-left: 20px;
  margin-right: 20px;
  height: 5px;
  color: #f45b69;
}
#ods {
  font-family: "Poppins";
  margin-left: 20px;
  margin-right: 20px;
}
.v-card {
  font-family: "Poppins";
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.margenes {
  margin-right: 30px;
  margin-left: 20px;
  min-height: 280px;
}
.sizes {
  min-height: 250px;
  max-height: 250px;
}
.texto {
  height: 150px;
  overflow-y: auto;
}
</style>
