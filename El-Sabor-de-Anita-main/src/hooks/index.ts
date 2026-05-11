import { useEffect, useState } from 'react'
import { useAuthStore } from '@/stores/authStore'

/**
 * Hook para manejar el estado de autenticación de forma sencilla
 */
export const useAutenticacion = () => {
  // Asegúrate de que en authStore.ts hayas renombrado las variables a español
  const { 
    usuario, 
    token, 
    estaAutenticado, 
    estaCargando, 
    error, 
    cerrarSesion 
  } = useAuthStore()

  return {
    usuario,
    token,
    estaAutenticado,
    estaCargando,
    error,
    cerrarSesion,
  }
}

/**
 * Hook para persistir datos en el almacenamiento local del navegador
 */
export const useAlmacenamientoLocal = (clave: string, valorInicial?: string | null) => {
  const [valorAlmacenado, setValorAlmacenado] = useState<string | null>(() => {
    try {
      const articulo = window.localStorage.getItem(clave)
      return articulo || valorInicial || null
    } catch (error) {
      console.error(`Error leyendo la clave de localStorage "${clave}":`, error)
      return valorInicial || null
    }
  })

  const setValor = (valor: string | null) => {
    try {
      if (valor === null) {
        window.localStorage.removeItem(clave)
      } else {
        window.localStorage.setItem(clave, valor)
      }
      setValorAlmacenado(valor)
    } catch (error) {
      console.error(`Error estableciendo la clave de localStorage "${clave}":`, error)
    }
  }

  return [valorAlmacenado, setValor] as const
}

/**
 * Hook para evitar que una acción se ejecute demasiadas veces seguidas
 * (Útil para barras de búsqueda)
 */
export const useAntirrebote = (valor: string, retraso: number = 300) => {
  const [valorConRetardo, setValorConRetardo] = useState(valor)

  useEffect(() => {
    const manejador = setTimeout(() => {
      setValorConRetardo(valor)
    }, retraso)

    return () => clearTimeout(manejador)
  }, [valor, retraso])

  return valorConRetardo
}