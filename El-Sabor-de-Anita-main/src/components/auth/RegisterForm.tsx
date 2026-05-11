import React, { useState } from 'react'
import { Button, Input, ErrorMessage, SuccessMessage } from '@/components/common'
import { useAuthStore } from '@/stores/authStore'
import { validarCorreo, validarContrasena } from '@/utils/helpers'

export const RegisterForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const { estaCargando, error, limpiarError, registrar } = useAuthStore()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!name) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!email) {
      newErrors.email = 'El correo es requerido'
    } else if (!validarCorreo(email)) {
      newErrors.email = 'Ingresa un correo válido'
    }

    if (!password) {
      newErrors.password = 'La contraseña es requerida'
    } else {
      const validation = validarContrasena(password)
      if (!validation.valido) {
        newErrors.password = validation.errores.join(', ')
      }
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      await registrar(name, email, password)
      setSuccess(true)
      setTimeout(() => {
        window.location.href = '/menu'
      }, 2000)
    } catch (err) {
      console.error('Error en registro:', err)
    }
  }

  if (success) {
    return (
      <SuccessMessage message="¡Registro exitoso! Redirigiendo al menú..." />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <ErrorMessage message={error} onDismiss={limpiarError} />
      )}

      <Input
        label="Nombre completo"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        placeholder="Tu nombre"
      />

      <Input
        label="Correo"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        placeholder="tu@correo.com"
      />

      <Input
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        placeholder="Contraseña segura"
        helperText="Mín. 8 caracteres, mayúscula, minúscula y número"
      />

      <Input
        label="Confirmar contraseña"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errors.confirmPassword}
        placeholder="Confirma tu contraseña"
      />

      <div className="flex items-center gap-2">
        <input type="checkbox" required className="w-4 h-4" />
        <span className="text-sm text-dark">
          Acepto los <a href="/terms" className="text-primary hover:underline">términos y condiciones</a>
        </span>
      </div>

      <Button loading={estaCargando} fullWidth size="lg">
        Registrarse
      </Button>

      <p className="text-center text-dark">
        ¿Ya tienes cuenta?{' '}
        <a href="/login" className="text-primary hover:underline">
          Inicia sesión aquí
        </a>
      </p>
    </form>
  )
}
