/* =========================================================
   Contenido del sitio (ES / EN).
   Para actualizar el CV: editar aquí, en ambos idiomas.
   ========================================================= */
window.SITE_DATA = {
  meta: {
    name: "Ernesto Yago Caldas Zapata",
    shortName: "Yago Caldas",
    email: "yagocz0206@gmail.com",
    phone: "+51 994 146 110",
    phoneHref: "tel:+51994146110",
    location: "Lima, Perú",
    github: "https://github.com/yagocz",
    linkedin: "https://www.linkedin.com/in/yago-caldas/",
    /* PDF del CV por idioma. Si un idioma no tiene PDF, se usa el de ES. */
    cv: { es: "assets/cv/CV-YagoCaldas-ES.pdf", en: null }
  },

  /* Stacks por empresa (independientes del idioma) */
  tech: {
    techbot: ["Flutter", "Dart", "Riverpod", "flutter_bloc", "C++ (Win32)", "Laravel 12", "PHP 8.4", "PostgreSQL 17", "Redis", "RabbitMQ", "MinIO", "Docker Compose", "nginx", "FastAPI", "Python", "React 19", "TypeScript", "Vite", "Alembic", "Kotlin/Ktor", "CLIP", "YOLO", "Qdrant", "SUNAT (Nubefact/TechFact)", "Niubiz / Izipay / BBVA TotalPOS", "Ubuntu Server", "systemd", "UFW"],
    labs24: ["Kamal", "Docker", "Proxmox", "Zabbix", "PostgreSQL", "MySQL/MariaDB", "ProxySQL", "Ruby on Rails", "Sidekiq", "Nginx", "HAProxy", "Ansible", "Let's Encrypt", "WireGuard", "Tailscale", "Gitea/Forgejo Actions", "ERPNext/Frappe", "OpenLDAP", "CAS", "Authelia", "Bash", "Linux", "AWS"],
    buenaventura: ["Python", "FastAPI", "FastMCP", "ASP.NET Core", "Node.js", "React 19", "TypeScript", "Vite", "SQL Server 2019/2022", "T-SQL", "Docker", "Tomcat 10", "Java 17", "Maven", "Qdrant", "Azure OpenAI", "Azure Cognitive Search", "Azure Blob Storage", "IIS (ARR)", "Claude API", "Google Gemini", "Whisper", "JWT", "SSE", "WebSocket", "Recharts", "SheetJS", "Flyway", "GitHub Actions", "PowerShell", "MCP", "RAG"],
    synckonnect: ["Node.js", "Express", "React", "Redux", "TypeScript", "Flutter", "AWS", "Azure", "PostgreSQL", "Sequelize", "Socket.io", "JWT"],
    twentyfour: ["PHP 8", "React 19", "TypeScript", "Vite", "React Router", "ASP.NET Core", "SQL Server", "Azure App Service", "Azure Blob Storage", "Azure DevOps", "Vercel", "MySQL/MariaDB", "bcrypt", "JWT"]
  },

  projectsMeta: [
    { id: "legalbot", title: "LegalBot IA", url: "https://legal-bot-two.vercel.app/", tags: ["Next.js 14", "FastAPI", "RAG", "PostgreSQL", "Pinecone"] },
    { id: "logos", title: "λόγος (Logos)", url: "https://github.com/kaneeqi/logos-lang", tags: ["C++17", "LLVM", "ANTLR4", "CMake"] },
    { id: "plateocr", title: "Plate OCR AI", url: "https://github.com/mavicCode/Proyecto-placas-vehiculares", tags: ["Python", "YOLO11", "OpenCV", "EasyOCR", "Flask"] },
    { id: "safemoto", title: "SafeMoto", url: "https://yagocz.github.io/safemoto-landing/", tags: ["HTML5", "CSS3", "JavaScript"] }
  ],

  skills: [
    { id: "languages", items: ["Python", "C++", "C# / .NET", "JavaScript", "TypeScript", "Dart", "PHP", "Java", "R", "SQL / T-SQL"] },
    { id: "frontend", items: ["React", "Next.js", "Angular", "Flutter", "Tailwind CSS", "Vite", "HTML / CSS"] },
    { id: "backend", items: ["Node.js / Express", "FastAPI", "ASP.NET Core", "Laravel", "REST APIs", "JWT", "WebSocket / SSE"] },
    { id: "data", items: ["SQL Server", "PostgreSQL", "MySQL / MariaDB", "MongoDB", "Redis", "Qdrant", "TimescaleDB", "Power BI"] },
    { id: "cloud", items: ["Azure", "AWS", "Docker", "Kamal", "Proxmox", "nginx", "Linux", "CI/CD", "Zabbix", "Git"] },
    { id: "ai", items: ["Model Context Protocol (MCP)", "RAG", "Claude API", "Gemini", "Azure OpenAI", "CLIP", "YOLO", "Whisper"] }
  ],

  es: {
    title: "Yago Caldas — Fullstack Developer · AI Platform Engineer · DevOps",
    description: "Fullstack Developer, AI Platform Engineer y DevOps en Lima, Perú. Más de tres años construyendo y operando software en producción: web, móvil, APIs, plataformas con LLMs e infraestructura.",
    nav: { profile: "Perfil", experience: "Experiencia", projects: "Proyectos", skills: "Skills", education: "Educación", contact: "Contacto" },
    ui: {
      copyEmail: "Copiar email", copied: "Copiado", downloadCv: "Descargar CV", viewExperience: "Ver experiencia",
      showMore: "Ver {n} logros más", showMoreOne: "Ver 1 logro más", showLess: "Ver menos", available: "Disponible para oportunidades", current: "Actual",
      toggleTheme: "Cambiar tema", openMenu: "Abrir menú", closeMenu: "Cerrar menú", visit: "Visitar", code: "Código",
      builtWith: "Diseñado y construido por Yago Caldas. Sin frameworks, sin trackers."
    },
    hero: {
      eyebrow: "Fullstack Developer · AI Platform Engineer · DevOps",
      lead: "Construyo y opero software en producción: aplicaciones web y multiplataforma, APIs, plataformas conversacionales con LLMs e infraestructura en la nube y on-premise."
    },
    facts: [
      { value: "3+", label: "años de experiencia" },
      { value: "25+", label: "apps operadas en producción" },
      { value: "40+", label: "herramientas MCP diseñadas" },
      { value: "C2", label: "inglés certificado" }
    ],
    profile: {
      heading: "Perfil",
      sub: "Quién soy y cómo trabajo",
      body: "Fullstack Developer y AI Platform Engineer con más de tres años de experiencia construyendo y operando software en producción: aplicaciones web y multiplataforma, APIs REST, plataformas conversacionales basadas en LLM e infraestructura DevOps en Azure, AWS y servidores on-premise. Experiencia end-to-end en diseño de arquitectura, modelado y optimización de bases de datos SQL Server y PostgreSQL, integración de hardware y sistemas de terceros, entrega continua y operación de servicios críticos para el negocio.",
      soft: ["Colaboración en entornos ágiles (Scrum)", "Comunicación efectiva y trabajo multidisciplinario", "Aprendizaje autodirigido", "Gestión del tiempo y responsabilidad", "Pensamiento analítico y atención al detalle", "Resolución de problemas y autonomía técnica"]
    },
    experience: {
      heading: "Experiencia",
      sub: "Cinco empresas, tres países, producto real en producción",
      jobs: [
        {
          id: "techbot", current: true,
          role: "Fullstack Developer – Flutter & DevOps", company: "TECHBOT Perú",
          period: "Mar 2026 — Actualidad", type: "Por proyectos · Remoto (Perú)",
          summary: "Desarrollo, mantenimiento y puesta en producción de aplicaciones Flutter multiplataforma (Windows, Android, Web) para kioscos de autoservicio, sistemas POS y plataformas SaaS multi-tenant, con responsabilidad end-to-end sobre funcionalidades, integración de hardware, facturación electrónica y despliegue en VPS Linux.",
          bullets: [
            "Cliente Windows de TravelCab (kiosco de autoservicio) puesto en producción en el Hotel Pullman: impresión USB nativa vía Win32 Print Spooler API (plugin C++ en el runner de Flutter), modo kiosco fullscreen, teclado táctil en pantalla y control de inactividad.",
            "Facturación electrónica SUNAT integrada al flujo de ventas (TechFact/PSE): boletas simples y electrónicas con validación de DNI vía RENIEC, facturas con consulta de RUC y regímenes tributarios (gravado, exonerado, inafecto) reflejados correctamente en el ticket impreso y en el payload a SUNAT.",
            "ServiceHub, plataforma SaaS multi-tenant de gestión de mantenimiento y soporte: despliegue y operación en VPS con Docker Compose (Laravel 12, PostgreSQL 17, Redis, RabbitMQ, MinIO S3) y dos frontends Flutter Web detrás de un reverse proxy nginx.",
            "DeliBakery, kiosco de autoservicio Android integrado con Qapp: impresión USB nativa sin middleware, fallback de ticket de pedido cuando falla la LAN e integración de pagos BBVA TotalPOS mediante un bridge REST.",
            "Microservicio de validación de empleados (FastAPI + PostgreSQL + Alembic) con panel de administración React/Vite, importación/exportación de plantillas Excel, desplegado con systemd y nginx.",
            "Backend de visión por computadora para reconocimiento de productos en POS de autopago (CLIP + YOLO + Qdrant), con indexación de imágenes del catálogo y búsqueda semántica en producción para clientes reales.",
            "Administración de un VPS Ubuntu 24.04 con tres servicios coexistiendo: Docker, nginx multi-sitio, UFW, fail2ban, llaves SSH y scripts de despliegue automatizado; trabajo con un equipo distribuido usando Git flow por ramas y code reviews."
          ]
        },
        {
          id: "labs24",
          role: "DevOps / Site Reliability Engineer", company: "24Labs (Geosatelital)",
          period: "Mar 2025 — Jul 2026", type: "Tiempo completo · Remoto (Perú)",
          summary: "Responsable del despliegue, automatización y operación de la infraestructura detrás de un ecosistema de más de 25 aplicaciones (Ruby on Rails, Java Spring Boot, Python, Frappe/ERPNext) distribuidas en múltiples data centers y nubes (AWS, Contabo, on-premise), garantizando disponibilidad, seguridad y observabilidad de las plataformas en producción.",
          bullets: [
            "Despliegue y estandarización de aplicaciones con Kamal 2 + Docker, aprovisionando VMs y contenedores en Proxmox vía API (clonado de templates, cloud-init, redimensionado de discos), con MySQL/PostgreSQL como accesorios, Nginx y certificados SSL de Let's Encrypt.",
            "Diseño e implementación de un stack de monitoreo con Zabbix 7.0 en alta disponibilidad sobre PostgreSQL HA (pg_auto_failover), incluyendo dashboards, autodescubrimiento de contenedores Docker y gestión de hosts a través de la API de Zabbix.",
            "Administración del servidor de correo corporativo (Postfix/Dovecot): gestión de cuentas, respuesta a incidentes de seguridad, remoción de listas negras (Spamhaus, Microsoft) y configuración de SPF/DKIM/DMARC.",
            "Automatización de CI/CD con Gitea/Forgejo Actions y registries Docker privados; despliegues basados en tags y builds reproducibles.",
            "Administración de bases de datos: replicación MySQL master–slave con ProxySQL, TimescaleDB y diagnóstico de lag de replicación.",
            "Redes y acceso seguro (WireGuard, Tailscale, bastión, NAT/iptables, HAProxy) y autenticación centralizada (OpenLDAP, CAS SSO, Authelia/OIDC).",
            "Operación y troubleshooting de sistemas en producción: Sidekiq/Solid Queue, Redis, incidentes de disco y memoria, y despliegues zero-downtime con migraciones automáticas."
          ]
        },
        {
          id: "buenaventura",
          role: "Fullstack Developer – AI Platform Engineer", company: "Compañía de Minas Buenaventura / DTECH",
          period: "Feb 2025 — May 2026", type: "Freelance · Remoto (Perú)",
          summary: "Desarrollo end-to-end del ecosistema de software ambiental y de seguridad y salud ocupacional (SSO) para operaciones mineras: la plataforma conversacional basada en LLM LucIAna, el sistema de gestión Safe2biz / Eco2biz y la automatización de infraestructura, cubriendo IA, backend, frontend, ingeniería de datos, migraciones SQL, despliegue y auditoría de sistemas legacy.",
          bullets: [
            "Diseño e implementación del servidor Model Context Protocol (MCP) de LucIAna con más de 40 herramientas especializadas para consultar datos ambientales (compromisos, desviaciones, monitoreos, PAS, cronogramas) en SQL Server, con vistas optimizadas para IA y flags de excedencia precalculados para reducir la latencia de consulta del LLM.",
            "Desarrollo de APIs REST con FastAPI y ASP.NET Core, autenticación JWT y control de acceso por roles (gerente, jefe ambiental, especialista, auditor); desplegadas en Windows Server con IIS (ARR) como reverse proxy HTTPS.",
            "Módulo de guardrails propio alineado al OWASP LLM Top 10 (prompt injection, fuga de datos, consumo ilimitado), evaluación del Microsoft Agent Governance Toolkit y definición del roadmap de patrones agénticos.",
            "Sistema RAG (Retrieval-Augmented Generation) con Qdrant como vector store y Google Gemini para embeddings y re-ranking sobre documentos PDF de la normativa ambiental peruana.",
            "Rediseño del sistema de correos transaccionales de Safe2biz (alertas y alarmas de SSO): más de 30 plantillas HTML editables desde base de datos, tablas dinámicas con estilos y modificación de stored procedures T-SQL sobre Database Mail.",
            "Auditoría técnica de la base de datos corporativa (703 tablas, 1,140 stored procedures, 123 vistas, 192 funciones, 38 triggers): detección de objetos huérfanos, documentación del patrón de invocación dinámica de stored procedures y diagramas de arquitectura y ER.",
            "Adopción de Flyway para versionado evolutivo de SQL en 3 productos con trazabilidad en GitHub, más un pipeline de auto-deploy desde GitHub a Windows Server usando scripts PowerShell.",
            "Dashboards analíticos con tablas pivote drag-and-drop para accidentes e incidentes de SSO (filtros multidimensionales, drill-through y exportación real a Excel vía SheetJS), y evaluación tecnológica para migrar el monitoreo ambiental de discreto a IoT continuo (TimescaleDB, DuckDB, MQTT)."
          ]
        },
        {
          id: "synckonnect",
          role: "Fullstack Developer – App Developer", company: "SyncKonnect",
          period: "Ene 2024 — Feb 2026", type: "Tiempo completo · Remoto (Estados Unidos)",
          summary: "Mantenimiento, evolución e implementación de nuevas funcionalidades en aplicaciones empresariales web, backend y móviles, participando en el ciclo completo de desarrollo y asegurando la seguridad, escalabilidad y estabilidad de las plataformas.",
          bullets: [
            "Mantenimiento evolutivo y desarrollo de nuevas funcionalidades en sistemas en producción; diseño, implementación y consumo de APIs REST.",
            "Integración Frontend ↔ Backend ↔ Mobile e implementación de sistemas de notificaciones en tiempo real.",
            "Desarrollo de procesos de envío masivo de correos con control de tasa, reintentos y trazabilidad.",
            "Gestión de almacenamiento en la nube y archivos multimedia; soporte a builds, despliegues y entornos de desarrollo y producción.",
            "Aplicación de buenas prácticas de seguridad, arquitectura y documentación."
          ]
        },
        {
          id: "twentyfour",
          role: "Fullstack Developer", company: "TwentyFour Digital",
          period: "Mar 2023 — Ene 2024", type: "Por proyectos · Remoto (Perú)",
          summary: "Desarrollo y mantenimiento de una plataforma e-commerce full-stack de suscripciones digitales, contribuyendo al diseño de la arquitectura, la implementación de la API, el portal autenticado de clientes y el panel de administración.",
          bullets: [
            "Frontend SPA construido con React 19 + TypeScript + Vite y React Router v7: arquitectura basada en contextos, custom hooks, internacionalización (i18n) y separación de responsabilidades por capas.",
            "Gestión del catálogo de productos y ofertas con CRUD completo desde el panel de administración y precios multi-periodo (1, 3, 6 y 12 meses).",
            "Implementación de migraciones SQL evolutivas versionadas en SQL Server, incluyendo backfill de datos, normalización de números telefónicos y extensión del esquema sin downtime.",
            "Hosting de la API PHP en Azure App Service, gestión de imágenes en Azure Blob Storage y despliegue continuo con Azure DevOps Pipelines en entornos separados; capa adicional .NET (ASP.NET Core Web API) integrada con sistemas de terceros vía Azure Service Bus."
          ]
        }
      ]
    },
    projects: {
      heading: "Proyectos",
      sub: "Trabajo propio y académico",
      items: {
        legalbot: "Plataforma de asistencia legal con IA generativa y arquitectura RAG: análisis de documentos PDF, simulación de audiencias judiciales y recuperación semántica de legislación peruana.",
        logos: "Compilador completo para un lenguaje de dominio específico (DSL) de lógica proposicional: generación de LLVM IR, ejecución JIT y simulación de circuitos digitales.",
        plateocr: "Sistema de visión por computadora para detección y reconocimiento automático de placas vehiculares con YOLO11 y EasyOCR y preprocesamiento avanzado de imágenes.",
        safemoto: "Landing page responsiva para un sistema de monitoreo inteligente de motocicletas, con foco en UX/UI y rendimiento."
      }
    },
    skills: {
      heading: "Skills",
      sub: "Con lo que construyo y opero",
      groups: { languages: "Lenguajes", frontend: "Frontend", backend: "Backend", data: "Datos", cloud: "Cloud & DevOps", ai: "IA" }
    },
    education: {
      heading: "Educación",
      sub: "Formación y certificaciones",
      items: [
        { period: "2024 — Actualidad", title: "Bachiller en Ciencias de la Computación", inst: "UPC – Universidad Peruana de Ciencias Aplicadas · Lima" },
        { period: "2024", title: "Scrum Fundamentals", inst: "UPC – Universidad Peruana de Ciencias Aplicadas · Lima" },
        { period: "2024", title: "Excel Intermedio y Avanzado (certificado)", inst: "IDAT · Lima" },
        { period: "Certificado", title: "Inglés nivel C2", inst: "EF SET" }
      ]
    },
    contact: {
      heading: "Contacto",
      sub: "Hablemos",
      body: "Abierto a oportunidades de desarrollo, colaboraciones en proyectos y conversaciones sobre tecnología. Respondo en menos de 24 horas."
    }
  },

  en: {
    title: "Yago Caldas — Fullstack Developer · AI Platform Engineer · DevOps",
    description: "Fullstack Developer, AI Platform Engineer and DevOps based in Lima, Peru. Over three years building and operating production software: web, mobile, APIs, LLM platforms and infrastructure.",
    nav: { profile: "Profile", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
    ui: {
      copyEmail: "Copy email", copied: "Copied", downloadCv: "Download CV (Spanish)", viewExperience: "View experience",
      showMore: "Show {n} more", showMoreOne: "Show 1 more", showLess: "Show less", available: "Available for opportunities", current: "Current",
      toggleTheme: "Toggle theme", openMenu: "Open menu", closeMenu: "Close menu", visit: "Visit", code: "Code",
      builtWith: "Designed and built by Yago Caldas. No frameworks, no trackers."
    },
    hero: {
      eyebrow: "Fullstack Developer · AI Platform Engineer · DevOps",
      lead: "I build and operate production software: web and cross-platform applications, APIs, LLM-based conversational platforms, and cloud and on-premise infrastructure."
    },
    facts: [
      { value: "3+", label: "years of experience" },
      { value: "25+", label: "apps operated in production" },
      { value: "40+", label: "MCP tools designed" },
      { value: "C2", label: "certified English" }
    ],
    profile: {
      heading: "Profile",
      sub: "Who I am and how I work",
      body: "Fullstack Developer and AI Platform Engineer with over three years of experience building and operating production software: web and cross-platform applications, REST APIs, LLM-based conversational platforms and DevOps infrastructure on Azure, AWS and on-premise servers. End-to-end experience in architecture design, SQL Server and PostgreSQL database modeling and optimization, hardware and third-party system integration, continuous delivery and operation of business-critical services.",
      soft: ["Collaboration in agile environments (Scrum)", "Effective communication and cross-functional teamwork", "Self-directed learning", "Time management and accountability", "Analytical thinking and attention to detail", "Problem solving and technical autonomy"]
    },
    experience: {
      heading: "Experience",
      sub: "Five companies, three countries, real product in production",
      jobs: [
        {
          id: "techbot", current: true,
          role: "Fullstack Developer – Flutter & DevOps", company: "TECHBOT Perú",
          period: "Mar 2026 — Present", type: "Project-based · Remote (Peru)",
          summary: "Development, maintenance and production rollout of cross-platform Flutter applications (Windows, Android, Web) for self-service kiosks, POS systems and multi-tenant SaaS platforms, with end-to-end ownership of features, hardware integration, electronic invoicing and deployment on Linux VPS.",
          bullets: [
            "TravelCab Windows client (self-service kiosk) rolled out to production at Hotel Pullman: native USB printing through the Win32 Print Spooler API (C++ plugin in the Flutter runner), fullscreen kiosk mode, custom on-screen touch keyboard and inactivity control.",
            "SUNAT electronic invoicing integrated into the sales flow (TechFact/PSE): simple and electronic receipts with national ID validation via RENIEC, invoices with tax-ID lookup and tax regimes (taxed, exempt, non-taxable) correctly reflected in both the printed ticket and the SUNAT payload.",
            "ServiceHub, a multi-tenant SaaS maintenance and support management platform: deployment and operation on a VPS with Docker Compose (Laravel 12, PostgreSQL 17, Redis, RabbitMQ, MinIO S3) and two Flutter Web frontends served behind an nginx reverse proxy.",
            "DeliBakery, an Android self-service kiosk integrated with Qapp: native USB printing with no middleware dependency, order-ticket fallback when the LAN fails, and BBVA TotalPOS payment integration through a REST bridge.",
            "Employee validation microservice (FastAPI + PostgreSQL + Alembic) with a React/Vite admin panel, Excel template import/export, deployed with systemd and nginx.",
            "Computer vision backend for product recognition in self-checkout POS (CLIP + YOLO + Qdrant), with catalog image indexing and semantic search running in production for real clients.",
            "Administration of an Ubuntu 24.04 VPS hosting three coexisting services: Docker, multi-site nginx, UFW, fail2ban, SSH keys and automated deployment scripts; work with a distributed team using branch-based Git flow and code reviews."
          ]
        },
        {
          id: "labs24",
          role: "DevOps / Site Reliability Engineer", company: "24Labs (Geosatelital)",
          period: "Mar 2025 — Jul 2026", type: "Full-time · Remote (Peru)",
          summary: "Responsible for the deployment, automation and operation of the infrastructure behind an ecosystem of more than 25 applications (Ruby on Rails, Java Spring Boot, Python, Frappe/ERPNext) distributed across multiple data centers and clouds (AWS, Contabo, on-premise), ensuring availability, security and observability of production platforms.",
          bullets: [
            "Application deployment and standardization with Kamal 2 + Docker, provisioning VMs and containers on Proxmox via API (template cloning, cloud-init, disk resizing), with MySQL/PostgreSQL as accessories, Nginx and Let's Encrypt SSL certificates.",
            "Design and implementation of a monitoring stack with Zabbix 7.0 in high availability on PostgreSQL HA (pg_auto_failover), including dashboards, Docker container autodiscovery and host management through the Zabbix API.",
            "Administration of the corporate mail server (Postfix/Dovecot): account management, response to security incidents, blacklist delisting (Spamhaus, Microsoft) and SPF/DKIM/DMARC configuration.",
            "CI/CD automation with Gitea/Forgejo Actions and private Docker registries; tag-based deployments and reproducible builds.",
            "Database administration: MySQL master–slave replication with ProxySQL, TimescaleDB and replication lag troubleshooting.",
            "Networking and secure access (WireGuard, Tailscale, bastion host, NAT/iptables, HAProxy) and centralized authentication (OpenLDAP, CAS SSO, Authelia/OIDC).",
            "Operation and troubleshooting of production systems: Sidekiq/Solid Queue, Redis, disk and memory incidents, and zero-downtime deployments with automatic migrations."
          ]
        },
        {
          id: "buenaventura",
          role: "Fullstack Developer – AI Platform Engineer", company: "Compañía de Minas Buenaventura / DTECH",
          period: "Feb 2025 — May 2026", type: "Freelance · Remote (Peru)",
          summary: "End-to-end development of the environmental and occupational health & safety (OHS) software ecosystem for mining operations: the LLM-based conversational platform LucIAna, the Safe2biz / Eco2biz management system and infrastructure automation, covering AI, backend, frontend, data engineering, SQL migrations, deployment and legacy system auditing.",
          bullets: [
            "Design and implementation of LucIAna's Model Context Protocol (MCP) server with more than 40 specialized tools for querying environmental data (commitments, deviations, monitoring, PAS, schedules) on SQL Server, with AI-optimized views and precomputed exceedance flags to reduce LLM query latency.",
            "REST API development with FastAPI and ASP.NET Core, JWT authentication and role-based access control (manager, environmental head, specialist, auditor); deployed on Windows Server with IIS (ARR) as an HTTPS reverse proxy.",
            "In-house guardrails module aligned with the OWASP LLM Top 10 (prompt injection, data leakage, unbounded consumption), evaluation of the Microsoft Agent Governance Toolkit and definition of the agentic patterns roadmap.",
            "RAG (Retrieval-Augmented Generation) system with Qdrant as vector store and Google Gemini for embeddings and re-ranking over PDF documents of Peruvian environmental regulation.",
            "Redesign of the Safe2biz transactional email system (OHS alerts and alarms): 30+ database-editable HTML templates, styled dynamic tables and modification of T-SQL stored procedures on top of Database Mail.",
            "Technical audit of the corporate database (703 tables, 1,140 stored procedures, 123 views, 192 functions, 38 triggers): orphan object detection, documentation of the dynamic stored procedure invocation pattern, and architecture and ER diagrams.",
            "Adoption of Flyway for evolutionary SQL versioning across 3 products with GitHub traceability, plus an auto-deploy pipeline from GitHub to Windows Server using PowerShell scripts.",
            "Drag-and-drop pivot-table analytics dashboards for OHS accidents and incidents (multi-dimensional filters, drill-through and real Excel export via SheetJS), and technology evaluation to migrate environmental monitoring from discrete to continuous IoT (TimescaleDB, DuckDB, MQTT)."
          ]
        },
        {
          id: "synckonnect",
          role: "Fullstack Developer – App Developer", company: "SyncKonnect",
          period: "Jan 2024 — Feb 2026", type: "Full-time · Remote (United States)",
          summary: "Maintenance, evolution and implementation of new features in enterprise web, backend and mobile applications, taking part in the full development cycle and ensuring the security, scalability and stability of the platforms.",
          bullets: [
            "Evolutionary maintenance and development of new features in production systems; design, implementation and consumption of REST APIs.",
            "Frontend ↔ Backend ↔ Mobile integration and implementation of real-time notification systems.",
            "Development of bulk email delivery processes with rate control, retries and traceability.",
            "Cloud storage and media file management; support for builds, deployments and development and production environments.",
            "Application of security, architecture and documentation best practices."
          ]
        },
        {
          id: "twentyfour",
          role: "Fullstack Developer", company: "TwentyFour Digital",
          period: "Mar 2023 — Jan 2024", type: "Project-based · Remote (Peru)",
          summary: "Development and maintenance of a full-stack digital subscription e-commerce platform, contributing to architecture design, API implementation, the authenticated customer portal and the admin panel.",
          bullets: [
            "SPA frontend built with React 19 + TypeScript + Vite and React Router v7: context-based architecture, custom hooks, internationalization (i18n) and layered separation of concerns.",
            "Product and offer catalog management with full CRUD from the admin panel and multi-period pricing (1, 3, 6 and 12 months).",
            "Implementation of versioned evolutionary SQL migrations on SQL Server, including data backfill, phone number normalization and schema extension with no downtime.",
            "PHP API hosting on Azure App Service, image management on Azure Blob Storage and continuous deployment with Azure DevOps Pipelines across separate environments; additional .NET layer (ASP.NET Core Web API) integrated with third-party systems via Azure Service Bus."
          ]
        }
      ]
    },
    projects: {
      heading: "Projects",
      sub: "Personal and academic work",
      items: {
        legalbot: "Legal assistance platform with generative AI and RAG architecture: PDF document analysis, judicial hearing simulation and semantic retrieval of Peruvian legislation.",
        logos: "Complete compiler for a domain-specific language (DSL) for propositional logic: LLVM IR generation, JIT execution and digital circuit simulation.",
        plateocr: "Computer vision system for automatic detection and recognition of vehicle license plates with YOLO11 and EasyOCR and advanced image preprocessing.",
        safemoto: "Responsive landing page for an intelligent motorcycle monitoring system, focused on UX/UI and performance."
      }
    },
    skills: {
      heading: "Skills",
      sub: "What I build and operate with",
      groups: { languages: "Languages", frontend: "Frontend", backend: "Backend", data: "Data", cloud: "Cloud & DevOps", ai: "AI" }
    },
    education: {
      heading: "Education",
      sub: "Degrees and certifications",
      items: [
        { period: "2024 — Present", title: "BSc in Computer Science", inst: "UPC – Universidad Peruana de Ciencias Aplicadas · Lima" },
        { period: "2024", title: "Scrum Fundamentals", inst: "UPC – Universidad Peruana de Ciencias Aplicadas · Lima" },
        { period: "2024", title: "Intermediate and Advanced Excel (certified)", inst: "IDAT · Lima" },
        { period: "Certified", title: "English level C2", inst: "EF SET" }
      ]
    },
    contact: {
      heading: "Contact",
      sub: "Let's talk",
      body: "Open to development opportunities, project collaborations and conversations about technology. I reply within 24 hours."
    }
  }
};
