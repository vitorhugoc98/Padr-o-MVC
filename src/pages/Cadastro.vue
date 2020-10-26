<template>
  <div class="q-pa-md">
    <q-input type="text" label="Nome" v-model="Usuario.nome"></q-input>
    <q-input type="text" label="Login" v-model="Usuario.login"></q-input>
    <q-input type="password" label="Senha" v-model="Usuario.senha"></q-input>
    <br/>
    <q-btn label="Cadastrar" color="primary" @click="CadastrarUsuario"></q-btn>

  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Cadastro",
        data(){
          return{
            Usuario:{
              nome:'',
              login:'',
              senha:'',
            }

          }
        },
      methods:{
          CadastrarUsuario(){

            axios.post('http://localhost/crud/UsuarioWs/CadastroUsuario.php', this.Usuario).then(resposta =>{
              //alert(resposta.data.Mensagem);
              this.$q.notify(resposta.data.Mensagem)
            })

          }
      }
    }
</script>

<style scoped>

</style>
