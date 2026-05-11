import React, { useState } from 'react'

interface Category {
  id: string
  name: string
  flag: string
  description: string
  color: string
  backgroundImage: string
}

export const MenuCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('chilena')
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const categories: Category[] = [
    {
      id: 'chilena',
      name: 'Comida Chilena',
      flag: '🇨🇱',
      description: 'Platos tradicionales de Chile',
      color: 'from-blue-600 to-red-600',
      backgroundImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'colombiana',
      name: 'Comida Colombiana',
      flag: '🇨🇴',
      description: 'Sabores auténticos de Colombia',
      color: 'from-yellow-400 to-blue-600',
      backgroundImage: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'internacional',
      name: 'Comida Internacional',
      flag: '🌍',
      description: 'Fusión de sabores del mundo',
      color: 'from-purple-600 to-pink-600',
      backgroundImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    },
  ]

  const categoryContent: Record<string, { dishes: string[] }> = {
    chilena: {
      dishes: [
        '🥘 Pastel de Choclo',
        '🍲 Cazuela de Vacuno',
        '🌽 Humita',
        '🥖 Empanada de Pino',
        '🍗 Pollo a la Pobre',
      ],
    },
    colombiana: {
      dishes: [
        '🍲 Ajiaco Santafereño',
        '🌽 Arepa con Queso',
        '🍗 Bandeja Paisa',
        '🥘 Sancocho',
        '🍖 Lechona Tolimense',
      ],
    },
    internacional: {
      dishes: [
        '🍝 Pasta Italiana',
        '🍔 Hamburguesa Gourmet',
        '🍱 Sushi Premium',
        '🌮 Taco Mexicano',
        '🥙 Falafel Árabe',
      ],
    },
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12 slideInLeft">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-lg text-slate-300">
            Explora nuestra variada oferta de comidas de diferentes regiones
          </p>
        </div>

        {/* Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => setActiveCategory(category.id)}
            >
              <div
                className={`relative h-32 rounded-2xl overflow-hidden border-2 transition-all duration-300 transform ${
                  activeCategory === category.id
                    ? 'border-orange-400 scale-105 shadow-2xl shadow-orange-500/30'
                    : 'border-slate-700 hover:border-orange-300'
                } ${hoveredCategory === category.id ? 'scale-105' : ''}`}
                style={{
                  animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                  backgroundImage: `url('${category.backgroundImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/70 group-hover:from-black/30 group-hover:to-black/60 transition-all duration-300" />

                {/* Background gradient adicional */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center p-4">
                  <div className="text-5xl mb-2 transform group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                    {category.flag}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-100 line-clamp-1 drop-shadow-md">
                    {category.description}
                  </p>

                  {/* Active indicator */}
                  {activeCategory === category.id && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-orange-400 opacity-50 animate-pulse" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platos de la categoría activa */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-700 overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{
              backgroundImage: `url('${categories.find((c) => c.id === activeCategory)?.backgroundImage}')`,
            }}
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95" />

          <div className="relative p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">
                {categories.find((c) => c.id === activeCategory)?.flag}
              </span>
              {categories.find((c) => c.id === activeCategory)?.name}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categoryContent[activeCategory]?.dishes.map((dish, index) => (
                <div
                  key={index}
                  className="group/dish bg-slate-700/50 hover:bg-slate-600 border border-slate-600 rounded-xl p-4 transition-all duration-300 transform hover:scale-105 cursor-pointer hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 backdrop-blur-sm"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <p className="text-white font-semibold group-hover/dish:text-orange-300 transition-colors duration-300">
                    {dish}
                  </p>
                  <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-2 transform scale-x-0 group-hover/dish:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              ))}
            </div>

            {/* Botón de acción */}
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95">
                Ver Más Platos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
