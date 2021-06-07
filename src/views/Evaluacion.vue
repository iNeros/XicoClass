<template>
  <div class="Evaluacion">
    <navbar></navbar>
    <v-container>
      <v-row class="mt-2">
        <v-col 
          cols="12" xl="4" lg="4" md="4" sm="12" xs="12"
        >
          <v-card elevation="2" color="#7e57c2" height="30em">
            <v-card-title class="titulo">
              disciplina <br />
              y conducta
            </v-card-title>
            <v-card-subtitle class="subtitulo-2">
              Hola soy el subtitulo
            </v-card-subtitle>
            <v-card-text class="cuerpo">
              <v-img
                class="cometa ml-12"
                src="@/assets/media/logos/Cometa2.png"
              >
              </v-img>
              Hola soy el cuerpo
            </v-card-text>
            <v-card-actions>
              <v-btn class="" block elevation="2"> Accion </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col 
           cols="12" xl="4" lg="4" md="4" sm="12" xs="12"
        >
          <v-card elevation="2" color="#283593" height="30em">
            <v-card-title class="titulo">
              uniforme e <br />
              higiene personal
            </v-card-title>
            <v-card-subtitle class="subtitulo-2">
              Hola soy el subtitulo
            </v-card-subtitle>
            <v-card-text class="cuerpo">
              <v-img
                class="castillo ml-12"
                src="@/assets/media/logos/Castillo.png"
              >
              </v-img>
              Hola soy el cuerpo
            </v-card-text>
            <v-card-actions>
              <v-btn class="" block elevation="2"> Accion </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col 
           cols="12" xl="4" lg="4" md="4" sm="12" xs="12"
        >
          <v-card elevation="2" color="#26a69a" height="30em">
            <v-card-title class="titulo">
              actividad de <br />
              reforzamiento
            </v-card-title>
            <v-card-subtitle class="subtitulo-2">
              Hola soy el subtitulo
            </v-card-subtitle>
            <v-card-text class="cuerpo">
              <v-img
                class="globos"
                src="@/assets/media/logos/TresGlobos.png"
              >
              </v-img>
              Hola soy el cuerpo
            </v-card-text>
            <v-card-actions>
              <v-btn class="" block elevation="2"> Accion </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          class="my-6"
          cols="12"
        >
          <v-card elevation="2" color="#64dd17">
            <v-row>
              <v-col
                cols="12" xl="4" lg="4" md="4" sm="8" xs="8"
              >
              <div class="mt-10">
                <v-card-title class="titulo-boleta">
                <h5>asistencia</h5>
              </v-card-title>
                <v-card-title class="titulo-boleta">
                <h5>retardos</h5>
              </v-card-title>
                <v-card-title class="titulo-boleta">
                <h5>participación</h5>
              </v-card-title>
              </div>
                            
              </v-col>
              <v-col
                cols="12" xl="8" lg="8" md="8" sm="4" xs="4"
              >              
              <v-simple-table id="t01">
                <template>
                  <thead>
                    <tr class="titulo"> 
                      <th>Enero</th>
                      <th>Febrero</th>
                      <th>Marzo</th>
                      <th>Abril</th>
                      <th>Mayo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="subtitulo-2">
                      <td>90</td>
                      <td>90</td>
                      <td>60</td>
                      <td>90</td>
                      <td>70</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            </v-row>
          </v-card>    
        </v-col>
      </v-row>
    </v-container>
    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "../components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
export default {
  name: "Evaluacion",
  data() {
    return {};
  },
  components: {
    navbar,
    footerHome,
  },
  methods:{
      Session(){
    if(window.sessionStorage.getItem('id_alumno')==null){
      window.location.href = "/"
      }
  }
  },
  mounted() {
    this.Session();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.titulo {
  font-family: "Poppins";
  font: weight 700px;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: white;
  text-align: justify;
  text-transform: uppercase;
}
.titulo-boleta {
  font-family: "Poppins";
  font: weight 800px;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: white;
  text-transform: uppercase;
}
.subtitulo {
  font-family: "Poppins";
  font-weight: 500px;
  font-size: 28px;
  color: white;
}
.subtitulo-2 {
  font-family: "Poppins";
  font-weight: 400px;
  font-size: 22px;
  color: white;
}
.cuerpo {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  color: white;
}
.card {
  border-radius: 55px;
}
.cometa {
  display: block;
  width: 199px;
  height: 216px;
  opacity: 1;
  background: transparent;
}
.castillo{
  width: 122px;
  height: 105px;
  opacity: 1;
  background: transparent;
}
.globos{
  width: 146px;
  height: 259px;
  opacity: 1;
  background: transparent;
}
#t01{
  background-color:  #64dd17;
  color: white;
}
</style>
