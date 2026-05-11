// Tipos de Usuario
export interface Usuario {
  id: string
  nombre: string
  correo: string
  telefono?: string
  direccion?: string
  ciudad?: string
  preferencias?: PreferenciasUsuario
  fechaCreacion: Date
}

export interface PreferenciasUsuario {
  notificaciones: boolean
  boletin: boolean
  direccionesGuardadas: Direccion[]
}

export interface Direccion {
  id: string
  etiqueta: string
  calle: string
  numero: string
  ciudad: string
  codigoPostal: string
  esPredeterminada: boolean
}

// Tipos de Autenticación
export interface PeticionLogin {
  correo: string
  contrasena: string
}

export interface PeticionRegistro {
  nombre: string
  correo: string
  contrasena: string
  confirmarContrasena: string
}

export interface RespuestaAutenticacion {
  token: string
  usuario: Usuario
}

// Tipos de Productos
export interface Producto {
  id: string
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  categoria: CategoriaProducto
  disponible: boolean
  calificacion?: number
  resenas?: Resena[]
  ingredientes?: string[]
}

export interface CategoriaProducto {
  id: string
  nombre: string
  icono?: string
  descripcion?: string
}

export interface Resena {
  id: string
  idUsuario: string
  idProducto: string
  calificacion: number
  comentario: string
  fechaCreacion: Date
}

// Tipos de Carrito
export interface ArticuloCarrito {
  id: string
  producto: Producto
  cantidad: number
  instruccionesEspeciales?: string
  fechaAgregado: Date
}

export interface Carrito {
  articulos: ArticuloCarrito[]
  subtotal: number
  impuesto: number
  total: number
}

// Tipos de Pedidos
export interface Pedido {
  id: string
  idUsuario: string
  articulos: ArticuloPedido[]
  estado: EstadoPedido
  montoTotal: number
  direccionEntrega: Direccion
  metodoPago: MetodoPago
  notas?: string
  entregaEstimada: Date
  fechaCreacion: Date
  fechaEntregado?: Date
}

export interface ArticuloPedido {
  idProducto: string
  nombreProducto: string
  cantidad: number
  precio: number
  instruccionesEspeciales?: string
}

export enum EstadoPedido {
  PENDIENTE = 'pendiente',
  CONFIRMADO = 'confirmado',
  PREPARANDO = 'preparando',
  LISTO = 'listo',
  EN_ENTREGA = 'en_entrega',
  ENTREGADO = 'entregado',
  CANCELADO = 'cancelado'
}

export const EtiquetasEstadoPedido: Record<EstadoPedido, string> = {
  [EstadoPedido.PENDIENTE]: 'Pendiente',
  [EstadoPedido.CONFIRMADO]: 'Confirmado',
  [EstadoPedido.PREPARANDO]: 'Preparando',
  [EstadoPedido.LISTO]: 'Listo',
  [EstadoPedido.EN_ENTREGA]: 'En entrega',
  [EstadoPedido.ENTREGADO]: 'Entregado',
  [EstadoPedido.CANCELADO]: 'Cancelado'
}

// Tipos de Pagos
export interface Pago {
  id: string
  idPedido: string
  monto: number
  metodo: MetodoPago
  estado: EstadoPago
  idTransaccion?: string
  fechaCreacion: Date
}

export enum MetodoPago {
  TARJETA_CREDITO = 'tarjeta_credito',
  TARJETA_DEBITO = 'tarjeta_debito',
  PAYPAL = 'paypal',
  TRANSFERENCIA_BANCARIA = 'transferencia_bancaria',
  EFECTIVO = 'efectivo'
}

export enum EstadoPago {
  PENDIENTE = 'pendiente',
  PROCESANDO = 'procesando',
  COMPLETADO = 'completado',
  FALLIDO = 'fallido',
  REEMBOLSADO = 'reembolsado'
}

// Tipos de Notificaciones
export interface Notificacion {
  id: string
  idUsuario: string
  titulo: string
  mensaje: string
  tipo: TipoNotificacion
  leida: boolean
  fechaCreacion: Date
  urlAccion?: string
}

export enum TipoNotificacion {
  ESTADO_PEDIDO = 'estado_pedido',
  PROMOCION = 'promocion',
  SISTEMA = 'sistema',
  PAGO = 'pago'
}