<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h2 class="h4 mb-0">Cálculo de Calificaciones</h2>
          </div>
          <div class="card-body">
            <GradeInput
              id="grade1"
              label="Nota 1"
              placeholder="Nota 1"
              v-model="grade1"
              :error="errors.grade1"
            />
            <GradeInput
              id="grade2"
              label="Nota 2"
              placeholder="Nota 2"
              v-model="grade2"
              :error="errors.grade2"
            />
            <GradeInput
              id="grade3"
              label="Nota 3"
              placeholder="Nota 3"
              v-model="grade3"
              :error="errors.grade3"
            />
            <div class="mb-3">
              <label for="attendance" class="form-label">Asistencia (%)</label>
              <input
                type="number"
                id="attendance"
                class="form-control"
                :class="{ 'is-invalid': errors.attendance }"
                v-model="attendance"
                min="0"
                max="100"
                placeholder="asistencia"
              >
              <div v-if="errors.attendance" class="invalid-feedback">
                {{ errors.attendance }}
              </div>
            </div>
            
            <div class="d-grid gap-2">
              <button @click="calculate" class="btn btn-primary">
                Calcular
              </button>
             
            </div>

            <ResultAlert :result="result" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGrades } from '@/composables/useGrades'
import GradeInput from '@/components/GradeInput.vue'
import ResultAlert from '@/components/ResultAlert.vue'

export default {
  name: 'CalculoCalificaciones',
  components: {
    GradeInput,
    ResultAlert
  },
  setup() {
    const {
      grade1,
      grade2,
      grade3,
      attendance,
      result,
      errors,
      calculate,
      reset
    } = useGrades()

    return {
      grade1,
      grade2,
      grade3,
      attendance,
      result,
      errors,
      calculate,
      reset
    }
  }
}
</script>
