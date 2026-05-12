import React from 'react'
import { Header, Footer, Button } from '@/components/common'
import { MenuCategories } from '@/components/menu'

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#090909] text-white">
      <Header />

      <main className="flex-grow">
        <section
          className="relative min-h-[85vh] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13, 13, 13, 0.62), rgba(13, 13, 13, 0.62)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-orange-100 shadow-lg shadow-black/20">
                  Servicio Premium • Comida a domicilio
                </span>
                <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                  El sabor de Anita
                  <span className="block text-orange-300 mt-4">Tu restaurante favorito en La Calera</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-slate-200/90 leading-relaxed">
                  Ordena platos frescos, preparados con ingredientes locales y entregados directamente a tu puerta.
                  Una experiencia gastronómica elegante, rápida y sin complicaciones.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-300 text-slate-950 hover:bg-orange-400 shadow-xl shadow-orange-500/20">
                    <a href="/menu" className="flex items-center gap-2">
                      🍕 Ver Menú Completo
                    </a>
                  </Button>
                  <Button variant="light" size="lg" className="text-white bg-white/10 border border-white/20 hover:bg-white/20">
                    <a href="/register" className="flex items-center gap-2">
                      📝 Crear Cuenta
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-200 mb-4">Platos más pedidos</p>
                <div className="space-y-4">
                  {[
                    { nombre: 'Pizza Especial', desc: 'Queso derretido, salsa artesanal y toppings premium.' },
                    { nombre: 'Hamburguesa Gourmet', desc: 'Carne jugosa, cebolla caramelizada y pan artesanal.' },
                    { nombre: 'Ensalada César', desc: 'Fresca, ligera y con aderezo cremoso.' },
                  ].map((item) => (
                    <div key={item.nombre} className="rounded-3xl bg-slate-950/30 p-5 border border-white/10">
                      <h3 className="text-xl font-semibold text-white">{item.nombre}</h3>
                      <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <MenuCategories />

        <section className="py-20 relative overflow-hidden" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/45 to-black/50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-10 lg:grid-cols-3 items-end">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-orange-200">
                  Cocina de Autor
                </span>
                <h2 className="text-4xl font-bold text-slate-200">Una experiencia gastronómica que inspira</h2>
                <p className="text-slate-400 leading-relaxed">
                  Platos diseñados para disfrutar en cada bocado. Nuestro menú combina recetas clásicas con toques modernos y sabores auténticos.
                </p>
              </div>

              <div className="rounded-[32px] bg-slate-950/80 border border-white/10 p-8 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-300 uppercase tracking-[0.2em] text-xs">Entrega rápida</span>
                  <span className="text-orange-300 font-bold">30 min</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Conoce nuestro sistema de entregas optimizado para que tu pedido llegue caliente y fresco siempre.
                </p>
              </div>

              <div className="rounded-[32px] bg-slate-950/80 border border-white/10 p-8 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-slate-300 uppercase tracking-[0.2em] text-xs">Soporte</span>
                  <span className="text-orange-300 font-bold">24/7</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Nuestro equipo está disponible en todo momento para ayudarte con tu pedido o responder cualquier consulta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/45 to-black/50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-orange-200">
                  Platos destacados
                </span>
                <h2 className="mt-6 text-4xl font-bold text-slate-200">Nuestros favoritos de la casa</h2>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  Descubre la selección de platos más populares entre nuestros clientes. Calidad, sabor y presentación premium.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Salsa Especial', subtitle: 'Auténtica y cremosa' },
                  { title: 'Ingredientes Locales', subtitle: 'Frescos y naturales' },
                  { title: 'Postres Caseros', subtitle: 'Dulces perfectos' },
                  { title: 'Bebidas Refrescantes', subtitle: 'Para cada paladar' },
                ].map((item) => (
                  <div key={item.title} className="rounded-[30px] bg-slate-950/70 border border-white/10 p-6 shadow-2xl shadow-black/15">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/45 to-black/50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold text-slate-200 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="mx-auto mb-12 max-w-2xl text-slate-400 leading-relaxed">
              Comentarios reales de personas que ya ordenaron y disfrutaron de la mejor comida en La Calera.
            </p>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: 'María González',
                  text: 'El pedido llegó increíble y la comida estaba deliciosa. Servicio impecable.',
                },
                {
                  name: 'Juan Rodríguez',
                  text: 'Excelente variedad y sabores muy bien balanceados. Volveré a ordenar seguro.',
                },
                {
                  name: 'Ana Silva',
                  text: 'La mejor opción de delivery en la ciudad. Todo llegó perfecto y caliente.',
                },
              ].map((item) => (
                <div key={item.name} className="rounded-[32px] bg-slate-950/70 border border-white/10 p-8 shadow-2xl shadow-black/20">
                  <p className="text-slate-300 leading-relaxed mb-6">“{item.text}”</p>
                  <div className="font-semibold text-white">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden bg-[#040404]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl" />
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-orange-300 mb-6 shadow-lg shadow-black/20">
                  🚀 Último paso
                </span>
                <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
                  Haz tu pedido ahora
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Disfruta de la mejor comida sin salir de casa. Ordena con confianza y recibe todo rápido y seguro en La Calera.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Entrega Rápida</h3>
                      <p className="text-slate-400">Recibe tu pedido en 30 minutos o menos, garantizado.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">100% Seguro</h3>
                      <p className="text-slate-400">Pagos seguros con múltiples opciones de pago disponibles.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-2xl">👨‍🍳</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Comida de Calidad</h3>
                      <p className="text-slate-400">Preparado por chefs profesionales con ingredientes frescos.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-orange-400 to-orange-500 text-slate-950 hover:from-orange-500 hover:to-orange-600 shadow-xl shadow-orange-500/30 transform hover:scale-105 transition-all duration-300">
                    <a href="/menu" className="flex items-center gap-2 text-black font-bold">
                      🍕 Ver Menú Completo
                    </a>
                  </Button>
                  <Button variant="light" size="lg" className="text-white bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300">
                    <a href="/register" className="flex items-center gap-2">
                      📝 Crear Cuenta
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" />
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 animate-bounce">🍔</div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">Platos Destacados</h3>
                        <p className="text-slate-400 text-sm">Los favoritos de nuestros clientes</p>
                      </div>

                      <div className="space-y-3">
                        {[
                          { icon: '🍕', name: 'Pizza Especial', price: '$12.990' },
                          { icon: '🍔', name: 'Hamburguesa Gourmet', price: '$10.990' },
                          { icon: '🥗', name: 'Ensalada César Premium', price: '$8.990' },
                          { icon: '🍜', name: 'Tallarín al Pesto', price: '$11.990' },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-400 transition-all duration-300 group cursor-pointer">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{item.icon}</span>
                              <div>
                                <p className="text-white font-semibold group-hover:text-orange-300 transition-colors">{item.name}</p>
                              </div>
                            </div>
                            <span className="text-orange-400 font-bold text-lg">{item.price}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
                        <p className="text-sm text-slate-300 mb-2">⭐ <span className="text-orange-300 font-semibold">4.9/5</span> de 1,250+ clientes satisfechos</p>
                        <p className="text-xs text-slate-400">Nuestros clientes valoran la calidad y rapidez de nuestro servicio</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App