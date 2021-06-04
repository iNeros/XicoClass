<template>
  <div class="MiPerfil">
    <navbar></navbar>
    <v-container class="pa-4">
      <v-row class="my-6">
        <v-col cols="12" class="tam-card estilo-card morado-inicial">
          <div class="elipse container mt-6">
            <img
              class="avatar container"
              src="@/assets/media/logos/CaraNiña.png"
            />
          </div>
          <v-simple-table height="400px" class="deep-purple accent-2 mt-6">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="titulo text-left">Campos</th>
                  <th class="titulo text-left">Datos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in datos" :key="item.id" class="titulo">
                  <td :bgcolor="getColor(1)">{{ item.Matricula }}</td>
                  <td :bgcolor="getColor(1)">{{ item.Matricula }}</td>
                </tr>
              </tbody>
              <tbody>
                <tr v-for="item in datos" :key="item.id" class="titulo">
                  <td :bgcolor="getColor(2)">{{ item.NombreA }}</td>
                  <td :bgcolor="getColor(2)">{{ item.NameA }}</td>
                </tr>
              </tbody>
              <tbody>
                <tr v-for="item in datos" :key="item.id" class="titulo">
                  <td :bgcolor="getColor(3)">{{ item.Curp }}</td>
                  <td :bgcolor="getColor(3)">{{ item.curp_niño }}</td>
                </tr>
              </tbody>
              <tbody>
                <tr v-for="item in datos" :key="item.id" class="titulo">
                  <td :bgcolor="getColor(4)">{{ item.FNAC }}</td>
                  <td :bgcolor="getColor(4)">{{ item.FNAC }}</td>
                </tr>
              </tbody>
              <tbody>
                <tr v-for="item in datos" :key="item.id" class="titulo">
                  <td :bgcolor="getColor(5)">{{ item.Grupo }}</td>
                  <td :bgcolor="getColor(5)">{{ item.grupo }}</td>
                </tr>
              </tbody>
              <tbody>
                <tr v-for="item in datos" :key="item.id" class="titulo">
                  <td :bgcolor="getColor(6)">{{ item.PFT }}</td>
                  <td :bgcolor="getColor(6)">{{ item.NameB }}</td>
                </tr>
              </tbody>
              <tbody>
                <tr v-for="item in datos" :key="item.id" class="titulo">
                  <td :bgcolor="getColor(7)">{{ item.ECDEL }}</td>
                  <td :bgcolor="getColor(7)">{{ item.ECDEL }}</td>
                </tr>
              </tbody>                                                                      
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>

    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import axios from 'axios'
export default {
  mounted(){
  this.Perfil();
},
  name: "MiPerfil",
  data() {
    return {
      datos:[],
    };
  },
  components: {
    navbar,
    footerHome,
  },
  methods: {
    getColor(id) {
      if (id % 2 == 0) return "#4527A0";
      else return "#7C4DFF";
    },
    //checar porque no se usa esta función, thats it
    getColorBack() {
      let a = 1;
      let b = 6;
      let numeroAleatorio = a + Math.floor(Math.random() * b);
      if (numeroAleatorio == 1) return "morado";
      else if (numeroAleatorio == 2) return "morado-claro";
      else if (numeroAleatorio == 3) return "turquesa";
      else if (numeroAleatorio == 4) return "naranja-claro";
      else if (numeroAleatorio == 5) return "verde";
      else return "morado-inicial";
    },
    Perfil() {
      axios
        .get("https://xicoclassapi.azurewebsites.net/Alumno.php?Perfil=2")
        .then((r) => {
          this.datos = r.data;
          console.log(this.datos);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");

/* Proiedades Layouts */
.tam-card {
  width: 1478px;
  height: 800px;
}
.avatar {
  display: block;
  top: 52px;
  left: 852px;
  width: 270px;
  height: 270px;
  background: no-repeat padding-box;
  opacity: 1;
}
.elipse {
  max-width: 100%;
  top: 518px;
  left: 842px;
  width: 302px;
  height: 302px;
  border-radius: 10em;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 2px 4px 6px #00000029;
  opacity: 1;
}
/* UI */
.estilo-card {
  box-shadow: 4px 6px 3px #00000029;
  border-radius: 55px;
  opacity: 1;
}
.titulo {
  font-family: "Montserrat";
  font: weight 800px;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: white;
}
.subtitulo {
  font-family: "Montserrat";
  font-weight: 600px;
  font-size: 28;
  color: white;
}
/* Colores */
.morado-inicial {
  background-color: #7c4dff;
}
.morado-opaco {
  background-color: #4527a0;
}
.morado {
  background-color: #7e57c2;
}
.morado-claro {
  background-color: #ba68c8;
}
.turquesa {
  background-color: #26a69a;
}
.naranja{
  background-color: #FF9800;
}
.naranja-claro {
  background-color: #ff9800;
}
.verde {
  background-color: #64dd17;
}
.verde-claro{
  background-color: #B2FF59;
}
.azul{
  background-color: #283593;
}
.azul-claro{
  background-color: #80D8FF;
}
.rojo{
  background-color: #D50000;
}
.rojo-claro{
  background-color: #E91E63;
}
</style>
