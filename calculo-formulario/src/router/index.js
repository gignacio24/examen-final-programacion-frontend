import { createRouter, createWebHistory } from 'vue-router'
import CalculoCalificaciones from '../views/CalculoCalificaciones.vue'
import FormularioRegistro from '../views/FormularioRegistro.vue'

const routes = [
  {
    path: '/',
    name: 'CalculoCalificaciones',
    component: CalculoCalificaciones
  },
  {
    path: '/registro',
    name: 'FormularioRegistro',
    component: FormularioRegistro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router