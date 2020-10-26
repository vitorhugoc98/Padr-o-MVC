<template>
  <div>
    <div style="font-weight: bold; font-size: 20px; padding-bottom: 15px">Cadastro de Veículo </div>
    <q-input v-model="text" label="Nome" />
    <q-input v-model="text" label="Placa" />
    <q-input v-model="text" label="Capacidade de transporte" />
    <q-input v-model="text" label="Alunos/Grupos de Alunos" />
  </div>
</template>

<script>
    export default {
        name: "CadastroVeiculo"
    }
</script>

<style scoped>

</style>
