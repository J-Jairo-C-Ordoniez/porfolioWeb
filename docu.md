# Documento de Entrega del Proyecto
## Moda y Estilo — Sistema de Gestión de Catálogo e Inventario

---

| Campo | Detalle |
|---|---|
| **Fecha de entrega** | 28 de marzo de 2026 |
| **Desarrollador** | J. Jairo C. Ordoñez |
| **Cliente** | Moda y Estilo |
| **Versión** | 1.0.0 — Release inicial |
| **URL productiva** | [https://modayestilo.vercel.app](https://modayestilo.vercel.app) |

---

## Tabla de Contenidos

1. [Contexto y Problemática](#1-contexto-y-problemática)
2. [Objetivo del Sistema](#2-objetivo-del-sistema)
3. [Alcance y Limitaciones](#3-alcance-y-limitaciones)
4. [Requisitos del Sistema](#4-requisitos-del-sistema)
5. [Historias de Usuario](#5-historias-de-usuario)
6. [Flujos de Usuario](#6-flujos-de-usuario)
7. [Casos de Uso](#7-casos-de-uso)
8. [Diseño y Experiencia de Usuario](#8-diseño-y-experiencia-de-usuario)
9. [Diseño de Base de Datos](#9-diseño-de-base-de-datos)
10. [Arquitectura del Sistema](#10-arquitectura-del-sistema)
11. [Módulos del Sistema](#11-módulos-del-sistema)
12. [Tecnologías Utilizadas](#12-tecnologías-utilizadas)
13. [Estructura del Proyecto](#13-estructura-del-proyecto)
14. [Accesos del Sistema](#14-accesos-del-sistema)
15. [Guía de Operación Rápida](#15-guía-de-operación-rápida)
16. [Infraestructura y Despliegue](#16-infraestructura-y-despliegue)
17. [Posibilidades de Crecimiento](#17-posibilidades-de-crecimiento)
18. [Contacto y Soporte](#18-contacto-y-soporte)

---

## 1. Contexto y Problemática

La adopción de herramientas digitales en negocios de La Unión, Nariño, Colombia, aún es limitada. Muchos comercios pequeños y medianos gestionan sus procesos de forma manual, especialmente en áreas como el control de productos e inventario.

Después de conversar con la persona encargada del establecimiento **Moda y Estilo**, se identificó que el punto más crítico dentro del negocio era el manejo del catálogo de productos. El proceso actual se realiza de forma manual, lo cual genera:

- **Dificultad para consultar disponibilidad de productos** sin revisar registros físicos o verificar en bodega.
- **Pérdida de tiempo** en tareas de verificación que reducen la atención a clientes.
- **Falta de control claro** sobre productos disponibles, ventas realizadas y artículos a reponer.

A partir de esta problemática se identificó la oportunidad de implementar una herramienta digital que permita registrar, consultar y gestionar el catálogo de productos de manera rápida y accesible.

---

## 2. Objetivo del Sistema

> Desarrollar un sistema web que permita al administrador del negocio gestionar su catálogo e inventario de productos de forma ágil, y al mismo tiempo ofrezca a los clientes una vitrina digital moderna para explorar los productos disponibles.

**Objetivos específicos:**

- Digitalizar el catálogo de productos con variantes por talla y color.
- Brindar al cliente una experiencia de navegación clara y sin fricciones.
- Permitir el registro y control del inventario desde un panel administrativo.
- Registrar ventas y actualizar el stock de forma automática.
- Mostrar métricas básicas del negocio al administrador.
- Facilitar el contacto cliente–negocio a través de WhatsApp.

---

## 3. Alcance y Limitaciones

### Alcance del Proyecto

| Módulo | Descripción |
|---|---|
| **Landing Page** | Página pública con información del negocio, catálogo de productos y contacto vía WhatsApp |
| **Catálogo** | Registro y gestión de categorías, productos y variantes (talla / color) |
| **Inventario** | Control de stock por variante con alertas de bajo inventario |
| **Ventas** | Registro manual de ventas con descuento automático de inventario |
| **Dashboard** | Panel de métricas básicas: ventas del día, semana y mes; productos más vendidos |
| **Configuración** | Gestión de la información pública del negocio (About Us y Políticas) |
| **Autenticación** | Acceso seguro al panel administrativo mediante correo y contraseña |

### Limitaciones

- No se desarrolla una aplicación móvil nativa. El sistema es **web responsive**.
- No se implementa pasarela de pagos. La compra se gestiona mediante **redirección a WhatsApp** con mensaje prellenado.
- El sistema está pensado para un **único administrador** del negocio.

---

## 4. Requisitos del Sistema

### 4.1 Requisitos Funcionales

#### Gestión de Catálogo

| ID | Requisito |
|---|---|
| RF01 | El sistema debe permitir registrar productos en el catálogo. |
| RF02 | El sistema debe permitir clasificar los productos por categoría (gestionada por el admin). |
| RF03 | El sistema debe permitir registrar variantes de producto (talla y color) para cada ítem. |
| RF04 | El sistema debe permitir consultar rápidamente los productos del catálogo. |

#### Gestión de Inventario

| ID | Requisito |
|---|---|
| RF05 | El sistema debe permitir registrar la cantidad disponible de cada variante. |
| RF06 | El sistema debe actualizar automáticamente el inventario al registrar una venta. |
| RF07 | El sistema debe permitir visualizar el inventario actual de todos los productos. |

#### Registro de Ventas

| ID | Requisito |
|---|---|
| RF08 | El sistema debe permitir registrar la venta de un producto. |
| RF09 | El sistema debe descontar automáticamente la cantidad del inventario al registrar una venta. |

#### Búsqueda

| ID | Requisito |
|---|---|
| RF10 | El sistema debe permitir buscar productos por nombre, categoría, variante o descripción. |

#### Dashboard

| ID | Requisito |
|---|---|
| RF11 | El sistema debe mostrar métricas básicas de ventas (día, semana, mes). |

#### Autenticación

| ID | Requisito |
|---|---|
| RF12 | El sistema debe permitir al administrador iniciar sesión para gestionar el negocio. |

#### Gestión de Landing

| ID | Requisito |
|---|---|
| RF13 | Los productos registrados deben aparecer automáticamente en la landing pública. |
| RF14 | Cada producto debe ofrecer una opción de compra que redirija a WhatsApp con un mensaje prellenado. |
| RF15 | El administrador debe poder editar la información pública del negocio desde el panel. |

---

### 4.2 Requisitos No Funcionales

#### Globales

| ID | Categoría | Requisito |
|---|---|---|
| RNF01 | Rendimiento | El sistema debe responder a cualquier consulta en máximo **2 segundos** bajo condiciones normales de uso. |
| RNF02 | Usabilidad | La interfaz debe ser simple e intuitiva para personas con conocimientos tecnológicos básicos. |
| RNF03 | Compatibilidad | El sistema debe ser accesible desde navegadores modernos en dispositivos móviles y de escritorio. |
| RNF04 | Responsividad | La interfaz debe adaptarse correctamente a diferentes tamaños de pantalla. |
| RNF05 | Seguridad | Las funcionalidades administrativas deben requerir autenticación. |
| RNF06 | Disponibilidad | El sistema debe estar disponible durante el horario comercial del negocio sin interrupciones. |

#### Landing

| ID | Categoría | Requisito |
|---|---|---|
| RNF07 | Rendimiento | La landing debe cargar completamente en menos de **3 segundos** con conexión promedio. |
| RNF08 | Accesibilidad | El catálogo debe ser visible y navegable **sin necesidad de autenticación**. |
| RNF09 | Integración | La landing debe permitir redirigir al usuario a WhatsApp con enlace directo del producto. |
| RNF10 | SEO | La landing debe estar optimizada para motores de búsqueda básicos. |

#### Catálogo e Inventario

| ID | Categoría | Requisito |
|---|---|---|
| RNF11 | Mantenibilidad | El módulo de catálogo debe permitir CRUD sin afectar el resto del sistema. |
| RNF12 | Usabilidad | El registro o modificación de productos debe completarse en máximo **3 pasos**. |
| RNF13 | Consistencia | Cada producto debe tener información mínima obligatoria antes de ser registrado. |
| RNF14 | Integridad | El inventario no puede tener cantidades negativas. |
| RNF15 | Actualización | Los cambios en inventario deben reflejarse inmediatamente en el sistema. |
| RNF16 | Confiabilidad | El sistema debe registrar correctamente todas las modificaciones de inventario. |

#### Ventas y Dashboard

| ID | Categoría | Requisito |
|---|---|---|
| RNF17 | Consistencia | El registro de una venta debe actualizar automáticamente el inventario. |
| RNF18 | Velocidad | El proceso de registro de venta debe completarse en menos de **5 segundos**. |
| RNF19 | Visualización | Las métricas deben presentarse mediante gráficos o indicadores numéricos claros. |
| RNF20 | Actualización | Las métricas del dashboard deben actualizarse al registrarse nuevas ventas. |

#### Seguridad

| ID | Categoría | Requisito |
|---|---|---|
| RNF21 | Seguridad | Las contraseñas deben almacenarse con técnicas de cifrado (bcrypt). |
| RNF22 | Control de acceso | Solo usuarios autenticados pueden acceder a funcionalidades administrativas. |

---

## 5. Historias de Usuario

### Gestión de Landing

---

#### HU-01 — Mostrar el negocio a los clientes
> **Como** dueño del negocio, **quiero** mostrar información del negocio en una página pública, **para que** mis clientes lo conozcan antes de visitar el local.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe mostrar una sección hero con el nombre y slogan del negocio.
- [ ] CA2 — El sistema debe mostrar información básica del negocio.
- [ ] CA3 — El sistema debe incluir opción de contacto directo por WhatsApp.

---

#### HU-02 — Presentación personal del negocio
> **Como** dueño del negocio, **quiero** que los clientes conozcan la historia del local, **para** generar confianza y cercanía.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe mostrar una sección "Sobre Nosotros" con información del negocio y su dueño.
- [ ] CA2 — La información debe ser editable desde el panel administrativo.

---

#### HU-03 — Visualizar catálogo de productos
> **Como** cliente, **quiero** visualizar el catálogo de productos, **para** conocer lo que ofrece el negocio sin necesidad de ir al local.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe mostrar productos disponibles públicamente.
- [ ] CA2 — Cada producto debe mostrar imagen, nombre y precio.
- [ ] CA3 — El catálogo debe ser accesible sin iniciar sesión.
- [ ] CA4 — Cada producto debe incluir opción de contacto por WhatsApp.

---

#### HU-04 — Comunicar políticas del negocio
> **Como** dueño del negocio, **quiero** mostrar las políticas del local, **para** generar claridad y seguridad en los clientes.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe mostrar las políticas del negocio en una sección pública.
- [ ] CA2 — El contenido debe ser editable desde el panel administrativo.

---

### Gestión de Catálogo

---

#### HU-05 — Registrar categorías de productos
> **Como** administrador, **quiero** crear categorías de productos, **para** organizar correctamente el catálogo del local.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe permitir ingresar el nombre de la categoría.
- [ ] CA2 — La categoría debe guardarse y aparecer inmediatamente en la lista.
- [ ] CA3 — El sistema no debe permitir categorías duplicadas.

---

#### HU-06 — Registrar productos en el catálogo
> **Como** administrador, **quiero** registrar productos dentro de una categoría, **para** organizar el catálogo del local.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe permitir seleccionar una categoría existente.
- [ ] CA2 — El sistema debe permitir ingresar nombre, marca y descripción del producto.
- [ ] CA3 — El producto registrado debe aparecer en el catálogo.

---

#### HU-07 — Registrar variantes de producto
> **Como** administrador, **quiero** registrar variantes (talla y color) para cada producto, **para** diferenciar las presentaciones disponibles.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe permitir seleccionar un producto existente.
- [ ] CA2 — El sistema debe permitir ingresar talla, color y precio de la variante.
- [ ] CA3 — La variante debe quedar asociada al producto y visible en su detalle.

---

#### HU-08 — Alerta de stock agotado
> **Como** administrador, **quiero** que el sistema resalte visualmente las variantes sin stock, **para** saber qué artículos debo reponer.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe resaltar visualmente las variantes con stock igual a cero.

---

#### HU-09 — Consulta rápida del catálogo
> **Como** administrador, **quiero** buscar productos del catálogo rápidamente, **para** atender a los clientes con mayor agilidad.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe mostrar una lista de productos disponibles.
- [ ] CA2 — El sistema debe permitir búsqueda por nombre, categoría, variante o descripción.
- [ ] CA3 — El sistema debe mostrar variantes y cantidades disponibles.
- [ ] CA4 — La consulta debe realizarse en menos de 2 segundos.

---

### Gestión de Inventario

---

#### HU-10 — Registrar cantidad disponible por variante
> **Como** administrador, **quiero** registrar la cantidad disponible de cada variante, **para** saber cuántos productos tengo en inventario.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe permitir ingresar cantidades por variante.
- [ ] CA2 — El inventario debe actualizarse inmediatamente al modificar una cantidad.
- [ ] CA3 — El sistema debe alertar cuando la cantidad de una variante sea cero.
- [ ] CA4 — El sistema no debe permitir cantidades negativas.

---

#### HU-11 — Consultar disponibilidad de productos
> **Como** administrador, **quiero** consultar rápidamente el stock disponible, **para** responder de inmediato cuando un cliente solicite un artículo.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe mostrar lista de productos con sus variantes y cantidades.
- [ ] CA2 — El sistema debe permitir búsqueda por nombre de producto.
- [ ] CA3 — La consulta debe realizarse en menos de 2 segundos.

---

### Registro de Ventas

---

#### HU-12 — Registrar ventas
> **Como** administrador, **quiero** registrar las ventas realizadas en el local, **para** llevar un control de lo que se vende.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe permitir seleccionar una variante de producto.
- [ ] CA2 — El sistema debe permitir ingresar la cantidad vendida.
- [ ] CA3 — El sistema debe registrar la venta y descontar automáticamente el inventario.

---

### Dashboard

---

#### HU-13 — Visualizar métricas del negocio
> **Como** administrador, **quiero** ver métricas de ventas, **para** entender el rendimiento del negocio.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe mostrar ventas del día, semana y mes.
- [ ] CA2 — El sistema debe mostrar los productos más vendidos.
- [ ] CA3 — Los datos deben actualizarse automáticamente al registrarse una venta.

---

### Autenticación

---

#### HU-14 — Iniciar sesión en el sistema
> **Como** administrador, **quiero** iniciar sesión de forma segura, **para** acceder a las funciones de gestión del negocio.

**Criterios de aceptación:**
- [ ] CA1 — El sistema debe solicitar correo y contraseña.
- [ ] CA2 — El sistema debe validar las credenciales ingresadas.
- [ ] CA3 — El sistema debe redirigir al panel administrativo con credenciales correctas.
- [ ] CA4 — El sistema debe bloquear el acceso con credenciales incorrectas.

---

## 6. Flujos de Usuario

### Tipos de Usuario

| Rol | Capacidades |
|---|---|
| **Cliente** | Ver landing, explorar catálogo, contactar por WhatsApp |
| **Administrador** | Todo lo anterior + gestionar catálogo, inventario, ventas, configuración y dashboard |

### Flujo General del Sistema

```
Landing Page
  │
  ├── Hero Section
  ├── About Us
  ├── Catálogo de Productos
  │       └── Contactar por WhatsApp
  ├── Políticas del Negocio
  └── Login (Administrador)
          └── Panel Administrativo
                 ├── Dashboard (métricas)
                 ├── Gestión de categorías
                 ├── Gestión de Catálogo
                 │     ├── Productos
                 │     └── Variantes
                 ├── Gestión de Inventario
                 └── Registro de Ventas
                 └── Gestión de Landing / políticas
```

### UF-01 — Cliente consulta el catálogo

```
Cliente ingresa a la landing
  └── Explora el catálogo de productos
        └── Selecciona un producto
              └── Presiona "Comprar por WhatsApp"
                    └── Se abre WhatsApp con mensaje prellenado
```

### UF-02 — Administrador inicia sesión

```
Administrador accede a /login
  └── Ingresa correo y contraseña
        ├── Credenciales correctas → Redirige al Dashboard
        └── Credenciales incorrectas → Muestra error, permanece en login
```

### UF-03 — Administrador gestiona las categorías

```
Accede al módulo de categorías
  ├── Crea / edita / elimina Categorías
```

### UF-04 — Administrador gestiona el catálogo

```
Accede al módulo de Catálogo
  ├── Crea / edita / elimina Productos (asigna categoría)
  └── Crea / edita / elimina Variantes (talla, color, precio, SKU)
```

### UF-05 — Registrar producto

```
Accede a Catálogo → Crear Producto
  └── Completa: nombre, marca, descripción, categoría, género
        └── Guarda
              └── Producto aparece en catálogo y landing
```

### UF-05 — Registrar variante de producto

```
Abre un Producto existente → Añadir Variante
  └── Define: talla, color, precio, SKU
        └── Guarda
              └── Variante asociada y visible en el detalle
```

### UF-06 — Gestión de Inventario

```
Accede a Inventario
  └── Busca producto o variante
        └── Actualiza cantidad disponible
              ├── Stock > 1 → Estado normal
              └── Stock = 0 → Alerta visual
```

### UF-07 — Registrar venta

```
Accede a Ventas → Registrar Venta
  └── Busca y selecciona variante de producto
        └── Ingresa cantidad vendida
              └── Confirma
                    ├── Venta registrada en historial
                    ├── Inventario descontado automáticamente
                    └── Métricas del dashboard actualizadas
```

---

## 7. Casos de Uso

### CU01 — Consultar Catálogo
**Actor:** Cliente  
**Precondición:** Ninguna (sin autenticación)  
**Flujo:**
1. El cliente ingresa a la landing.
2. Navega por el catálogo de productos.
3. Selecciona un producto para ver su detalle.

**Resultado:** El cliente visualiza información completa del producto.

---

### CU02 — Contactar por WhatsApp
**Actor:** Cliente  
**Flujo:**
1. El cliente abre el detalle de un producto.
2. Presiona el botón de contacto.
3. Se abre WhatsApp con un mensaje prellenado indicando el producto de interés.

**Resultado:** El cliente inicia una conversación directa con el negocio.

---

### CU03 — Iniciar Sesión
**Actor:** Administrador  
**Flujo:**
1. Accede a `/login`.
2. Ingresa correo y contraseña.
3. El sistema valida credenciales.
4. Si son válidas, redirige al dashboard.
5. Si no son válidas, muestra mensaje de error.

**Resultado:** El administrador accede al sistema de gestión.

---

### CU04 — Visualizar Dashboard
**Actor:** Administrador  
**Flujo:**
1. Accede al panel administrativo.
2. El sistema presenta métricas:
   - Ventas del día, semana y mes.
   - Gráficas de tendencia.
   - Variantes más vendidas.
   - Variantes con stock bajo o agotado.

---

### CU05 — Gestionar Contenido de la Landing
**Actor:** Administrador  
**Flujo:**
1. Accede al módulo de Configuración.
2. Visualiza y edita: título, subtítulo, foto de portada, información del negocio, políticas.
3. Guarda los cambios.
4. Los cambios se reflejan inmediatamente en la landing.

---

### CU06 — Gestionar Categorías
**Actor:** Administrador  
**Flujo:**
1. Accede al módulo de Categorías.
2. Puede **crear** una categoría ingresando un nombre único.
3. Puede **editar** el nombre de una categoría existente.
4. Puede **eliminar** una categoría previo aviso de confirmación (solo si no tiene productos asociados o el sistema lo permite).

---

### CU07 — Registrar Producto
**Actor:** Administrador  
**Flujo:**
1. Accede al módulo de Catálogo.
2. Selecciona "Crear Producto".
3. Ingresa: nombre, marca, descripción, categoría, género.
4. Guarda el producto.

**Resultado:** El producto queda registrado y visible en el catálogo.

---

### CU08 — Crear Variantes de Producto
**Actor:** Administrador  
**Flujo:**
1. Abre un producto existente.
2. Accede a la sección "Variantes".
3. Crea una variante definiendo: talla, color, precio, SKU.
4. Guarda.

**Resultado:** La variante queda asociada al producto y disponible en el catálogo.

---

### CU09 — Gestionar Inventario
**Actor:** Administrador  
**Flujo:**
1. Accede al módulo de Inventario.
2. Busca el producto deseado.
3. Selecciona la variante a actualizar.
4. Modifica la cantidad disponible.

**Resultado:** El inventario se actualiza inmediatamente.

---

### CU10 — Registrar Venta
**Actor:** Administrador  
**Flujo:**
1. Accede al módulo de Ventas.
2. Busca y selecciona la variante vendida.
3. Ingresa la cantidad vendida.
4. Confirma la venta.

**Resultado:**
- Venta registrada en el historial.
- Inventario descontado automáticamente.
- Métricas del dashboard actualizadas.

---

## 8. Diseño y Experiencia de Usuario

### Principios UX

El sistema fue diseñado bajo el principio de **mínimo esfuerzo cognitivo**, buscando que tanto el cliente como el administrador logren su objetivo con la menor cantidad de pasos posible.

| Principio | Aplicación |
|---|---|
| **No hacer pensar al usuario** | Categorías visibles, grid de productos claro, CTA de WhatsApp inmediato |
| **Mínimo de pasos** | Registro en 3 pasos máximo, acceso en 1 clic a variantes |
| **La landing sabe lo que el cliente necesita** | Hero con propuesta de valor + catálogo de inmediato |

### Flujo de Descubrimiento del Negocio

```
Instagram / WhatsApp / recomendación
  ↓
Ingresa a la landing
  ↓
Explora el catálogo
  ↓
Contacta por WhatsApp
```

### Paleta de Colores

| Rol | Color | Uso |
|---|---|---|
| Fondo general | `#F5F5F5` | Fondo principal de la landing |
| Superficies | `#FFFFFF` | Tarjetas de productos |
| Texto principal | `#1A1A1A` | Títulos y cuerpo |
| Texto secundario | `#6B6B6B` | Subtítulos y etiquetas |
| Color de acento | `#3B5D4F` | Botones, highlights, hover |

> **Regla de uso:** 90% colores neutros — 10% acento.

### Tipografía

- **Principal:** Inter / DM Sans — sans-serif limpia y moderna.
- **Acento:** Playfair Display — para títulos de alto impacto visual.

### Concepto Visual

- Minimalismo con el **producto como protagonista**.
- Grid de 3 columnas con imágenes grandes y espacio negativo generoso.
- Microanimaciones sutiles: hover en tarjetas, transiciones suaves de imágenes, aparición progresiva del catálogo.

### Jerarquía Visual en Tarjetas de Producto

```
1. Imagen del producto  (elemento dominante)
2. Nombre del producto
3. Precio
4. Acción (Comprar por WhatsApp)
```

---

## 9. Diseño de Base de Datos

El modelo de datos fue diseñado para reflejar con precisión las operaciones reales del negocio. A continuación se describen las entidades principales.

### Diagrama de Entidades

```
users ──────────── codes
  │
aboutUs           policies

categories ─────── products ───────── variants ─────── images
                                          │
                                     inventories
                                          │
                                        sales
                                          │
                                  purchaseIntents
```

### Entidades y Atributos

#### `users`
| Campo | Tipo | Restricciones |
|---|---|---|
| userId | INT AUTO_INCREMENT | PK, UNIQUE |
| name | VARCHAR(100) | NOT NULL |
| email | VARCHAR(50) | UNIQUE, NOT NULL |
| password | VARCHAR(255) | NOT NULL (bcrypt) |
| avatar | VARCHAR(255) | — |
| isVerified | BOOLEAN | DEFAULT FALSE |
| createdAt / updatedAt | TIMESTAMP | — |

#### `codes`
| Campo | Tipo | Restricciones |
|---|---|---|
| codeId | INT AUTO_INCREMENT | PK, UNIQUE |
| code | VARCHAR(255) | NOT NULL |
| type | ENUM('verify', 'reset') | NOT NULL |
| deadline | DATE | NOT NULL |
| userId | INT UNSIGNED | FK → users |
| createdAt | TIMESTAMP | — |

#### `categories`
| Campo | Tipo | Restricciones |
|---|---|---|
| categoryId | INT AUTO_INCREMENT | PK, UNIQUE |
| name | VARCHAR(50) | NOT NULL |
| createdAt / updatedAt | TIMESTAMP | — |

#### `products`
| Campo | Tipo | Restricciones |
|---|---|---|
| productId | INT AUTO_INCREMENT | PK, UNIQUE |
| categoryId | INT UNSIGNED | FK → categories |
| name | VARCHAR(50) | NOT NULL |
| description | TEXT | — |
| gender | ENUM('hombre', 'mujer', 'mixto') | NOT NULL |
| createdAt / updatedAt | TIMESTAMP | — |

#### `variants`
| Campo | Tipo | Restricciones |
|---|---|---|
| variantId | INT AUTO_INCREMENT | PK, UNIQUE |
| productId | INT UNSIGNED | FK → products |
| image | VARCHAR(255) | NOT NULL |
| sku | VARCHAR(50) | UNIQUE |
| color | VARCHAR(20) | — |
| size | VARCHAR(5) | — |
| price | DECIMAL(13,2) | NOT NULL |
| popularity | INT UNSIGNED | DEFAULT 0 |
| isActive | BOOLEAN | DEFAULT TRUE |
| createdAt / updatedAt | TIMESTAMP | — |

#### `inventories`
| Campo | Tipo | Restricciones |
|---|---|---|
| inventoryId | INT AUTO_INCREMENT | PK, UNIQUE |
| variantId | INT UNSIGNED | FK → variants |
| stock | INT UNSIGNED | NOT NULL (≥ 0) |
| createdAt / updatedAt | TIMESTAMP | — |

#### `images`
| Campo | Tipo | Restricciones |
|---|---|---|
| imageId | INT AUTO_INCREMENT | PK, UNIQUE |
| variantId | INT UNSIGNED | FK → variants |
| content | VARCHAR(255) | NOT NULL (URL Cloudinary) |
| isPrimary | BOOLEAN | DEFAULT FALSE |
| createdAt / updatedAt | TIMESTAMP | — |

#### `sales`
| Campo | Tipo | Restricciones |
|---|---|---|
| saleId | INT AUTO_INCREMENT | PK, UNIQUE |
| variantId | INT UNSIGNED | FK → variants |
| amount | INT UNSIGNED | NOT NULL |
| total | DECIMAL(13,2) | NOT NULL |
| paymentMethod | VARCHAR(100) | — |
| createdAt / updatedAt | TIMESTAMP | — |

#### `purchaseIntents`
| Campo | Tipo | Restricciones |
|---|---|---|
| purchaseIntentId | INT AUTO_INCREMENT | PK, UNIQUE |
| variantId | INT UNSIGNED | FK → variants |
| amount | INT UNSIGNED | DEFAULT 1 |
| createdAt / updatedAt | TIMESTAMP | — |

#### `aboutUs`
| Campo | Tipo | Restricciones |
|---|---|---|
| aboutId | INT AUTO_INCREMENT | PK, UNIQUE |
| logo | VARCHAR(255) | — |
| photo | VARCHAR(255) | — |
| content | JSON | — |
| contact | CHAR(10) | — |
| createdAt / updatedAt | TIMESTAMP | — |

#### `policies`
| Campo | Tipo | Restricciones |
|---|---|---|
| policyId | INT AUTO_INCREMENT | PK, UNIQUE |
| content | JSON | — |
| createdAt / updatedAt | TIMESTAMP | — |

---

## 10. Arquitectura del Sistema

### Enfoque Arquitectónico

El sistema fue desarrollado bajo una **arquitectura monolítica modular**, donde el frontend y el backend conviven dentro del mismo proyecto Next.js, pero organizados en capas independientes con responsabilidades claras.

Este enfoque fue elegido por:

- La escala inicial del proyecto (negocio local unipersonal).
- Simplicidad operativa y de despliegue.
- Los recursos de infraestructura disponibles (plan gratuito).
- La posibilidad de escalar modularmente en el futuro.

### Capas del Sistema

```
┌─────────────────────────────────────────────┐
│                 NAVEGADOR                    │
│          (Next.js — React)                   │
└───────────────────┬─────────────────────────┘
                    │ HTTP / API Routes
┌───────────────────▼─────────────────────────┐
│              APLICACIÓN                      │
│   Next.js (SSR + API Routes + Middleware)    │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │  Módulos │  │ Servicios│  │Repositorios│  │
│  └──────────┘  └──────────┘  └───────────┘  │
└───────────────────┬─────────────────────────┘
                    │ Prisma ORM / SQL
┌───────────────────▼─────────────────────────┐
│           BASE DE DATOS                      │
│         TiDB Cloud (MySQL)                   │
└─────────────────────────────────────────────┘
```

### Modelo de Despliegue

```
Usuario
  ↓
Vercel (Next.js — Frontend + Backend)
  ↓
TiDB Cloud (Base de Datos — MySQL)
  ↓
Cloudinary (Almacenamiento de Imágenes)
```

### Flujo de Autenticación

```
Usuario ingresa credenciales
  ↓
API Route /api/auth/login
  ↓
Validación en servidor (AuthService)
  ↓
Token firmado → Cookie httpOnly / secure / sameSite
  ↓
Middleware valida cookie en rutas privadas
  ├── Válida → acceso permitido
  └── Inválida → redirección a /login
```

> **Seguridad:** Las cookies se configuran como `httpOnly`, `secure` y `sameSite=strict`, lo que evita acceso desde scripts del navegador y reduce el riesgo de ataques XSS y CSRF.

### Organización Interna por Capas

| Capa | Responsabilidades |
|---|---|
| **UI (Componentes / Páginas)** | Renderizar información, manejar interacciones del usuario |
| **Backend (Controladores / Servicios)** | Lógica de negocio, validaciones, coordinación entre capas |
| **Repositorios** | Abstracción del acceso a datos, ejecución de consultas |
| **Persistencia (BD)** | Almacenamiento y manipulación de datos |

---

## 11. Módulos del Sistema

El sistema está construido con una arquitectura **Repository → Service → Controller**, donde cada módulo tiene responsabilidades claramente separadas. A continuación se documenta la estructura real implementada en el proyecto.

### Backend

---

#### Catalog Module

Gestiona el catálogo público y el panel de administración de productos, variantes y categorías. Es el módulo más grande del sistema.

**Estructura real:**
```
modules/catalog/
  ├── controllers/
  │   ├── catalog.controller.js     # Consultas públicas del catálogo
  │   └── category.controller.js    # CRUD de categorías (admin)
  ├── services/
  │   ├── catalog.service.js         # Lógica de lectura pública
  │   ├── product.service.js         # CRUD de productos
  │   ├── variant.service.js         # CRUD de variantes
  │   └── category.service.js        # CRUD de categorías
  └── repositories/
      ├── catalog.repository.js      # Consultas de lectura para la landing
      ├── product.repository.js      # Acceso a datos de productos
      ├── variant.repository.js      # Acceso a datos de variantes
      └── category.repository.js     # Acceso a datos de categorías
```

**Métodos por servicio:**

| Servicio | Métodos |
|---|---|
| `CatalogService` | `getAllProducts(filters)`, `getColors()`, `getProductById(id)`, `getCategories()`, `getPopularVariants(limit)`, `getVariantById(id)` |
| `ProductService` | `getAllProducts()`, `getProductById(id)`, `createProduct(data)`, `updateProduct(id, data)`, `deleteProduct(id)` |
| `VariantService` | `getAllVariants()`, `getVariantById(id)`, `createVariant(data)`, `updateVariant(id, data)`, `deleteVariant(id)`, `incrementPopularity(id, amount)` |
| `CategoryService` | `getAllCategories()`, `getCategoryById(id)`, `createCategory(data)`, `updateCategory(id, data)`, `deleteCategory(id)` |

**Reglas de dominio:**
- Un producto requiere nombre, categoría y género para ser registrado.
- Una variante requiere `productId`, nombre, SKU y precio.
- No se puede eliminar un producto si tiene variantes asociadas.
- No se puede eliminar una categoría si tiene productos asociados.
- Los filtros del catálogo público siempre trabajan sobre variantes.

**API Routes expuestas:**
```
GET    /api/catalog                  → Lista de variantes con filtros
GET    /api/catalog/products          → Lista de productos (admin)
GET    /api/catalog/products/[id]     → Detalle de producto con variantes
POST   /api/catalog/products          → Crear producto
PUT    /api/catalog/products/[id]     → Actualizar producto
DELETE /api/catalog/products/[id]     → Eliminar producto
GET    /api/catalog/variants          → Lista de variantes
GET    /api/catalog/variants/[id]     → Detalle de variante
POST   /api/catalog/variants          → Crear variante
PUT    /api/catalog/variants/[id]     → Actualizar variante
DELETE /api/catalog/variants/[id]     → Eliminar variante
GET    /api/categories                → Lista de categorías
POST   /api/categories                → Crear categoría
PUT    /api/categories/[id]           → Actualizar categoría
DELETE /api/categories/[id]           → Eliminar categoría
```

---

#### Inventory Module

Controla la disponibilidad real de cada variante de producto. Actúa también como proveedor de datos para el dashboard.

**Estructura real:**
```
modules/inventory/
  ├── controllers/
  │   └── inventory.controller.js
  ├── services/
  │   └── inventory.service.js
  └── repositories/
      └── inventory.repository.js
```

**Métodos del `InventoryService`:**

| Método | Descripción |
|---|---|
| `checkStock(variantId)` | Consulta el stock actual de una variante |
| `decreaseStock(variantId, amount)` | Descuenta stock; lanza error si es insuficiente |
| `increaseStock(variantId, amount)` | Aumenta el stock de una variante |
| `getAllInventory()` | Retorna todos los productos con su inventario |
| `updateInventoryStock(variantId, stock)` | Actualiza stock directo; valida que no sea negativo |
| `getDashboardData()` | Retorna total de stock y lista de variantes con stock bajo |

**Reglas de dominio:**
- El stock nunca puede ser negativo (validado en `updateInventoryStock`).
- Si el stock es insuficiente para una venta, la operación es rechazada.
- Umbral de stock bajo: variantes con stock ≤ 10 unidades.

**API Route:**
```
GET /api/inventory      → Lista completa de inventario con productos
PUT /api/inventory      → Actualizar stock de una variante
```

---

#### Sales Module

Registro manual de ventas. Coordina con InventoryService y VariantService en una operación compuesta.

**Estructura real:**
```
modules/sales/
  ├── controllers/
  │   ├── sales.controller.js       # Registro y consulta de ventas
  │   └── dashboard.controller.js   # Métricas para el dashboard
  ├── services/
  │   └── sales.service.js
  └── repositories/
      └── sales.repository.js
```

**Métodos del `SalesService`:**

| Método | Descripción |
|---|---|
| `registerSale(saleData)` | Descuenta stock, registra la venta e incrementa popularidad de la variante |
| `getAllSales()` | Retorna historial completo de ventas |
| `getDashboardMetrics()` | Retorna métricas de ventas por día, semana, mes, total de registros e ingresos |

**Dependencias internas:**
- `InventoryService.decreaseStock()` — descuenta stock antes de registrar la venta.
- `VariantService.incrementPopularity()` — incrementa la popularidad de la variante vendida.

**Reglas de dominio:**
- Una venta solo se registra si hay stock suficiente.
- El proceso de venta es secuencial: verificar stock → registrar venta → actualizar popularidad.

**API Routes:**
```
GET  /api/sales              → Historial de ventas
POST /api/sales              → Registrar nueva venta
GET  /api/dashboard/stats    → Métricas del dashboard
```

---

#### Auth Module

Gestiona el acceso del administrador al sistema con autenticación segura y recuperación de contraseña por correo electrónico.

**Estructura real:**
```
modules/auth/
  ├── repositories/
  │   └── auth.repository.js
  └── sevices/
      └── auth.service.js
```

**Métodos del `AuthService`:**

| Método | Descripción |
|---|---|
| `authenticateUser(email, password)` | Valida credenciales con bcrypt; lanza error si son inválidas |
| `requestPasswordReset(email)` | Genera código de 6 dígitos, lo hashea y envía por correo |
| `verifyResetCode(email, code)` | Verifica el código (hasheado + expiración de 1 hora) |
| `resetPassword(email, newPassword)` | Hashea la nueva contraseña y elimina los códigos usados |

**Reglas de dominio:**
- Las contraseñas se almacenan con hash bcrypt (`bcryptjs`).
- Los códigos de recuperación expiran en 1 hora.
- La sesión se gestiona mediante NextAuth con cookies `httpOnly`, `secure` y `sameSite`.
- Solo un administrador activo en el sistema.

**Integración:**
- NextAuth (`/api/auth/[...nextauth]`) gestiona la sesión.
- `emailService` (`shared/utils/email.service.js`) envía códigos por correo.

**API Routes:**
```
POST /api/auth/[...nextauth]        → Login / logout (NextAuth)
POST /api/auth/forgot-password      → Solicitar código de recuperación
```

---

#### About Module

Gestiona la información pública del negocio visible en la landing (sección "Sobre Nosotros").

**Estructura real:**
```
modules/about/
  ├── controllers/
  │   └── aboutUs.controller.js
  ├── domain/
  │   └── aboutUs.domain.js          # Transformación de datos (paragraphs → JSON)
  ├── services/
  │   └── aboutUs.service.js
  └── repositories/
      └── aboutUs.repository.js
```

**Métodos del `AboutUsService`:**

| Método | Descripción |
|---|---|
| `getAboutUs()` | Retorna toda la información del negocio |
| `getContact()` | Retorna solo el número de contacto (WhatsApp) |
| `updateAboutUs(data)` | Actualiza la información del negocio |

**API Route:**
```
GET /api/about      → Información pública del negocio
PUT /api/about      → Actualizar información del negocio (admin)
```

---

#### Policies Module

Gestiona las políticas del negocio visibles en la landing.

**Estructura real:**
```
modules/policies/
  ├── controllers/
  │   └── policy.controller.js
  ├── services/
  │   └── policy.service.js
  └── repositories/
      └── policy.repository.js
```

**Métodos del `PolicyService`:**

| Método | Descripción |
|---|---|
| `getLatestPolicy()` | Retorna las políticas actuales del negocio |
| `updatePolicy(content)` | Actualiza las políticas |

**API Route:**
```
GET /api/policies      → Políticas públicas del negocio
PUT /api/policies      → Actualizar políticas (admin)
```

---

### Frontend — Componentes UI

#### Componentes de la Landing (públicos)

```
components/structure/
  ├── header/      # Barra de navegación pública con filtros de género
  ├── main/        # Catálogo principal con grilla de productos y filtros
  ├── footer/      # Pie de página con información del negocio
  ├── about/       # Sección "Sobre Nosotros"
  ├── contact/     # Información de contacto
  ├── policies/    # Sección de políticas del negocio
  ├── product/     # Vista detallada de producto
  └── search/      # Vista de búsqueda con estados: inicial, buscando, sin resultados
```

#### Componentes del Dashboard (admin)

```
components/dashboard/
  ├── sidebar/      # Navegación lateral del panel
  ├── header/       # Encabezado del dashboard con usuario activo
  ├── main/         # Vista de métricas (Overview)
  ├── catalog/      # Gestión de productos y variantes
  ├── categories/   # Gestión de categorías con modales de confirmación
  ├── inventory/    # Visualización y actualización de stock
  ├── sales/        # Registro de ventas e historial
  └── settings/     # Edición de About Us y Políticas
```

#### Estado Global (Zustand Stores)

| Store | Archivo | Responsabilidad |
|---|---|---|
| `filterCatalog` | `filterCatalog.store.js` | Filtros activos del catálogo (género, categoría, color) |
| `dashboard` | `dashboard.store.js` | Estado del panel administrativo |
| `breadcrumbs` | `breadcrumbs.store.js` | Navegación de migas de pan en el dashboard |

---

## 12. Tecnologías Utilizadas

| Área | Tecnología | Justificación |
|---|---|---|
| **Framework** | Next.js 16 | SSR, API Routes, middleware, routing — todo en un solo proyecto |
| **UI** | React + Tailwind CSS | Componentes reutilizables, diseño rápido y responsivo |
| **ORM** | Prisma | Abstracción de base de datos, tipado fuerte, migraciones |
| **Base de datos** | TiDB Cloud (MySQL) | Compatible con MySQL, plan gratuito funcional, alta escalabilidad |
| **Autenticación** | Auth.js (NextAuth) | Gestión de sesiones con cookies seguras |
| **Imágenes** | Cloudinary | Almacenamiento externo optimizado para imágenes |
| **Estado global** | Zustand | Store ligero para manejo de estado en el cliente |
| **Despliegue** | Vercel | Optimizado para Next.js, CI/CD con Git, escala automática |
| **Control de versiones** | GitHub | Historial de desarrollo, colaboración y despliegue continuo |

---

## 13. Estructura del Proyecto

Esta es la estructura real del proyecto tal como fue implementada:

```
src/
│
├── app/                               # Next.js App Router — UI y endpoints
│   ├── page.js                        # Página raíz (redirige a landing)
│   ├── layout.js                      # Layout global (fuentes, DemoBanner)
│   │
│   ├── (public)/                      # Rutas públicas (sin autenticación)
│   │   ├── aboutUs/page.js            # Sección Sobre Nosotros
│   │   ├── contact/page.js            # Página de contacto
│   │   ├── policies/page.js           # Políticas del negocio
│   │   ├── product/[id]/page.js       # Detalle de producto/variante
│   │   └── search/page.js             # Búsqueda de productos
│   │
│   ├── (admin)/                       # Rutas privadas (requieren sesión)
│   │   └── dashboard/                 # Panel administrativo
│   │
│   └── api/                           # API Routes del backend
│       ├── auth/
│       │   ├── [...nextauth]/         # NextAuth — login / logout
│       │   └── forgot-password/       # Recuperación de contraseña
│       ├── about/                     # GET / PUT información del negocio
│       ├── policies/                  # GET / PUT políticas
│       ├── catalog/
│       │   ├── route.js               # GET catálogo con filtros
│       │   ├── products/
│       │   │   ├── route.js           # GET lista / POST crear producto
│       │   │   └── [id]/route.js      # GET / PUT / DELETE producto
│       │   └── variants/
│       │       ├── route.js           # GET lista / POST crear variante
│       │       └── [id]/route.js      # GET / PUT / DELETE variante
│       ├── categories/
│       │   ├── route.js               # GET lista / POST crear categoría
│       │   └── [id]/route.js          # PUT / DELETE categoría
│       ├── inventory/route.js         # GET inventario / PUT actualizar stock
│       ├── sales/route.js             # GET ventas / POST registrar venta
│       ├── dashboard/stats/           # GET métricas del negocio
│       ├── contact/                   # GET contacto de WhatsApp
│       └── interaction/               # POST registrar intento de compra
│
├── modules/                           # Lógica de negocio — core del sistema
│   ├── auth/
│   │   ├── repositories/auth.repository.js
│   │   └── sevices/auth.service.js
│   ├── catalog/
│   │   ├── controllers/
│   │   │   ├── catalog.controller.js
│   │   │   └── category.controller.js
│   │   ├── services/
│   │   │   ├── catalog.service.js
│   │   │   ├── product.service.js
│   │   │   ├── variant.service.js
│   │   │   └── category.service.js
│   │   └── repositories/
│   │       ├── catalog.repository.js
│   │       ├── product.repository.js
│   │       ├── variant.repository.js
│   │       └── category.repository.js
│   ├── inventory/
│   │   ├── controllers/inventory.controller.js
│   │   ├── services/inventory.service.js
│   │   └── repositories/inventory.repository.js
│   ├── sales/
│   │   ├── controllers/
│   │   │   ├── sales.controller.js
│   │   │   └── dashboard.controller.js
│   │   ├── services/sales.service.js
│   │   └── repositories/sales.repository.js
│   ├── about/
│   │   ├── controllers/aboutUs.controller.js
│   │   ├── domain/aboutUs.domain.js
│   │   ├── services/aboutUs.service.js
│   │   └── repositories/aboutUs.repository.js
│   └── policies/
│       ├── controllers/policy.controller.js
│       ├── services/policy.service.js
│       └── repositories/policy.repository.js
│
├── infrastructure/                    # Integraciones externas
│   └── db/
│       ├── client.js                  # Cliente Prisma (conexión TiDB)
│       ├── schema/                    # Schema de base de datos
│       └── migrations/                # Migraciones de base de datos
│
├── shared/                            # Utilidades globales
│   └── utils/
│       └── email.service.js           # Servicio de envío de correos
│
├── components/                        # Componentes UI
│   ├── structure/                     # Componentes de la landing pública
│   │   ├── header/                    # Navegación pública
│   │   ├── main/                      # Catálogo con filtros
│   │   ├── footer/                    # Pie de página
│   │   ├── about/                     # Sección About Us
│   │   ├── contact/                   # Contacto
│   │   ├── policies/                  # Políticas
│   │   ├── product/                   # Detalle de producto
│   │   ├── login/                     # Formulario de acceso admin
│   │   └── search/                    # Búsqueda de productos
│   ├── dashboard/                     # Componentes del panel admin
│   │   ├── sidebar/
│   │   ├── header/
│   │   ├── main/                      # Métricas / Overview
│   │   ├── catalog/
│   │   ├── categories/
│   │   ├── inventory/
│   │   ├── sales/
│   │   └── settings/                  # About Us + Políticas (admin)
│   └── shared/
│       └── DemoBanner.jsx             # Modal de aviso de demo
│
├── store/                             # Estado global (Zustand)
│   ├── filterCatalog.store.js         # Filtros del catálogo público
│   ├── dashboard.store.js             # Estado del panel admin
│   └── breadcrumbs.store.js           # Navegación del dashboard
│
└── styles/
    └── globals.css                    # Variables de diseño y estilos globales
```

---

## 14. Accesos del Sistema

> **Nota de seguridad:** Estas credenciales son de uso exclusivo del administrador del negocio. No compartir con terceros.

### Plataforma Web

| Entorno | URL |
|---|---|
| **Versión Productiva** | [https://modayestilo.vercel.app](https://modayestilo.vercel.app) |
| **Panel Administrativo** | [https://modayestilo.vercel.app/login](https://modayestilo.vercel.app/login) |

### Cuenta Administrador

| Campo | Valor |
|---|---|
| **Correo** | modayestilo076@gmail.com |
| **Contraseña** | @modayestilo123 |

### Repositorio del Proyecto

| Campo | Valor |
|---|---|
| **GitHub** | [https://github.com/ModayEstilo/modayestilo.git](https://github.com/ModayEstilo/modayestilo.git) |
| **Rama principal** | `main` |

---

## 15. Guía de Operación Rápida

### Acceder al Panel Administrativo

1. Ingresar a la URL del panel administrativo.
2. Digitar correo y contraseña.
3. Presionar **Iniciar sesión**.

---

### Registrar un Producto Nuevo

1. En el panel, ir a **Catálogo → Productos**.
2. Presionar **Crear producto**.
3. Completar: nombre, marca, descripción, categoría y género.
4. Guardar.

---

### Agregar Variantes a un Producto

1. Abrir un producto del catálogo.
2. En la sección **Variantes**, presionar **Agregar variante**.
3. Completar: Foto,talla, color, precio y SKU.
4. Guardar — la variante queda visible en el catálogo y la landing.

---

### Actualizar el Inventario

1. Ir a **Inventario**.
2. Buscar el producto deseado.
3. Seleccionar la variante y actualizar la cantidad.
4. Guardar — el cambio se refleja inmediatamente.

---

### Registrar una Venta

1. Ir a **Ventas → Registrar venta**.
2. Buscar y seleccionar la variante vendida.
3. Ingresar cantidad vendida.
4. Confirmar — el inventario se descuenta automáticamente.

---

### Editar Información Pública del Negocio

1. Ir a **Configuración**.
2. Editar: título, subtítulo, foto, descripción o políticas.
3. Guardar — los cambios se reflejan de inmediato en la landing.

---

## 16. Infraestructura y Despliegue

### Servicios Utilizados

| Servicio | Proveedor | Plan Actual | Propósito |
|---|---|---|---|
| **Hosting / Despliegue** | Vercel | Hobby (gratuito) | Despliegue automático con Git |
| **Base de Datos** | TiDB Cloud | Serverless (gratuito) | Almacenamiento de datos |
| **Imágenes** | Cloudinary | Free tier | Almacenamiento y optimización de imágenes |
| **Control de versiones** | GitHub | Gratuito | Repositorio del proyecto |

### Nota sobre el Plan Actual

El sistema fue desplegado utilizando **planes gratuitos** de Vercel y TiDB Cloud, lo cual es ideal para el inicio del proyecto sin generar costos mensuales.

Sin embargo, si el sistema experimenta un crecimiento en tráfico o requiere mayor disponibilidad comercial, se recomienda:

| Acción | Proveedor | Costo estimado |
|---|---|---|
| Upgrade a plan Pro | Vercel | ~$20 USD/mes |
| Plan escalable | TiDB Cloud | $0–$50 USD/mes según uso |

Esto garantizaría **100% de disponibilidad**, mayor rendimiento y soporte técnico especializado.

---

## 17. Posibilidades de Crecimiento

El sistema fue diseñado con una arquitectura modular que permite incorporar nuevas funcionalidades sin reestructurar el proyecto. Algunas mejoras posibles en futuras versiones:

| Funcionalidad | Descripción |
|---|---|
| **Carrito de compras** | Permitir al cliente seleccionar múltiples productos antes de contactar por WhatsApp |
| **Pedidos en línea** | Registro y seguimiento de pedidos desde la plataforma |
| **Gestión de clientes** | Registro e historial de clientes frecuentes |
| **Reportes avanzados** | Exportación de ventas e inventario en Excel / PDF |
| **Notificaciones** | Alertas automáticas de stock bajo por correo o WhatsApp |
| **Multi-usuario** | Soporte para más de un administrador con roles diferenciados |
| **App móvil** | Versión nativa para iOS y Android |

---

## 18. Contacto y Soporte

Para soporte técnico, mejoras o ampliaciones del sistema:

| Campo | Detalle |
|---|---|
| **Desarrollador** | J. Jairo C. Ordoñez |
| **Correo de contacto** | cordobaojhonjairo21@gmail.com |
| **WhatsApp / Teléfono** | 3114195398 |

---

*Documento generado como entregable oficial del proyecto Moda y Estilo — v1.0.0 — 28/03/2026*