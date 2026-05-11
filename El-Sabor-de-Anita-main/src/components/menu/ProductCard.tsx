import React from 'react'
import { Card, Button } from '@/components/common'
import type { Producto } from '@/types'

interface ProductCardProps {
  product: Producto
  onAddToCart?: (product: Producto, quantity: number) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(1)

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity)
      setQuantity(1)
    }
  }

  return (
    <Card hover className="flex flex-col h-full">
      <div className="mb-4">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{product.nombre}</h3>
      <p className="text-sm text-gray-600 mb-3 flex-grow">{product.descripcion}</p>

      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-primary">${product.precio.toLocaleString('es-CL')}</span>
        {product.calificacion && (
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm">{product.calificacion.toFixed(1)}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="bg-light hover:bg-gray-300 text-dark font-semibold py-1 px-3 rounded transition"
        >
          −
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-12 text-center border border-gray-300 rounded py-1"
        />
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="bg-light hover:bg-gray-300 text-dark font-semibold py-1 px-3 rounded transition"
        >
          +
        </button>
      </div>

      <Button
        onClick={handleAddToCart}
        fullWidth
        disabled={!product.disponible}
        variant={product.disponible ? 'primary' : 'light'}
      >
        {product.disponible ? 'Agregar al carrito' : 'No disponible'}
      </Button>
    </Card>
  )
}
