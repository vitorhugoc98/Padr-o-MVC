<template>
  <div class="q-pa-md">
    <q-table v-if="usuarioEdicao == null"
      :dense="$q.screen.lt.md"
      title="Usuários"
      :data="data"
      :columns="columns"
      row-key="name"
    >
    <template v-slot:header="props">
      <q-tr :props="props">

        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          {{ col.label }}
        </q-th>
        <q-th auto-width>
          Oie
        </q-th>
      </q-tr>
    </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <q-btn icon="fas fa-edit" @click="Editar(props.row)"></q-btn>
            <q-btn icon="fas fa-eraser" @click="Remover(props.row.id)"></q-btn>
          </q-td>
        </q-tr>

      </template>

    </q-table>
    <Editar v-if="usuarioEdicao != null" :usuario="usuarioEdicao"></Editar>
  </div>

</template>

<script>

    import axios from 'axios';
    import Editar from "./Editar";

    export default {
        name: "Consulta",
      components: {Editar},
      data () {
        return {
          columns: [
            {
              name: 'id',
              required: true,
              label: 'Código',
              align: 'left',
              field: 'id',
              sortable: true
            },
            { name: 'nome', align: 'left', label: 'Nome do Usuário', field: 'nome', sortable: true },
            { name: 'login', align: 'left', label: 'Login', field: 'login', sortable: true },


          ],
          data:[],
          usuarioEdicao:null,
        }
      },
      mounted() {
          this.Consultar();

      },
      methods:{
          Remover(idUsuario){
            //console.log(id);
            let usuario = {id:idUsuario}
            axios.delete('http://localhost/crud/UsuarioWs/Deletar.php',{data: usuario}).then(resposta =>{
              //console.log(resposta)
              this.$q.notify(resposta.data.Mensagem);
              this.Consultar();
            });
          },
        Consultar(){
          axios.get('http://localhost/crud/UsuarioWs/Consulta.php').then(resposta =>{
            this.data = resposta.data;
          });
        },
        Editar(usuario){
            this.usuarioEdicao = usuario;
        }

      }
    }
</script>

<style scoped>

</style>
