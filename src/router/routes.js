const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')},
      {path: 'Login', component: () => import('pages/Login.vue')},
      {path: 'CadastroMotorista', component: () => import('pages/Cadastros/CadastroMotorista.vue')},
      {path: 'CadastroVeiculo', component: () => import('pages/Cadastros/CadastroVeiculo.vue')},
      {path: 'CadastroAluno', component: () => import('pages/Cadastros/CadastroAluno.vue')},
      {path: 'Consulta', component: () => import('pages/Consulta.vue')},
      {path: 'CadastroUsuarios', component: () => import('pages/Cadastro.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
