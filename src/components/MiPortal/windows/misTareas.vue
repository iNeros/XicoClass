<template>
  <div class="misTareas">
    <div class="container" v-for="item in Tareas" :key="item.id_actividad">
      <v-card  elevation="10" class="card-container " shaped color="#f5f5f5">
          <v-row class="mt-2 mb-0 pb-0">
            <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="ml-4">
              <h1 class="tittle-text">
                #{{ item.id_actividad }} {{ item.nombre }}
              </h1>
              <span class="status-label">ESTATUS: </span>
              <span id="estado-text" class="status-label estado-pendiente"
                >PENDIENTE</span
              >
            </v-col>
          </v-row>
          <div class="texto-descriptivo mx-4">
            <span style="font-size: 18px; color: #8e78ec">
              <b>Descripción:</b>
            </span>
            <p>
              {{ item.descripcion }}
            </p>
          </div>
        <v-card-actions>
          <v-row class="acciones mx-4" align-content="space-around">
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
      window.alert("si funciona");
    },
    Tarea() {
      axios
        .get(
          "https://xicoclass.online/Actividades.php?id_grupo=" +
            window.sessionStorage.getItem("id_grado")
        )
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
        .get("https://xicoclass.online/Archivos.php")
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

.title-text {
  font-family: "Poppins";
  font-weight: 800;
  color: black;
  font-size: 60px;
  margin-left: 20px;
}
.boton-entregar {
  float: right;
  margin-right: 20px;
  font-family: "Poppins";
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
  font-family: "Poppins";
  font-weight: 800;
  color: black;
}
.status-text {
  font-family: "Poppins";
}
.status-label {
  font-family: "Poppins";
  font-weight: 800;
  color:  black;
}
.texto-descriptivo {
  font-family: "Poppins";
  text-align: justify;
  color:black;
}
.texto-material {
  font-family: "Poppins";
  font-weight: 800;
  color: #E91E63;
}
.texto-trabajo {
  font-family: "Poppins";
  font-weight: 800;
  color:  #7E57C2;
}
.v-chip{
  color: #e0e0e0;
}
/* Estos Estilos Los Aplicaremos Al ID: estado-text  */
.estado-pendiente {
  color: #D50000 !important;
}
.estado-entregado {
  color: #64DD17   !important;
}
</style>
