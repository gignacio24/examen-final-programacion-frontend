export const validators = {
  
  validateGrade: (value) => {
    const num = Number(value)
    if (isNaN(num)) return 'La nota debe ser un número'
    if (num < 10 || num > 70) return 'La nota debe estar entre 10 y 70'
    return ''
  },

  
  validateAttendance: (value) => {
    const num = Number(value)
    if (isNaN(num)) return 'La asistencia debe ser un número'
    if (num < 0 || num > 100) return 'La asistencia debe estar entre 0% y 100%'
    return ''
  },

  
  validateName: (value) => {
    if (!value.trim()) return 'El nombre es requerido'
    if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres'
    return ''
  },

  
  validateEmail: (value) => {
    if (!value.trim()) return 'El correo es requerido'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return 'Formato de correo inválido'
    return ''
  },

  
  validatePassword: (value) => {
    if (!value.trim()) return 'el campo contraseña es requerido'
    if (value.length < 6) return 'La contraseña debe tener al menos 6 caracteres'
    return ''
  },

  
  validatePasswordConfirm: (password, confirmPassword) => {
    if (!confirmPassword.trim()) return 'el campo repetir contraseña es requerido'
    if (password !== confirmPassword) return 'Las contraseñas no coinciden'
    return ''
  }
}
