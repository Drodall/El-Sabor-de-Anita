import React from 'react'
import { useAutenticacion } from '@/hooks'
import { Button } from '@/components/common'

export const Header: React.FC = () => {
  const { estaAutenticado, usuario, cerrarSesion } = useAutenticacion()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-orange-600 transition">
          <span>🍕</span>
          <span>El Sabor de Anita</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="/menu" className="text-dark hover:text-primary transition font-medium">
            Menú
          </a>
          <a href="/cart" className="text-dark hover:text-primary transition font-medium">
            Carrito
          </a>
          <a href="/orders" className="text-dark hover:text-primary transition font-medium">
            Mis Pedidos
          </a>

          {estaAutenticado ? (
            <div className="flex items-center gap-4">
              <span className="text-dark">{usuario?.nombre}</span>
              <a href="/profile" className="text-dark hover:text-primary transition">
                Perfil
              </a>
              <Button variant="secondary" size="sm" onClick={cerrarSesion}>
                Cerrar Sesión
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <a
                href="/login"
                className="px-4 py-1.5 text-sm rounded-lg bg-light text-dark hover:bg-gray-300 border border-gray-200 transition"
              >
                Iniciar Sesión
              </a>
              <Button variant="primary" size="sm">
                <a href="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Registrarse
                </a>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-dark text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
          <a href="/menu" className="block text-dark hover:text-primary transition py-2">
            Menú
          </a>
          <a href="/cart" className="block text-dark hover:text-primary transition py-2">
            Carrito
          </a>
          <a href="/orders" className="block text-dark hover:text-primary transition py-2">
            Pedidos
          </a>

          {estaAutenticado ? (
            <>
              <a href="/profile" className="block text-dark hover:text-primary transition py-2">
                {usuario?.nombre}
              </a>
              <Button variant="secondary" fullWidth onClick={cerrarSesion}>
                Salir
              </Button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="block px-4 py-2.5 text-center rounded-lg bg-light text-dark hover:bg-gray-300 border border-gray-200 transition"
              >
                Iniciar sesión
              </a>
              <Button variant="primary" fullWidth>
                <a href="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Registrarse
                </a>
              </Button>
            </>
          )}
        </div>
      )}
    </header>
  )
}
