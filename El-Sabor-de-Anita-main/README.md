# 🍕 Sistema de Encargo de Comidas en La Calera, Chile

Un front-end moderno y elegante para un servicio de entrega de comida premium. Esta versión incluye una landing page renovada con estilo de restaurante, navegación clara y una experiencia visual atractiva.

**Desarrollado para La Calera, V Región, Chile**

---

## 🚀 Qué incluye esta versión

- ✅ **Interfaz premium** con hero oscuro y secciones destacadas
- ✅ **Diseño responsive** optimizado para móvil y desktop
- ✅ **Botones destacados** y CTA modernizados
- ✅ **Componentes reutilizables** con Tailwind CSS
- ✅ **Estructura lista** para integrar backend separado
- ✅ **Navegación fluida** con `Header` y `Footer` profesionales
- ✅ **Cart, Menu y seguimiento** listos para lógica de negocio

---

## 💻 Tecnologías Utilizadas

| Tecnología | Propósito |
|-----------|----------|
| React | UI declarativa |
| TypeScript | Tipado estático |
| Vite | Build rápido |
| Tailwind CSS | Diseño utilitario |
| Zustand | Estado global |
| Axios | Llamadas HTTP |
| date-fns | Formato de fechas |

---

## 📁 Estructura del Proyecto

```
SistemaEncargoComida/
│
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── common/              # Header, Footer, Button, Card, etc.
│   │   ├── menu/                # ProductCard
│   │   ├── cart/                # CartSummary
│   │   ├── order/               # OrderTracking
│   │   └── auth/                # LoginForm, RegisterForm
│   │
│   ├── services/               # Servicios API
│   │   └── api.ts               # Cliente Axios y rutas API
│   │
│   ├── stores/                 # Zustand stores
│   │   ├── authStore.ts
│   │   ├── cartStore.ts
│   │   └── orderStore.ts
│   │
│   ├── types/                  # Tipos TypeScript
│   │   └── index.ts
│   │
│   ├── utils/                  # Helpers y formatos
│   │   └── helpers.ts
│   │
│   ├── hooks/                  # Custom hooks
│   │   └── index.ts
│   │
│   ├── App.tsx                 # Componente raíz
│   ├── main.tsx                # Punto de entrada
│   └── index.css               # Estilos globales
│
├── public/                     # Archivos estáticos
├── .github/                    # Configuración de GitHub
├── index.html                  # HTML principal
├── vite.config.ts              # Configuración Vite
├── tsconfig.json               # Configuración TypeScript
├── tailwind.config.js          # Configuración Tailwind
├── package.json                # Dependencias y scripts
├── README.md                   # Este archivo
└── SETUP.md                    # Guía de instalación
```

---

## 🛠️ Instalación Rápida

### Requisitos Previos

- Node.js v18+ 
- npm v9+ o yarn
- Git

### Pasos

```bash
# Clonar el repositorio
git clone <repository-url>
cd SistemaEncargoComida

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en **http://localhost:3000**.

---

## 📖 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build
npm run build
npm run preview

# Linter
npm run lint
```

---

## 🎨 Temas y Colores

El front-end actual usa una paleta premium con acentos naranja y fondo oscuro para una experiencia elegante y apetitosa.

---

## 📦 Componentes Clave

- `Header` y `Footer`
- `Button`, `Card`
- `ProductCard`
- `CartSummary`
- `OrderTracking`
- `LoginForm`, `RegisterForm`

---

## 🔗 Backend separado

Este proyecto está preparado para conectarse a un backend independiente. Puedes desarrollar un servidor API separado y usar `src/services/api.ts` para consumirlo.

---

## 🧩 Última actualización

- Landing page renovada con estilo premium.
- Botones y sección CTA actualizados.
- Mejoras visuales para un restaurante moderno.
- Front-end listo para integrar backend.

orderService.create(orderData)
orderService.getAll()
orderService.getById(id)

// Pagos
paymentService.process(paymentData)
paymentService.verify(id)
```

---

## 📋 APIs Esperadas (Backend)

El frontend espera los siguientes endpoints:

### Autenticación
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registrar usuario
- `GET /api/auth/profile` - Obtener perfil
- `PUT /api/auth/profile` - Actualizar perfil

### Productos
- `GET /api/products` - Listar productos
- `GET /api/products/:id` - Obtener producto
- `GET /api/products/categories` - Listar categorías

### Órdenes
- `POST /api/orders` - Crear orden
- `GET /api/orders` - Listar órdenes del usuario
- `GET /api/orders/:id` - Obtener detalles de orden
- `PATCH /api/orders/:id/status` - Actualizar estado

### Pagos
- `POST /api/payments` - Procesar pago
- `GET /api/payments/:id` - Obtener detalles de pago
- `GET /api/payments/:id/verify` - Verificar pago

---

## 🔐 Validaciones Incluidas

```typescript
validateEmail(email)           // Valida formato de email
validatePhoneNumber(phone)     // Valida teléfono chileno
validatePassword(password)     // Valida fortaleza de contraseña
```

---

## 🛣️ Enrutamiento (A Implementar)

```typescript
// Rutas previstas:
/                    // Página principal
/menu                // Catálogo de productos
/cart                // Carrito de compras
/checkout            // Pasarela de pago
/orders              // Historial de pedidos
/orders/:id          // Detalles del pedido
/profile             // Perfil de usuario
/login               // Iniciar sesión
/register            // Registrarse
```

---

## 📱 Responsividad

El proyecto está completamente optimizado para:

- **Móvil** - 320px+
- **Tablet** - 768px+
- **Desktop** - 1024px+

Utiliza Tailwind CSS breakpoints automáticamente.

---

## 🚨 Solución de Problemas

### Error: "npm: El archivo no se puede cargar" (Windows)

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Puerto 3000 en uso

Vite automáticamente usará el siguiente puerto disponible.

### Módulos no encontrados

```bash
# Limpia node_modules y reinstala
rm -r node_modules package-lock.json
npm install
```

---

## 📚 Recursos y Documentación

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Zustand Documentation](https://zustand-demo.vercel.app)
- [Axios Documentation](https://axios-http.com)

---

## 🤝 Contribuir

1. Crea un branch para tu feature: `git checkout -b feature/mi-feature`
2. Commit tus cambios: `git commit -m 'Add mi-feature'`
3. Push al branch: `git push origin feature/mi-feature`
4. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es propiedad de **Sistema de Encargo de Comidas La Calera**. Todos los derechos reservados.

---

## 📞 Contacto

- **GitHub**: [Repository URL]
- **Email**: info@encargocomidas.cl
- **Ubicación**: La Calera, V Región, Chile

---

**Versión**: 0.1.0  
**Última actualización**: 9 de mayo de 2026  
**Estado**: En desarrollo activo
