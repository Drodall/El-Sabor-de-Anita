import { create } from 'zustand'
import type { Usuario, RespuestaAutenticacion } from '@/types'

interface EstadoAutenticacion {
  usuario: Usuario | null
  token: string | null
  estaAutenticado: boolean
  estaCargando: boolean
  error: string | null
  iniciarSesion: (correo: string, contrasena: string) => Promise<void>
  registrar: (nombre: string, correo: string, contrasena: string) => Promise<void>
  cerrarSesion: () => void
  establecerUsuario: (usuario: Usuario) => void
  limpiarError: () => void
}

export const useAuthStore = create<EstadoAutenticacion>((set) => ({
  usuario: null,
  token: localStorage.getItem('auth_token'),
  estaAutenticado: !!localStorage.getItem('auth_token'),
  estaCargando: false,
  error: null,

  iniciarSesion: async (correo: string, _contrasena: string) => {
    set({ estaCargando: true, error: null })
    try {
      // TODO: Integrar con API
      const respuesta: RespuestaAutenticacion = {
        token: 'mock_token',
        usuario: {
          id: '1',
          nombre: 'Usuario Prueba',
          correo,
          fechaCreacion: new Date(),
        },
      }

      localStorage.setItem('auth_token', respuesta.token)
      set({
        usuario: respuesta.usuario,
        token: respuesta.token,
        estaAutenticado: true,
        estaCargando: false,
      })
    } catch (error) {
      const mensajeError = error instanceof Error ? error.message : 'Error al iniciar sesión'
      set({ error: mensajeError, estaCargando: false })
      throw error
    }
  },

  registrar: async (nombre: string, correo: string, _contrasena: string) => {
    set({ estaCargando: true, error: null })
    try {
      // TODO: Integrar con API
      const respuesta: RespuestaAutenticacion = {
        token: 'mock_token',
        usuario: {
          id: '1',
          nombre,
          correo,
          fechaCreacion: new Date(),
        },
      }

      localStorage.setItem('auth_token', respuesta.token)
      set({
        usuario: respuesta.usuario,
        token: respuesta.token,
        estaAutenticado: true,
        estaCargando: false,
      })
    } catch (error) {
      const mensajeError = error instanceof Error ? error.message : 'Error en el registro'
      set({ error: mensajeError, estaCargando: false })
      throw error
    }
  },

  cerrarSesion: () => {
    localStorage.removeItem('auth_token')
    set({
      usuario: null,
      token: null,
      estaAutenticado: false,
      error: null,
    })
  },

  establecerUsuario: (usuario: Usuario) => {
    set({ usuario })
  },

  limpiarError: () => {
    set({ error: null })
  },
}))