<template>
  <div class="Avisos">
    <navbar></navbar>

    <h2 style="color: #D50000" id="ods">Hoy</h2>
    <hr color="#D50000" id="od" />
    <div v-if="AvisosH.id_avisos != []">
      <v-row class="margenes">
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="3"
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
              <v-btn color="#D50000" dark @click="Enlace(user.urls)">
                Enlace
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row class="margenes">
        <v-col cols="12" sm="12" md="6" lg="3">
          <v-card class="sizes" color="#ef5350 " dark>
            <v-card-title class="ods"> Nada nuevo por aquí </v-card-title>
            <v-card-subtitle class="texto">Descripción</v-card-subtitle>
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <h2 style="color: #FF9800" id="ods">Esta semana</h2>
    <hr color="#FF9800" id="od" />
    <div v-if="AvisosS.id_avisos != []">
      <v-row class="margenes">
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="3"
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
              <v-btn text>
                {{ user.fecha }}
              </v-btn>
              <v-btn color="#FF9800" dark @click="Enlace(user.urls)">
                Enlace
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row class="margenes">
        <v-col cols="12" sm="12" md="6" lg="3">
          <v-card class="sizes" color="#FFCA28 " dark>
            <v-card-title class="ods"> Nada nuevo por aquí </v-card-title>
            <v-card-subtitle class="texto">Descripción</v-card-subtitle>
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
        lg="3"
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
            <v-btn text>
              {{ user.fecha }}
            </v-btn>
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
      AvisosH: [],
      AvisosS: [],
      AvisosM: [],
    };
  },
  methods: {
    Enlace(id) {
      window.open("" + id, "_blank");
    },
    ObtenerAvisosH() {
      axios
        .get(
          "https://xicoclassapi.azurewebsites.net/Avisos.php?tiempo=1&id_grupo="+window.sessionStorage.getItem('id_grado')
        )
        .then((r) => {
          this.AvisosH = r.data;
          console.log(this.AvisosH);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    ObtenerAvisosS() {
      axios
        .get(
          "https://xicoclassapi.azurewebsites.net/Avisos.php?tiempo=2&id_grupo="+window.sessionStorage.getItem('id_grado')
        )
        .then((r) => {
          this.AvisosS = r.data;
          console.log(this.AvisosS);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    ObtenerAvisosM() {
      axios
        .get(
          "https://xicoclassapi.azurewebsites.net/Avisos.php?tiempo=3&id_grupo="+window.sessionStorage.getItem('id_grado')
        )
        .then((r) => {
          this.AvisosM = r.data;
          console.log(this.AvisosM);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.ObtenerAvisosH();
    this.ObtenerAvisosS();
    this.ObtenerAvisosM();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
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
