import React, { useState } from 'react'
import { Button, Input, ErrorMessage } from '@/components/common'
import { useAuthStore } from '@/stores/authStore'
import { validarCorreo } from '@/utils/helpers'

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { estaCargando, error, limpiarError, iniciarSesion } = useAuthStore()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!email) {
      newErrors.email = 'El correo es requerido'
    } else if (!validarCorreo(email)) {
      newErrors.email = 'Ingresa un correo válido'
    }

    if (!password) {
      newErrors.password = 'La contraseña es requerida'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      await iniciarSesion(email, password)
    } catch (err) {
      console.error('Error en iniciar sesión:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <ErrorMessage message={error} onDismiss={limpiarError} />
      )}

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
        placeholder="Ingresa tu contraseña"
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm text-dark">Recuérdame</span>
        </label>
        <a href="/forgot-password" className="text-sm text-primary hover:underline">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <Button loading={estaCargando} fullWidth size="lg">
        Iniciar sesión
      </Button>

      <p className="text-center text-dark">
        ¿No tienes cuenta?{' '}
        <a href="/register" className="text-primary hover:underline">
          Regístrate aquí
        </a>
      </p>
    </form>
  )
}
