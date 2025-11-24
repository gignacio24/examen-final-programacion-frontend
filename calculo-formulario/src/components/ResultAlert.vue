<template>
  <div v-if="result" class="mt-4">
    <div :class="alertClass" class="alert">
      <h4 class="alert-heading">Resultado</h4>
      <p><strong>Promedio:</strong> {{ result.average }}</p>
      <p><strong>Asistencia:</strong> {{ result.attendance }}%</p>
      <p><strong>Estado:</strong> {{ result.status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultAlert',
  props: {
    result: Object
  },
  computed: {
    alertClass() {
      return this.result.isApproved ? 'alert-success' : 'alert-danger'
    }
  }
}
</script>
