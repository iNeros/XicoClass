<template>
  <div class="misTareas">
    <div class="container" v-for="item in Tareas" :key="item.id_actividad">
      <v-card elevation="10" class="card-container" shaped color="#f5f5f5">
        <v-row class="mt-2 mb-0 pb-0">
          <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="ml-4">
            <h1 class="tittle-text">
              #{{ item.id_actividad }} {{ item.nombre }}
            </h1>
            <span class="status-label">ESTATUS: </span>
            <span id="estado-text" class="status-label estado-pendiente"
              >{{item.estado}}</span
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
            <v-col
              cols="12" xl="6" lg="6" md="6" sm="6" xs="6"
              v-for="arch in archivosAlumno"
              :key="arch.id_archivos_alumnos"
            >
              <span class="texto-trabajo">MI TRABAJO:</span>
              <!-- AQUI SUBEN EL ARCHIVO -->
              <template v-if="arch.id_actividad == item.id_actividad">
                <v-chip class="ma-2" @click="DescargarArchivo(arch.ruta)"
                  >{{ arch.nombre }}
                </v-chip>
              </template>
              <template>
                <v-file-input class="ma-2" v-model="archivoA" 
                hide-input
                show-size
                prepend-icon="mdi-upload"
                  ></v-file-input>
              </template>                            
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="6" sm="6" xs="6">
              <v-btn
                class="boton-entregar"
                color="green"
                dark
                @click="SubirArchivo()"
              >
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
//import firebase from 'firebase';

export default {
  name: "misTareas",
  data() {
    return {
      archivos: [],
      archivosAlumno: "",
      Tareas: [],
      archivoA: "",
    };
  },
  methods: {
    DescargarArchivo(id) {
      window.open("" + id, "_blank");
    },
    SubirArchivo() {
      /*  const storageRef = firebase.storage().ref(`/ArchivosAlumnos/1/${this.archivoA}`);
        const task = storageRef.put(this.archivoA);

        task.on('state_changed',snapshot =>{
          let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          this.uploadValue = percentage;
        }, error=>{console.log(error.message)},
          ()=>{this.uploadValue=100;
          //OBTENER EL LINK
            task.snapshot.ref.getDownloadURL().then((url)=> {
              this.urlFile[i] = url;
              console.log(this.urlFile[i]);
            });;
          });; */
      window.alert("Archivo subido");
      console.log(this.archivoA.name);
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
    ArchivoAlumno() {
      axios
        .get(
          "https://xicoclass.online/ArchivosAlumnos.php?id_alumno=" +
            window.sessionStorage.getItem("id_alumno")
        )
        .then((r) => {
          this.archivosAlumno = r.data;
          console.log(this.archivosAlumno);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.Tarea();
    this.Archivo();
    this.ArchivoAlumno();
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
  color: black;
}
.texto-descriptivo {
  font-family: "Poppins";
  text-align: justify;
  color: black;
}
.texto-material {
  font-family: "Poppins";
  font-weight: 800;
  color: #e91e63;
}
.texto-trabajo {
  font-family: "Poppins";
  font-weight: 800;
  color: #7e57c2;
}
.v-chip {
  color: #e0e0e0;
}
/* Estos Estilos Los Aplicaremos Al ID: estado-text  */
.estado-pendiente {
  color: #d50000 !important;
}
.estado-entregado {
  color: #64dd17 !important;
}
</style>
