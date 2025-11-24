<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h2 class="h4 mb-0">Formulario de Registro</h2>
          </div>
          <div class="card-body">
            <TextInput
              id="name"
              label="Nombre"
              v-model="name"
              :error="errors.name"
              placeholder="Ingrese su nombre completo"
            />
            <TextInput
              id="email"
              label="Correo"
              type="email"
              v-model="email"
              :error="errors.email"
              placeholder="Ingrese su correo electrónico"
            />
            <TextInput
              id="password"
              label="Contraseña"
              type="password"
              v-model="password"
              :error="errors.password"
              placeholder="Ingrese su contraseña"
            />
            <TextInput
              id="confirmPassword"
              label="Repetir Contraseña"
              type="password"
              v-model="confirmPassword"
              :error="errors.confirmPassword"
              placeholder="Confirme su contraseña"
            />
            
            <div class="d-grid gap-2">
              <button @click="submit" class="btn btn-primary">
                Enviar
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRegister } from '@/composables/useRegister'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'FormularioRegistro',
  components: {
    TextInput
  },
  setup() {
    const {
      name,
      email,
      password,
      confirmPassword,
      errors,
      submit,
      reset
    } = useRegister()

    return {
      name,
      email,
      password,
      confirmPassword,
      errors,
      submit,
      reset
    }
  }
}
</script>
