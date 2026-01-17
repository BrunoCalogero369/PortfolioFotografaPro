EN PROCESO, AÚN NO ESTÁ TERMINADO! (Falta completar con más fotos y trabajos que el cliente aún no me brindó...)   
  
👉 [([Link](https://portfolio-flor-salva.netlify.app/))]

# 📸 Portfolio Profesional

El cliente (**fotógrafa profesional**) necesitaba una vitrina digital de alto impacto que cumpliera con tres pilares fundamentales:

## 🎯 Objetivos

- **Minimalismo**  
  Una interfaz que no compitiera con la fuerza visual de sus fotografías.

- **Organización**  
  Agrupar las fotos por **proyectos** o **eventos**, evitando un carrete infinito sin contexto.

- **Accesibilidad Mobile**  
  Experiencia fluida en celulares, donde la mayoría de los clientes potenciales descubren su trabajo (principalmente desde Instagram).

---

## 💡 La Solución

Se desarrolló una **Single Page Application (SPA)** moderna, enfocada en la experiencia del usuario y el rendimiento visual.

### 🗂 Arquitectura de Proyectos
Sistema de **Cards** que muestra información clave:
- Título
- Fecha
- Ubicación  

La galería completa se revela **bajo demanda** mediante un **Modal**, manteniendo la home limpia y enfocada.

### 🎨 Experiencia Visual

- **Masonry Grid**  
  Galerías con diseño tipo *Tetris* que se adapta al formato de cada foto (vertical u horizontal) sin recortes.

- **Cascada de Animaciones**  
  Implementación de **Framer Motion** con efecto *stagger* (aparición progresiva de imágenes), elevando la percepción de calidad del sitio.

- **Navegación Intuitiva**  
  Menú de contacto flotante con accesos directos a **WhatsApp** e **Instagram**, facilitando la conversión (contratación).

---

## 🛠 Stack Tecnológico

- **Framework:** Next.js 15+ (App Router) — máxima velocidad de carga y SEO.
- **Lenguaje:** TypeScript — código robusto, escalable y libre de errores de tipo.
- **Estilos:** Tailwind CSS — diseño *Mobile First*, responsivo y utilitario.
- **Animaciones:** Framer Motion — micro-interacciones suaves y transiciones de modales.
- **Iconografía:** Lucide React — iconos vectoriales limpios y livianos.

---

## ✨ Detalles de Valor Agregado

- **Optimización de Imágenes**  
  Uso del componente `<Image />` de Next.js para:
  - Lazy loading
  - Redimensionamiento automático  
  Garantizando alto rendimiento sin sacrificar calidad visual.

- **Interactividad Mobile**  
  Lógica personalizada de **Click / Touch** que brinda feedback visual previo al ingreso a una galería, mejorando la experiencia en dispositivos táctiles.
