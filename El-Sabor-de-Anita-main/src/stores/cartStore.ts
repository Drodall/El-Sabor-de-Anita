import { create } from 'zustand'
import type { Carrito, ArticuloCarrito, Producto } from '@/types'

interface EstadoCarrito {
  carrito: Carrito
  agregarAlCarrito: (producto: Producto, cantidad: number, instruccionesEspeciales?: string) => void
  eliminarDelCarrito: (idProducto: string) => void
  actualizarCantidad: (idProducto: string, cantidad: number) => void
  vaciarCarrito: () => void
  obtenerTotalCarrito: () => number
}

const calcularTotales = (articulos: ArticuloCarrito[]): { subtotal: number; impuesto: number; total: number } => {
  const subtotal = articulos.reduce((suma, articulo) => suma + articulo.producto.precio * articulo.cantidad, 0)
  const impuesto = subtotal * 0.19 // 19% IVA Chile
  const total = subtotal + impuesto

  return { subtotal, impuesto, total }
}

export const useCartStore = create<EstadoCarrito>((set, get) => ({
  carrito: {
    articulos: [],
    subtotal: 0,
    impuesto: 0,
    total: 0,
  },

  agregarAlCarrito: (producto: Producto, cantidad: number, instruccionesEspeciales?: string) => {
    set((estado) => {
      const articuloExistente = estado.carrito.articulos.find((articulo) => articulo.producto.id === producto.id)

      let nuevosArticulos: ArticuloCarrito[]

      if (articuloExistente) {
        nuevosArticulos = estado.carrito.articulos.map((articulo) =>
          articulo.producto.id === producto.id
            ? { ...articulo, cantidad: articulo.cantidad + cantidad }
            : articulo
        )
      } else {
        nuevosArticulos = [
          ...estado.carrito.articulos,
          {
            id: `${producto.id}-${Date.now()}`,
            producto,
            cantidad,
            instruccionesEspeciales,
            fechaAgregado: new Date(),
          },
        ]
      }

      const totales = calcularTotales(nuevosArticulos)
      return {
        carrito: {
          articulos: nuevosArticulos,
          ...totales,
        },
      }
    })
  },

  eliminarDelCarrito: (idProducto: string) => {
    set((estado) => {
      const nuevosArticulos = estado.carrito.articulos.filter((articulo) => articulo.producto.id !== idProducto)
      const totales = calcularTotales(nuevosArticulos)

      return {
        carrito: {
          articulos: nuevosArticulos,
          ...totales,
        },
      }
    })
  },

  actualizarCantidad: (idProducto: string, cantidad: number) => {
    set((estado) => {
      const nuevosArticulos =
        cantidad <= 0
          ? estado.carrito.articulos.filter((articulo) => articulo.producto.id !== idProducto)
          : estado.carrito.articulos.map((articulo) =>
              articulo.producto.id === idProducto ? { ...articulo, cantidad } : articulo
            )

      const totales = calcularTotales(nuevosArticulos)

      return {
        carrito: {
          articulos: nuevosArticulos,
          ...totales,
        },
      }
    })
  },

  vaciarCarrito: () => {
    set({
      carrito: {
        articulos: [],
        subtotal: 0,
        impuesto: 0,
        total: 0,
      },
    })
  },

  obtenerTotalCarrito: () => {
    return get().carrito.total
  },
}))