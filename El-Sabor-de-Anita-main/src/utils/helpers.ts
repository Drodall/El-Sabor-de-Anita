/**
 * Formatea un número como moneda en formato chileno (CLP)
 */
export const formatearMoneda = (monto: number): string => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(monto)
}

/**
 * Formatea una fecha en formato legible
 */
export const formatearFecha = (fecha: Date | string): string => {
  const d = typeof fecha === 'string' ? new Date(fecha) : fecha
  return new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}

/**
 * Valida un correo electrónico
 */
export const validarCorreo = (correo: string): boolean => {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regexCorreo.test(correo)
}

/**
 * Valida un número de teléfono chileno
 */
export const validarTelefono = (telefono: string): boolean => {
  const regexTelefono = /^(\+56|56|0)?[9]?[\d{1}]\d{7}$/
  return regexTelefono.test(telefono.replace(/\s|-/g, ''))
}

/**
 * Valida una contraseña (mínimo 8 caracteres, mayúscula, minúscula, número)
 */
export const validarContrasena = (contrasena: string): {
  valido: boolean
  errores: string[]
} => {
  const errores: string[] = []

  if (contrasena.length < 8) {
    errores.push('Mínimo 8 caracteres')
  }
  if (!/[A-Z]/.test(contrasena)) {
    errores.push('Al menos una mayúscula')
  }
  if (!/[a-z]/.test(contrasena)) {
    errores.push('Al menos una minúscula')
  }
  if (!/[0-9]/.test(contrasena)) {
    errores.push('Al menos un número')
  }

  return {
    valido: errores.length === 0,
    errores,
  }
}

/**
 * Trunca un texto a una longitud máxima
 */
export const truncarTexto = (texto: string, longitudMaxima: number): string => {
  if (texto.length <= longitudMaxima) return texto
  return texto.slice(0, longitudMaxima) + '...'
}

/**
 * Genera un identificador único
 */
export const generarId = (): string => {
  // Nota: Cambiado 'substr' a 'substring' ya que substr está deprecado en TypeScript/JavaScript moderno
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`
}

/**
 * Calcula el tiempo transcurrido desde una fecha
 */
export const obtenerTiempoTranscurrido = (fecha: Date | string): string => {
  const d = typeof fecha === 'string' ? new Date(fecha) : fecha
  const ahora = new Date()
  const segundos = Math.floor((ahora.getTime() - d.getTime()) / 1000)

  if (segundos < 60) return 'hace unos segundos'
  const minutos = Math.floor(segundos / 60)
  if (minutos < 60) return `hace ${minutos}m`
  const horas = Math.floor(minutos / 60)
  if (horas < 24) return `hace ${horas}h`
  const dias = Math.floor(horas / 24)
  if (dias < 30) return `hace ${dias}d`
  const meses = Math.floor(dias / 30)
  if (meses < 12) return `hace ${meses}m`
  const anos = Math.floor(meses / 12)
  return `hace ${anos}a`
}

/**
 * Calcula el IVA chileno (19%)
 */
export const calcularImpuesto = (monto: number): number => {
  return Math.round(monto * 0.19)
}

/**
 * Calcula el total incluyendo IVA
 */
export const calcularTotal = (subtotal: number): { impuesto: number; total: number } => {
  const impuesto = calcularImpuesto(subtotal)
  return {
    impuesto,
    total: subtotal + impuesto,
  }
}