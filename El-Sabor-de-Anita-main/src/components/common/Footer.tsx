import React from 'react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-16 border-t-4 border-orange-500 animation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre Nosotros */}
          <div className="hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-orange-400">
              <span>🍕</span>
              <span>El Sabor de Anita</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Servicio de entrega de comidas en La Calera, Chile. Calidad, rapidez y sabor garantizado.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="hover:transform hover:scale-105 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/menu" className="text-gray-400 hover:text-white transition">Menú</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">Acerca de</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contacto</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Políticas */}
          <div className="hover:transform hover:scale-105 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Políticas</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacidad</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Términos de Servicio</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white transition">Devoluciones</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="hover:transform hover:scale-105 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span>📍</span> La Calera, Región de Valparaíso, Chile</li>
              <li><span>📞</span> +56 9 4272 3764</li>
              <li><span>✉️</span> info@elsabordedeanita.cl</li>
            </ul>
          </div>
        </div>

        {/* Redes Sociales con Logos Oficiales */}
        <div className="border-t border-gray-700 pt-8 mb-8 animate-fadeIn">
          <div className="flex justify-center gap-8 mb-6">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1" aria-label="Facebook">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-[#E4405F] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1" aria-label="Instagram">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="#" className="text-gray-400 hover:text-[#25D366] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1" aria-label="WhatsApp">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm hover:text-orange-400 transition-colors duration-300">
          <p>&copy; {currentYear} El Sabor de Anita. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}