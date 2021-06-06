<template>
  <div class="misTareas">
    <div class="container" v-for="item in Tareas" :key="item.id_actividad">
      <v-card elevation="24" class="card-container" >
        <v-card-text>
          <v-row>
            <v-col cols="8">
              <p class="display-1 titulo-tarjeta">
                #{{ item.id_actividad }} {{ item.nombre }}
              </p>
            </v-col>
            <v-col cols="4" class="status-text">
              <span class="status-label">ESTATUS: </span>
              <span id="estado-text" class="status-label estado-pendiente"
                >PENDIENTE</span
              >
            </v-col>
          </v-row>

          <div class="texto-descriptivo mx-4">
            <span style="font-size: 18px; color: #8e78ec">
              <b>Descripcion:</b>
            </span>
            <p>
              {{ item.descripcion }}
            </p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-row class="acciones" align-content="space-around">
            <v-col cols="6">
              <span class="texto-material"> MATERIAL ADJUNTO: </span>
              <!-- AQUI VA UN: V-FOR -->
              <template>
                <div v-for="archivo in archivos" :key="archivo.id_archivo">
                  <div v-if="archivo.id_actividades == item.id_actividad">
                    <v-chip
                      class="mx-2"
                      @click="DescargarArchivo(archivo.ruta)"
                    >
                      {{ archivo.nombre }}
                    </v-chip>
                  </div>
                </div>
              </template>
            </v-col>
            <v-col cols="6">
              <span class="texto-trabajo">MI TRABAJO:</span>
              <!-- AQUI SUBEN EL ARCHIVO -->
              <template v-if="archivosAlumno !== null">
                <v-chip class="ma-2">+1</v-chip>
              </template>
              <template v-if="archivosAlumno == null">
                <v-chip class="ma-2" @click="SubirArchivo()">+2</v-chip>
              </template>
              <v-btn class="boton-entregar" color="green" dark>
                Entregar
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "misTareas",
  data() {
    return {
      archivos: [],
      archivosAlumno: [],
      Tareas: [],
    };
  },
  methods: {
    DescargarArchivo(id) {
      window.open("" + id, "_blank");
    },
    SubirArchivo() {
      window.alert("si funca loco");
    },
    Tarea() {
      axios
        .get("https://xicoclassapi.azurewebsites.net/Actividades.php?id="+window.sessionStorage.getItem('id_grado'))
        .then((r) => {
          this.Tareas = r.data;
          console.log(this.Tareas);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    Archivo() {
      axios
        .get("https://xicoclassapi.azurewebsites.net/Archivos.php")
        .then((r) => {
          this.archivos = r.data;
          console.log(this.archivos);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.Tarea();
    this.Archivo();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");

.title-text {
  font-family: "Montserrat";
  font-weight: 800;
  color: white;
  font-size: 20px;
  margin-left: 20px;
}
.boton-entregar {
  float: right;
  margin-right: 20px;
}
.container {
  width: 100%;
  min-height: 300px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}
.acciones {
  padding-left: 20px;
  margin-bottom: 10px;
}
.card-container {
  width: 80%;
  min-height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.titulo-tarjeta {
  font-family: "Montserrat";
  font-weight: 800;
}
.status-text {
  text-align: right;
}
.status-label {
  font-family: "Montserrat";
  font-weight: 800;
  color: blue;
  margin-left: 10px;
}
.texto-descriptivo {
  font-family: "Montserrat";
  text-align: justify;
}
.texto-material {
  font-family: "Montserrat";
  font-weight: 800;
  color: #da37a4;
}
.texto-trabajo {
  font-family: "Montserrat";
  font-weight: 800;
  color: #30dba0;
}
/* Colores  */
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
/* Estos Estilos Los Aplicaremos Al ID: estado-text  */
.estado-pendiente {
  color: red !important;
}
.estado-entregado {
  color: green !important;
}
</style>
