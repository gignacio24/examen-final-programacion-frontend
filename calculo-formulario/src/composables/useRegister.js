import { ref, computed } from 'vue'
import { validators } from '@/utils/validators'

export function useRegister() {
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const errors = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const validateFields = () => {
    errors.value.name = validators.validateName(name.value)
    errors.value.email = validators.validateEmail(email.value)
    errors.value.password = validators.validatePassword(password.value)
    errors.value.confirmPassword = validators.validatePasswordConfirm(
      password.value, 
      confirmPassword.value
    )

    return !errors.value.name && !errors.value.email && 
           !errors.value.password && !errors.value.confirmPassword
  }

  const submit = () => {
    if (validateFields()) {
      alert('El registro se ha realizado correctamente')
      reset()
      return true
    }
    return false
  }

  const reset = () => {
    name.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    errors.value = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

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
