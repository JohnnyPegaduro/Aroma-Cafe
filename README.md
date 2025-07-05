# ☕️ Aroma Café – Tienda online de cafés de especialidad

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-View-green?logo=github)](https://johnnypegaduro.github.io/Aroma-Cafe/)  


E-commerce responsive que permite **navegar blends premium, agregarlos a un carrito dinámico y simular la compra**.  
Proyecto Final del curso Front-End JS – integra **HTML semántico, CSS3 + Bootstrap, JavaScript ES6, Fetch API, LocalStorage, accesibilidad y SEO básico**.

---

## ✨ Características principales

| Módulo | Descripción |
|--------|-------------|
| **Catálogo dinámico** | Productos cargados vía `fetch()` desde `/data/products.json`. |
| **Carrito** | Añadir / quitar / modificar cantidades; total en tiempo real; persistencia en **LocalStorage**. |
| **Checkout simulado** | SweetAlert2 confirma la compra y reinicia el carrito. |
| **Formulario de contacto** | Envío a Formspree con validación Bootstrap. |
| **Diseño responsivo** | Bootstrap 5 + Flexbox / Grid; video hero; cards auto-ajustables. |
| **Accesibilidad & SEO** | `<meta description>`, texto ALT, navegación por teclado, roles ARIA donde aplica. |

---

## 🛠️ Tecnologías

- **HTML5** semántico  
- **CSS3** propio + **Bootstrap 5**  
- **JavaScript ES6** (módulo único `js/script.js`)  
- **Fetch API** → JSON local (`data/products.json`)  
- **LocalStorage** para persistir carrito  
- **SweetAlert2** para alertas modernas  
- Hosting: **GitHub Pages** / **Netlify**

---

## 📁 Estructura del proyecto

\`\`\`
aroma-cafe/
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ script.js
├─ data/
│  └─ products.json
├─ imgs/
│  ├─ hero.mp4  | hero.jpg
│  ├─ blend-1.png
│  ├─ blend-2.png
│  └─ blend-3.png
└─ README.md
\`\`\`

---

## 🚀 Instalación local

\`\`\`bash
git clone https://johnnypegaduro.github.io/Aroma-Cafe/
cd aroma-cafe
npx serve        # o usa Live Server en VS Code
\`\`\`

Visita \`http://localhost:3000\` (o el puerto indicado) y prueba la tienda.

> **Importante:** servir sobre HTTP evita problemas de CORS al leer \`data/products.json\`.

---

## 🌐 Despliegue

### GitHub Pages

1. Push a la rama \`main\`.  
2. Settings → *Pages* → “Deploy from branch” → **\`main / root\`**.  
3. URL pública: \`https://johnnypegaduro.github.io/Aroma-Cafe/ \`.

### Netlify

1. \`New Site → Import from GitHub\`.  
2. Build command: **_None_** (sitio estático).  
3. Publish directory: **\`/\`**.  
4. Netlify asignará \`https://aroma-cafe.netlify.app\`.

---

## ✔️ Rúbrica / Checklist

- [x] HTML semántico completo (\`header\`, \`nav\`, \`main\`, \`section\`, \`footer\`).  
- [x] Diseño responsivo (Bootstrap + Flexbox/Grid).  
- [x] Contacto funcional vía Formspree.  
- [x] Fetch API → render de productos.  
- [x] Carrito dinámico + LocalStorage.  
- [x] Checkout simulado con feedback.  
- [x] Accesibilidad & SEO básico. 
- [x] Deploy público + carpeta Drive con archivos del proyecto.

---

## 🙋‍♂️ Autor

**Matías Ariel Deluca**  
- [LinkedIn](https://www.linkedin.com/in/matiasarieldeluca/)  
- [Portafolio](https://portfolio-matias-deluca.vercel.app/es)  

Proyecto desarrollado como entrega final del curso **Front-End JavaScript** (Talento Tech - Gobierno de la Ciudad de Buenos Aires).

---

## 📄 Licencia

MIT © 2025 Matías Ariel Deluca
