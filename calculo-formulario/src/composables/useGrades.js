import { ref, computed } from 'vue'
import { validators } from '@/utils/validators'
import { calculations } from '@/utils/calculations'

export function useGrades() {
  const grade1 = ref('')
  const grade2 = ref('')
  const grade3 = ref('')
  const attendance = ref('')
  const result = ref(null)
  const errors = ref({
    grade1: '',
    grade2: '',
    grade3: '',
    attendance: ''
  })

  const validateFields = () => {
    errors.value.grade1 = validators.validateGrade(grade1.value)
    errors.value.grade2 = validators.validateGrade(grade2.value)
    errors.value.grade3 = validators.validateGrade(grade3.value)
    errors.value.attendance = validators.validateAttendance(attendance.value)

    return !errors.value.grade1 && !errors.value.grade2 && 
           !errors.value.grade3 && !errors.value.attendance
  }

  const calculate = () => {
    if (!validateFields()) {
      result.value = null
      return
    }

    const average = calculations.calculateWeightedAverage(
      Number(grade1.value),
      Number(grade2.value),
      Number(grade3.value)
    )

    const isApproved = calculations.determineApproval(average, Number(attendance.value))

    result.value = {
      average,
      attendance: Number(attendance.value),
      status: isApproved ? 'Aprobado' : 'Reprobado',
      isApproved
    }
  }

  const reset = () => {
    grade1.value = ''
    grade2.value = ''
    grade3.value = ''
    attendance.value = ''
    result.value = null
    errors.value = {
      grade1: '',
      grade2: '',
      grade3: '',
      attendance: ''
    }
  }

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
