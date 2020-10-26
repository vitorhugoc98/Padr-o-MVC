<template>
<div>
  <div style="font-weight: bold; font-size: 20px; padding-bottom: 15px">Cadastro de Motorista </div>
  <q-input v-model="text" label="Nome" />
  <q-input v-model="text" label="CPF" />
  <q-input v-model="text" label="Carteira de trabalho" />
  <q-input v-model="text" label="Telefone" />
  <q-input v-model="text" label="E-mail" />
  <q-input v-model="text" label="Login" />
  <q-input v-model="text" label="Senha" />
</div>
</template>

<script>
    export default {
        name: "Consulta"
    }
</script>

<style scoped>

</style>
