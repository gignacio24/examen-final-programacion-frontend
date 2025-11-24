<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      class="form-control"
      :class="{ 'is-invalid': error }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    >
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    modelValue: String,
    error: String,
    placeholder: String
  },
  emits: ['update:modelValue']
}
</script>
