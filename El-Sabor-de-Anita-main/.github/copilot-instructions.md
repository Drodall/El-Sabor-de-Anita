# Sistema de Encargo de Comidas - Instrucciones de Copilot

Instrucciones personalizadas para el proyecto del sistema de encargo de comidas.

## Estructura del Proyecto

Este es un proyecto **React + TypeScript + Tailwind CSS** con Vite como herramienta de construcción.

### Carpetas Principales

- **src/components** - Componentes reutilizables organizados por contexto
  - `common/` - Componentes globales (Button, Input, Card, etc.)
  - `menu/` - Componentes del catálogo de productos
  - `cart/` - Componentes del carrito de compras
  - `order/` - Componentes de seguimiento de pedidos
  - `auth/` - Componentes de autenticación

- **src/pages** - Páginas principales de la aplicación
- **src/services** - Servicios API y llamadas HTTP
- **src/stores** - Gestión de estado global con Zustand
- **src/types** - Definiciones de tipos TypeScript
- **src/hooks** - Custom React hooks
- **src/utils** - Funciones de utilidad

## Dependencias Principales

- **React 18** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool rápido
- **React Router v6** - Enrutamiento
- **Zustand** - State management
- **Axios** - HTTP client
- **Tailwind CSS** - Estilos
- **date-fns** - Manipulación de fechas

## Configuración Necesaria

1. **Copia el archivo de ambiente:**
   ```bash
   cp .env.example .env.local
   ```

2. **Instala dependencias:**
   ```bash
   npm install
   ```

## Comandos Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Vista previa de producción
- `npm run lint` - Ejecuta linting

## Estructura del Store de Zustand

El proyecto utiliza Zustand para state management:

- **authStore** - Autenticación y usuario actual
- **cartStore** - Estado del carrito de compras
- **orderStore** - Historial y estado de pedidos

## Convenciones de Código

1. **Importes con alias** - Usa rutas alias configuradas en `tsconfig.json`:
   ```typescript
   import { Button } from '@/components/common'
   import { useAuthStore } from '@/stores/authStore'
   ```

2. **Componentes funcionales** - Todos son componentes funcionales con TypeScript
3. **Naming** - CamelCase para variables, PascalCase para componentes
4. **Props typing** - Siempre tipar props con interfaces

## Próximos Pasos

1. Instalar dependencias: `npm install`
2. Configurar variables de ambiente
3. Ejecutar dev server: `npm run dev`
4. Navega a `http://localhost:3000`
5. Implementar páginas principales (Home, Menu, Cart, Checkout, etc.)
6. Integrar con API backend

## API Esperada

El backend debe proporcionar endpoints para:
- Autenticación (login, register, logout)
- Productos (listado, detalle, categorías)
- Órdenes (crear, listar, detalles, actualizar estado)
- Pagos (procesar, verificar)
- Notificaciones

Ver `src/services/api.ts` para consultar los endpoints esperados.
