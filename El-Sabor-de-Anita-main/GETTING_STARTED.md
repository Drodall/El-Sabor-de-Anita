# 🚀 Guía de Inicio Rápido

## Lo que hemos creado para ti

Un **frontend completo y profesional** para un sistema de encargo de comidas con:

✨ **12 componentes React** listos para usar  
📦 **3 stores Zustand** para gestión de estado  
🔌 **5 módulos de API** preconfigurados  
🎨 **Tailwind CSS personalizado** con colores para La Calera  
🛡️ **TypeScript completo** con tipos para todas las entidades  

---

## ⚡ Primeros 5 minutos

### 1️⃣ Abre la carpeta del proyecto

```bash
cd C:\Users\USUARIO\Documents\SistemaEncargoComida
```

### 2️⃣ Instala las dependencias

```bash
npm install
```

*Esto descargará todas las librerías necesarias (~300MB)*

### 3️⃣ Configura el archivo .env.local

```bash
copy .env.example .env.local
```

Luego edita `.env.local` con tu configuración:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Sistema de Encargo de Comidas
```

### 4️⃣ Inicia el servidor de desarrollo

```bash
npm run dev
```

### 5️⃣ Abre en tu navegador

```
http://localhost:3000
```

---

## 📂 Estructura que encontrarás

```
src/
├── components/    ← 12 componentes listos para usar
├── stores/        ← Estado global con Zustand
├── services/      ← Llamadas a API
├── types/         ← Tipos TypeScript
├── utils/         ← Funciones auxiliares
└── hooks/         ← Custom React hooks
```

**Documentación completa**: Lee [README.md](./README.md)

---

## 🎯 Próximos Pasos Recomendados

### Fase 1: Crear Páginas (1-2 horas)

```bash
# Crear archivo en src/pages/Home.tsx
# Crear archivo en src/pages/Menu.tsx
# Crear archivo en src/pages/Cart.tsx
# Etc...
```

**Plantilla básica de página**:
```tsx
import React from 'react'
import { Header, Footer } from '@/components/common'

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4">
        {/* Tu contenido aquí */}
      </main>
      <Footer />
    </div>
  )
}
```

### Fase 2: Configurar React Router (30 minutos)

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, MenuPage, CartPage } from '@/pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  )
}
```

### Fase 3: Conectar con tu API Backend

Todos los servicios API están listos en `src/services/api.ts`:

```typescript
// En tu página, usa:
import { productService, orderService } from '@/services'

// Obtener productos
const products = await productService.getAll()

// Crear orden
const order = await orderService.create(orderData)
```

---

## 🧩 Componentes Disponibles

### Componentes Comunes

```tsx
import { Button, Input, Card, Header, Footer, Loading, ErrorMessage } from '@/components/common'

// Button
<Button variant="primary" size="lg" fullWidth>Comprar</Button>

// Input
<Input label="Email" type="email" error="Email invalido" />

// Card
<Card hover>Contenido</Card>
```

### Componentes de Negocio

```tsx
import { ProductCard } from '@/components/menu'
import { CartSummary } from '@/components/cart'
import { OrderTracking } from '@/components/order'
import { LoginForm, RegisterForm } from '@/components/auth'

<ProductCard product={product} onAddToCart={handleAdd} />
<CartSummary />
<OrderTracking order={order} />
```

---

## 🏪 Usa los Stores para Estado Global

```tsx
import { useAuthStore, useCartStore, useOrderStore } from '@/stores'

function MyComponent() {
  // Autenticación
  const { user, login, logout, isAuthenticated } = useAuthStore()

  // Carrito
  const { cart, addToCart, removeFromCart } = useCartStore()

  // Órdenes
  const { orders, fetchOrders } = useOrderStore()

  return <>...</>
}
```

---

## 🎨 Usa los Estilos de Tailwind

```tsx
{/* Colores personalizados */}
<div className="bg-primary text-white">Naranja Principal</div>
<div className="bg-secondary">Azul Secundario</div>
<div className="bg-success">Verde Éxito</div>

{/* Responsive */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  Automáticamente responsive
</div>

{/* Animaciones */}
<button className="hover:scale-105 transition">Botón</button>
```

---

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor

# Build
npm run build            # Compila para producción
npm run preview          # Vista previa del build

# Calidad
npm run lint             # Verifica el código
```

---

## 📚 Documentación

| Archivo | Contenido |
|---------|----------|
| [README.md](./README.md) | 📖 Documentación completa del proyecto |
| [SETUP.md](./SETUP.md) | 🛠️ Guía detallada de instalación |
| [PROJECT_STATUS.md](./PROJECT_STATUS.md) | 📊 Estado y checklist del proyecto |
| [.github/copilot-instructions.md](./.github/copilot-instructions.md) | 🤖 Instrucciones personalizadas |

---

## 🐛 Solución de Problemas Comunes

### ❌ Puerto 3000 en uso
```bash
# Vite elegirá automáticamente otro puerto
npm run dev
```

### ❌ Módulos no encontrados
```bash
# Reinstala dependencias
rm -r node_modules
npm install
```

### ❌ Errores de TypeScript
```bash
# Compila TypeScript
tsc --noEmit
```

---

## 💡 Tips Importantes

1. **Usa los alias** - Prefiere `@/components` sobre `../../../components`
2. **Mantén types.ts actualizado** - Agrega nuevos tipos aquí
3. **Reutiliza componentes** - Button, Input, Card, etc.
4. **Usa hooks personalizados** - useAuth, useLocalStorage, useDebounce
5. **Consulta la documentación** - Lee los comentarios en el código

---

## 🎓 Ejemplo: Crear una Página Sencilla

```tsx
// src/pages/Menu.tsx
import React, { useState } from 'react'
import { Header, Footer, Button } from '@/components/common'
import { ProductCard } from '@/components/menu'
import { useCartStore } from '@/stores'
import type { Product } from '@/types'

export const MenuPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const addToCart = useCartStore((s) => s.addToCart)

  const handleAddToCart = (product: Product, quantity: number) => {
    addToCart(product, quantity)
    alert(`${quantity} ${product.name}(s) agregado(s) al carrito`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-light">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-dark mb-8">Nuestro Menú</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

---

## 📞 ¿Necesitas Ayuda?

- Lee el [README.md](./README.md) completo
- Revisa los comentarios en el código
- Consulta la documentación oficial (React, TypeScript, Tailwind)

---

## 🎉 ¡Estás listo!

Tu frontend profesional está listo. Ahora puedes:

1. ✅ Crear tus páginas
2. ✅ Conectar con tu backend
3. ✅ Agregar funcionalidades
4. ✅ Personalizar los estilos
5. ✅ Hacer deploy

---

**¡Que disfrutes construyendo tu sistema de encargo de comidas! 🍕**

**Cualquier pregunta, consulta esta documentación o pide ayuda a Copilot.**
