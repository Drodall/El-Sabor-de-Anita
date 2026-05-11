import React from 'react'
import { Button } from '@/components/common'
import { useCartStore } from '@/stores/cartStore'
import type { ArticuloCarrito } from '@/types'

export const CartSummary: React.FC = () => {
  const { carrito, eliminarDelCarrito, actualizarCantidad } = useCartStore()

  if (carrito.articulos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-600 mb-4">Tu carrito está vacío</p>
        <a href="/menu" className="text-primary hover:underline">
          Volver al menú
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-dark mb-4">Resumen del Carrito</h2>

      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {carrito.articulos.map((item: ArticuloCarrito) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex-1">
              <h3 className="font-semibold text-dark">{item.producto.nombre}</h3>
              <p className="text-sm text-gray-600">${item.producto.precio.toLocaleString('es-CL')}</p>
              {item.instruccionesEspeciales && (
                <p className="text-xs text-gray-500 italic">Instrucciones: {item.instruccionesEspeciales}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => actualizarCantidad(item.producto.id, item.cantidad - 1)}
                  className="bg-light hover:bg-gray-300 text-dark py-1 px-2 rounded"
                >
                  −
                </button>
                <span className="w-8 text-center">{item.cantidad}</span>
                <button
                  onClick={() => actualizarCantidad(item.producto.id, item.cantidad + 1)}
                  className="bg-light hover:bg-gray-300 text-dark py-1 px-2 rounded"
                >
                  +
                </button>
              </div>

              <span className="font-semibold text-dark w-20 text-right">
                ${(item.producto.precio * item.cantidad).toLocaleString('es-CL')}
              </span>

              <button
                onClick={() => eliminarDelCarrito(item.producto.id)}
                className="text-danger hover:text-red-700 transition"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2 border-t pt-4">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${carrito.subtotal.toLocaleString('es-CL')}</span>
        </div>
        <div className="flex justify-between">
          <span>IVA (19%):</span>
          <span>${carrito.impuesto.toLocaleString('es-CL')}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-primary">
          <span>Total:</span>
          <span>${carrito.total.toLocaleString('es-CL')}</span>
        </div>
      </div>

      <Button fullWidth className="mt-6" size="lg">
        Ir al Pago
      </Button>
    </div>
  )
}
