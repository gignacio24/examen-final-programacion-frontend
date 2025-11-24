<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">Programación Front End</a>
      <div class="navbar-nav">
        <router-link 
          to="/" 
          class="nav-link"
          :class="{ active: $route.name === 'CalculoCalificaciones' }"
        >
          Cálculo de calificaciones
        </router-link>
        <router-link 
          to="/registro" 
          class="nav-link"
          :class="{ active: $route.name === 'FormularioRegistro' }"
        >
          Formulario de registro
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
}
.nav-link {
  margin-left: 1rem;
}
.nav-link.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>