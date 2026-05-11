import axios from 'axios'
import type {
  Usuario,
  PeticionLogin,
  PeticionRegistro,
  RespuestaAutenticacion,
  Producto,
  Pedido,
  Pago,
  Notificacion,
} from '@/types'

const URL_BASE_API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const cliente = axios.create({
  baseURL: URL_BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Agregar token de autenticación a cada solicitud
cliente.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Servicios de Autenticación
export const servicioAutenticacion = {
  iniciarSesion: (datos: PeticionLogin) => 
    cliente.post<RespuestaAutenticacion>('/auth/login', datos),
  
  registrar: (datos: PeticionRegistro) => 
    cliente.post<RespuestaAutenticacion>('/auth/register', datos),
  
  obtenerPerfil: () => 
    cliente.get<Usuario>('/auth/profile'),
  
  actualizarPerfil: (datos: Partial<Usuario>) => 
    cliente.put<Usuario>('/auth/profile', datos),
  
  cerrarSesion: () => 
    cliente.post('/auth/logout'),
}

// Servicios de Productos
export const servicioProductos = {
  obtenerTodos: (categoria?: string) =>
    cliente.get<Producto[]>('/products', { params: { categoria } }),
  
  obtenerPorId: (id: string) => 
    cliente.get<Producto>(`/products/${id}`),
  
  obtenerCategorias: () => 
    cliente.get('/products/categories'),
}

// Servicios de Pedidos
export const servicioPedidos = {
  crear: (datosPedido: Partial<Pedido>) => 
    cliente.post<Pedido>('/orders', datosPedido),
  
  obtenerTodos: () => 
    cliente.get<Pedido[]>('/orders'),
  
  obtenerPorId: (id: string) => 
    cliente.get<Pedido>(`/orders/${id}`),
  
  actualizarEstado: (id: string, estado: string) =>
    cliente.patch(`/orders/${id}/status`, { estado }),
  
  cancelar: (id: string) => 
    cliente.post(`/orders/${id}/cancel`),
}

// Servicios de Pagos
export const servicioPagos = {
  procesar: (datosPago: Partial<Pago>) =>
    cliente.post<Pago>('/payments', datosPago),
  
  obtenerPorId: (id: string) => 
    cliente.get<Pago>(`/payments/${id}`),
  
  verificar: (id: string) => 
    cliente.get(`/payments/${id}/verify`),
}

// Servicios de Notificaciones
export const servicioNotificaciones = {
  obtenerTodas: () => 
    cliente.get<Notificacion[]>('/notifications'),
  
  marcarComoLeida: (id: string) => 
    cliente.patch(`/notifications/${id}/read`),
  
  eliminar: (id: string) => 
    cliente.delete(`/notifications/${id}`),
}

export default cliente