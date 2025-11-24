<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      type="number"
      :id="id"
      class="form-control"
      :class="{ 'is-invalid': error }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :min="min"
      :max="max"
      placeholder="Ingrese la nota"
    >
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GradeInput',
  props: {
    id: String,
    label: String,
    modelValue: [String, Number],
    error: String,
    min: {
      type: Number,
      default: 10
    },
    max: {
      type: Number,
      default: 70
    }
  },
  emits: ['update:modelValue']
}
</script>
