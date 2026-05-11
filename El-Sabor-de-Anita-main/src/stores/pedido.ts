import { create } from 'zustand'
import type { Pedido, EstadoPedido } from '@/types'

interface EstadoPedidos {
  pedidos: Pedido[]
  pedidoActual: Pedido | null
  estaCargando: boolean
  error: string | null
  obtenerPedidos: (idUsuario: string) => Promise<void>
  obtenerPedidoPorId: (idPedido: string) => Pedido | undefined
  actualizarEstadoPedido: (idPedido: string, estado: EstadoPedido) => void
  limpiarError: () => void
}

export const useOrderStore = create<EstadoPedidos>((set, get) => ({
  pedidos: [],
  pedidoActual: null,
  estaCargando: false,
  error: null,

  obtenerPedidos: async (_idUsuario: string) => {
    set({ estaCargando: true, error: null })
    try {
      // TODO: Integrar con API
      set({ pedidos: [], estaCargando: false })
    } catch (error) {
      const mensajeError = error instanceof Error ? error.message : 'Error al obtener pedidos'
      set({ error: mensajeError, estaCargando: false })
    }
  },

  obtenerPedidoPorId: (idPedido: string) => {
    return get().pedidos.find((pedido) => pedido.id === idPedido)
  },

  actualizarEstadoPedido: (idPedido: string, estado: EstadoPedido) => {
    set((estadoActual) => ({
      pedidos: estadoActual.pedidos.map((pedido) =>
        pedido.id === idPedido ? { ...pedido, estado } : pedido
      ),
    }))
  },

  limpiarError: () => {
    set({ error: null })
  },
}))