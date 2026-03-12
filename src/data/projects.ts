export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  demo?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  image: string;
  videoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
  slug: "el-estampadero",
  title: "ERP — El Estampadero",
  tagline: "Sistema de gestión completo para taller de indumentaria",
  description:
    "Sistema ERP diseñado e implementado desde cero para digitalizar y automatizar el flujo completo de un taller de indumentaria: desde la toma del pedido hasta la entrega y cobranza.",
  problem:
    "El taller operaba con planillas manuales dispersas, sin visibilidad financiera en tiempo real ni control del estado de producción. Los pedidos de egresados, con lógica de cuotas y tutores, eran especialmente difíciles de gestionar.",
  solution:
    "Diseñé un ERP a medida con flujos diferenciados para pedidos estándar y egresados, dashboard financiero en tiempo real, trazabilidad por etapas de producción y un sistema de roles que restringe el acceso según el tipo de usuario.",
  stack: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
  features: [
    "Flujos separados para pedidos estándar y egresados con planes de cuotas",
    "Dashboard financiero: ingresos, deuda por cliente, métodos de pago",
    "Trazabilidad de producción por etapas con sistema de roles (RBAC)",
    "Tickets imprimibles optimizados para impresoras térmicas de 80mm",
    "Calendario interactivo mensual/semanal con filtros por categoría y estado",
    "Carga masiva de alumnos con previsualización antes de confirmar",
    "Cobranza grupal o individual por alumno, adaptable a cambios mid-proceso (grupos que se dividen, pagos parciales tardíos)",
    "Cálculo automático de fecha de entrega en días hábiles",
    "Reportes financieros con filtros por período, método de pago y categoría",
  ],
  demo: "https://demo-sistema-indumentaria.netlify.app/",
  github: "https://github.com/gonzaloLT/el-estampadero",
  image: "/erp.png",
  videoUrl: "https://www.youtube.com/embed/69Ml5yugf7s",
  featured: true,
},
  {
  slug: "diffalci",
  title: "Centro Cultural DIFFALCI",
  tagline: "Plataforma web integral con arquitectura headless y gestión autónoma de contenidos",
  description: "Desarrollo completo de un ecosistema digital para el centro cultural utilizando Next.js 16 y Sanity CMS v4. El enfoque principal radicó en dotar al cliente de independencia total para administrar talleres, docentes y noticias, garantizando al mismo tiempo una performance superior, accesibilidad mobile-first y un posicionamiento SEO robusto mediante Server Components y cacheo avanzado.",
  problem: "La institución necesitaba modernizar su presencia digital y centralizar la información de su oferta cultural. El desafío principal era eliminar la fricción y la dependencia técnica en la actualización diaria de grillas de horarios, galerías de fotos, artículos del blog y perfiles de docentes.",
  solution: "Se diseñó una arquitectura desacoplada integrando Sanity Studio directamente en el proyecto (/studio). Se crearon esquemas de contenido estructurado (Portable Text) y se implementó un frontend con Next.js App Router que consume y cachea estos datos eficientemente, sumando integraciones clave como flujos de contacto directo por WhatsApp y galerías interactivas.",
  stack: ["Next.js 16", "TypeScript", "Sanity CMS", "Tailwind CSS v4", "Framer Motion"],
  features: [
    "Arquitectura Headless con Sanity Studio integrado nativamente para autogestión",
    "Renderizado optimizado con Server Components, Streaming y directivas de caché (cacheLife/cacheTag)",
    "Sistema de ruteo dinámico para talleres y noticias con filtrado por categorías y paginación",
    "Optimización SEO avanzada con metadatos dinámicos, Schema.org (JSON-LD), sitemap y OpenGraph",
    "Galería de imágenes global interactiva (Lightbox) con optimización automática de Next.js Image",
    "Diseño mobile-first accesible con animaciones fluidas e integración de contacto directo vía WhatsApp"
  ],
  demo: "https://www.centroculturaldiffalci.com",
  image: "/diffalci.webp",
  featured: true,
},
  {
  slug: "task-tracker",
  title: "Task Tracker",
  tagline: "Plataforma full-stack de gestión ágil con arquitectura jerárquica y API RESTful",
  description: "Desarrollo end-to-end de una herramienta de gestión de proyectos inspirada en metodologías ágiles. La aplicación permite organizar el trabajo mediante una estricta estructura de Proyectos, Épicas, Historias de Usuario y Tareas, respaldada por una API segura y una base de datos NoSQL.",
  problem: "El desafío principal radicaba en construir un sistema robusto que mantuviera la integridad referencial profunda entre múltiples niveles de un proyecto, garantizando al mismo tiempo la privacidad, el control de acceso y la seguridad de los datos de cada usuario registrado.",
  solution: "Se implementó una API RESTful con Node.js y Express bajo el patrón MVC, conectada a MongoDB Atlas. El backend cuenta con autenticación stateless mediante JWT y middlewares de autorización por 'ownership'. El cliente es una SPA en React que gestiona el estado global con Context API y utiliza interceptores HTTP para una comunicación segura y fluida.",
  stack: ["React 18", "Node.js", "Express.js", "MongoDB", "JWT"],
  features: [
    "Sistema jerárquico (Proyectos > Épicas > Historias > Tareas) con protección de integridad referencial",
    "Autenticación segura stateless implementando JWT, bcrypt y persistencia de sesión",
    "API RESTful estructurada bajo patrón MVC con middlewares de protección y validación de propiedad (Ownership)",
    "Arquitectura frontend limpia utilizando Context API para el estado global y React Hook Form",
    "Interfaz de usuario responsiva (SPA) con vistas protegidas, modales dinámicos y enrutamiento avanzado",
    "Despliegue en producción distribuido: Vercel (Frontend), Render (Backend) y MongoDB Atlas (Base de Datos)"
  ],
  demo: "https://frontend-tracker-task-r3te.vercel.app/",
  githubFrontend: "https://github.com/gonzaloLT/frontend-tracker-task",
  githubBackend: "https://github.com/gonzaloLT/backend-tracker-task",
  image: "/tasktracker.webp",
  featured: true,
},
  {
  slug: "creandoando",
  title: "Creando Ando",
  tagline: "E-commerce artesanal con sistema de pedidos integrado a WhatsApp",
  description: "Plataforma de comercio electrónico full-stack desarrollada para la venta de productos artesanales. El sistema reemplaza la pasarela de pagos tradicional por un flujo de checkout que genera un pedido estructurado directamente en WhatsApp. Incluye un dashboard administrativo a medida para la gestión integral del catálogo y los precios.",
  problem: "La artista requería digitalizar su catálogo y automatizar la recepción de pedidos online, pero necesitaba evitar las comisiones y la complejidad técnica de las pasarelas de pago convencionales para mantener el trato directo y personalizado con sus clientes.",
  solution: "Se desarrolló una tienda online con Next.js 16 y Supabase que integra un carrito de compras interactivo. Al finalizar la selección, el sistema compila los datos en un mensaje de WhatsApp. Además, se implementó un panel de control privado que permite administrar productos, editar precios masivamente y gestionar imágenes alojadas en Cloudinary.",
  stack: ["Next.js 16", "TypeScript", "Supabase", "Cloudinary", "Tailwind CSS v4", "Zustand"],
  features: [
    "Catálogo dinámico con filtros por categoría, ordenamiento y galería interactiva (Lightbox)",
    "Carrito de compras persistente gestionado con Zustand y checkout estructurado vía WhatsApp",
    "Panel de administración protegido con middleware (Supabase Auth) para operaciones CRUD",
    "Gestión avanzada de medios en la nube con Cloudinary y ordenamiento visual (Drag & Drop)",
    "Herramientas administrativas de productividad, incluyendo editor masivo de precios",
    "Optimizaciones de rendimiento y SEO mediante Server Actions, revalidación selectiva y metadata dinámica"
  ],
  demo: "https://www.creandoando.com.ar",
  image: "/creandoando.webp",
  featured: true,
},
];

export const featuredProjects = projects.filter((p) => p.featured);
