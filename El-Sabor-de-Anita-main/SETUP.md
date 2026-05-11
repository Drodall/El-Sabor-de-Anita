# Guía de Instalación y Desarrollo

## Requisitos Previos

- Node.js v18+ 
- npm v9+ o yarn v3+
- Git

## Pasos de Instalación

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd SistemaEncargoComida
```

### 2. Instalar dependencias

```bash
npm install
```

O con yarn:

```bash
yarn install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Edita el archivo `.env.local` y configura los valores necesarios:

```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Sistema de Encargo de Comidas
```

## Desarrollo

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Compilación

### Build para producción

```bash
npm run build
```

Esta comando generará los archivos optimizados en la carpeta `dist/`

### Vista previa de producción

```bash
npm run preview
```

## Linting

### Ejecutar ESLint

```bash
npm run lint
```

## Estructura de Carpetas

```
src/
├── components/          # Componentes reutilizables
│   ├── common/         # Componentes comunes (Button, Input, etc)
│   ├── menu/           # Componentes de catálogo de productos
│   ├── cart/           # Componentes de carrito de compras
│   ├── order/          # Componentes de seguimiento de pedidos
│   └── auth/           # Componentes de autenticación
├── pages/              # Páginas principales de la app
├── services/           # Servicios para llamadas a API
├── stores/             # Estado global con Zustand
├── types/              # Definiciones de tipos TypeScript
├── utils/              # Funciones auxiliares
├── hooks/              # Custom React hooks
├── App.tsx             # Componente raíz
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales

```

## Características Implementadas

- ✅ Estructura modular de React
- ✅ TypeScript completo
- ✅ Tailwind CSS para estilos
- ✅ Zustand para estado global
- ✅ Integración con API (Axios)
- ✅ Componentes reutilizables
- ✅ Custom hooks
- ✅ Utilidades de validación
- ✅ Responsive design
- ✅ Sistema de notificaciones

## Próximos Pasos

1. Crear páginas (Home, Menu, Cart, etc.)
2. Implementar autenticación
3. Conectar con el API backend
4. Agregar componentes de pago
5. Testing

## Solución de Problemas

### Error: "npm: El archivo no se puede cargar"

En Windows, si obtienes este error, ejecuta PowerShell como administrador:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Puerto 3000 en uso

Si el puerto 3000 está en uso, Vite automáticamente usará el siguiente puerto disponible.

## Recursos

- [Documentación de React](https://react.dev)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de Zustand](https://zustand-demo.vercel.app)

## Contacto

Para preguntas sobre el proyecto, contacta al equipo de desarrollo.
