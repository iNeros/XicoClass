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
                  <th class="titulo-tabla text-left">Campos</th>
                  <th class="titulo-tabla text-left">Datos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in datos" :key="item.campo" class="subtitulo">
                  <td :bgcolor="getColor(item.id)">{{ item.campo }}</td>
                  <td :bgcolor="getColor(item.id)">{{ item.dato }}</td>
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

export default {
  name: "MiPerfil",
  data() {
    return {
      datos: [
        {
          id: 1,
          campo: "Matricula",
          dato: "167O00561",
        },
        {
          id: 2,
          campo: "Nombre del alumno",
          dato: "Susana Distancia",
        },
        {
          id: 3,
          campo: "Curp",
          dato: "MOVO970604HVZ",
        },
        {
          id: 4,
          campo: "Fecha de nacimiento",
          dato: "16/04/2018",
        },
        {
          id: 5,
          campo: "Grupo",
          dato: "3º grado",
        },
        {
          id: 6,
          campo: "Padre de familia o Tutor",
          dato: "Elmer Homero",
        },
        {
          id: 7,
          campo: "En caso de emergencia llamar:",
          dato: "2283534791",
        },
      ],
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
    getColorBack() {
      let a = 1;
      let b = 6;
      let numeroAleatorio = a + Math.floor(Math.random() * b);
      if (numeroAleatorio == 1) return "morado";
      else if (numeroAleatorio == 2) return "morado-claro";
      else if (numeroAleatorio == 3) return "turquesa";
      else if (numeroAleatorio == 4) return "naranja";
      else if (numeroAleatorio == 5) return "verde";
      else return "morado-inicial";
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
  font-weight: 800;
  font-size: 30;
  color: white;
}
.titulo-tabla {
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 40;
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
.naranja {
  background-color: #ff9800;
}
.verde {
  background-color: #64dd17;
}
</style>
