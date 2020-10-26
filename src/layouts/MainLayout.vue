<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Smart Bus
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-item clickable v-ripple to="CadastroAluno">
          <q-item-section avatar>
            <q-icon color="black" name="fas fa-user-plus" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastro de Aluno</q-item-label>
            <q-item-label caption>Cadastrar Aluno</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="CadastroUsuarios">
          <q-item-section avatar>
            <q-icon color="black" name="fas fa-file-signature" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastrar Usuario</q-item-label>
            <q-item-label caption>Cadastrar usuário</q-item-label>
          </q-item-section>
        </q-item>


        <q-item clickable v-ripple to="Consulta">
          <q-item-section avatar>
            <q-icon color="black" name="fas fa-users" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Consulta de Usuários</q-item-label>
            <q-item-label caption>Consultar usuários</q-item-label>
          </q-item-section>
        </q-item>


        <q-item clickable v-ripple to="CadastroMotorista">
          <q-item-section avatar>
            <q-icon color="black" name="fas fa-user-tie" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastro de Motorista</q-item-label>
            <q-item-label caption>Cadastrar Motorista</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="CadastroVeiculo">
          <q-item-section avatar>
            <q-icon color="black" name="fas fa-bus" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastro de Veículo</q-item-label>
            <q-item-label caption>Cadastrar Veículo</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Login',
          caption: 'Realizar Login',
          icon: 'fas fa-sign',
          link: 'Login'
        }
      ]
    }
  }
}
</script>
