<template>
  <div class="q-pa-md">


    <q-input type="text" label="Nome" v-model="Usuario.id" readonly></q-input>
    <q-input type="text" label="Nome" v-model="Usuario.nome"></q-input>
    <q-input type="text" label="Login" v-model="Usuario.login"></q-input>


    <br/>
    <q-btn label="Editar" color="primary" @click="EditarUsuario"></q-btn>
  </div>
</template>




<script>
  import  {Notify}  from 'quasar'
  import axios from 'axios';
  export default {
    name: "Editar",
    data(){

      return{

      }

    },
    methods:{
      EditarUsuario(){

         axios.put('http://localhost/crud/UsuarioWs/EditarUsuario.php', this.Usuario).then(resposta =>{
           this.$q.notify(resposta.data.Mensagem);
         });


        //});
      }
    },
    props:{
      Usuario: {
        type:Object,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>
