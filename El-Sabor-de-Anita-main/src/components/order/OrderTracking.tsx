import React from 'react'
import { Card } from '@/components/common'
import { EstadoPedido, EtiquetasEstadoPedido, Pedido } from '@/types'

interface OrderTrackingProps {
  order: Pedido
}

export const OrderTracking: React.FC<OrderTrackingProps> = ({ order }) => {
  const statuses = Object.values(EstadoPedido)
  const currentStatusIndex = statuses.indexOf(order.estado)

  const getStatusColor = (status: EstadoPedido) => {
    switch (status) {
      case EstadoPedido.ENTREGADO:
        return 'bg-success'
      case EstadoPedido.CANCELADO:
        return 'bg-danger'
      case EstadoPedido.LISTO:
      case EstadoPedido.EN_ENTREGA:
        return 'bg-warning'
      default:
        return 'bg-secondary'
    }
  }

  return (
    <Card>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-dark mb-2">Seguimiento del Pedido</h3>
        <p className="text-sm text-gray-600">Pedido #{order.id}</p>
      </div>

      <div className="space-y-4">
        {/* Timeline */}
        <div className="relative">
          {statuses.map((status, index) => (
            <div key={status} className="flex items-center mb-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                    index <= currentStatusIndex
                      ? `${getStatusColor(status)} border-current text-white`
                      : 'bg-gray-200 border-gray-300 text-gray-400'
                  }`}
                >
                  {index < currentStatusIndex ? '✓' : index + 1}
                </div>
                {index < statuses.length - 1 && (
                  <div
                    className={`h-12 w-1 transition-all ${
                      index < currentStatusIndex ? 'bg-success' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
              <span className="ml-4 font-medium text-dark">
                {EtiquetasEstadoPedido[status]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t space-y-2">
        <p><span className="font-semibold">Estado actual:</span> {EtiquetasEstadoPedido[order.estado]}</p>
        <p>
          <span className="font-semibold">Entrega estimada:</span>{' '}
          {new Date(order.entregaEstimada).toLocaleDateString('es-CL')}
        </p>
        {order.fechaEntregado && (
          <p>
            <span className="font-semibold">Entregado:</span>{' '}
            {new Date(order.fechaEntregado).toLocaleDateString('es-CL')}
          </p>
        )}
      </div>
    </Card>
  )
}
