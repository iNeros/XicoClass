<template>
  <div class="misDocumentos">
    <v-container>
      <v-simple-table height="400px" class="mt-6">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="titulo">Documentos</th>
              <th class="titulo">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.items" class="titulo">
              <td bgcolor="" class="titulo">{{ item.doc }}</td>
              <td bgcolor="">
                <v-btn class="ma-2" color="error" elevation="3">Eliminar</v-btn>
                <v-btn class="ma-2" color="primary" elevation="3">Subir</v-btn>
                <v-btn class="ma-2" color="success" elevation="3">Ver</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "misDocumentos",
  data: () => ({
    items: [
      {
        id: 1,
        doc: "Acta de nacimiento del Alumno",
      },
      {
        id: 2,
        doc: "CURP del Alumno",
      },
      {
        id: 3,
        doc: "CURP del papá",
      },
      {
        id: 4,
        doc: "CURP de la mamá",
      },
      {
        id: 5,
        doc: "Copia del INE del papá ",
      },
      {
        id: 6,
        doc: "Copia del INE de la mamá",
      },
       {
        id: 7,
        doc: "Comprobante domicilio",
      },
    ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");
.titulo {
  font-family: "Montserrat";
  font: weight 800;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.01px;
}
</style>
