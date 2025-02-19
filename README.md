# Cygnus-UI

🚀 **Un sistema de diseño modular basado en TailwindCSS y Vite, con componentes reutilizables y estilos personalizables.**

---

## **Requisitos Previos**

Asegurarse de tener instalados los siguientes programas antes de comenzar:

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [Git](https://git-scm.com/)

---

## **Instalación**

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/grupo-cygnus/Cygnus-UI.git
   cd cygnus-ui
   ```

## Configuración de TailwindCSS

## **Instalar las dependencias**

npm install

## Instalar TailwindCSS

npm install -D tailwindcss postcss autoprefixer

## Crear el archivo de configuración de TailwindCSS

npx tailwindcss init -p

## Configura tailwind.config.js: Incluye las rutas de tu proyecto en el array content

```javascript
module.exports = {
  content: ["./src/**/*.{html,js,}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Importa TailwindCSS en tu archivo principal de estilos:

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Genera tu build:

npm run build

npx tailwindcss -i ./src/styles/styles.css -o ./dist/styles.css --watch

## **Estructura del Proyecto**

src/
├── components/ # Componentes HTML (botones, inputs, etc.)
├── partials/ # Partials reutilizables (header, footer, menu)
├── js/ # Scripts principales (load-components.js)
├── styles/ # Estilos globales de TailwindCSS
dist/ # Archivos compilados para producción
vite.config.js # Configuración de Vite
package.json # Configuración de dependencias y scripts

## Scripts Disponibles

En el archivo `package.json`, hay varios scripts configurados:

- **`npm run dev`**: Inicia un servidor de desarrollo en [http://localhost:5173](http://localhost:5173).
- **`npm run build`**: Genera los archivos estáticos listos para producción en la carpeta `dist`.
- **`npm run watch`**: Observa cambios en los archivos de estilos y los recompila automáticamente.
- **`npm run preview`**: Previsualiza el proyecto generado tras compilar.

## Uso

### Desarrollo Local

1. Ejecuta el servidor de desarrollo:

## Compilación para Desarrollo

    npm run dev

2. Abre tu navegador en la dirección mostrada en la consola (por defecto http://localhost:5173).

## Compilación para Producción

    npm run build

Los archivos estarán disponibles en la carpeta ## dist ##.

## Estructura del Proyecto

```bash
- **`src/`**: Carpeta principal del proyecto donde se encuentran los componentes y estilos.
- **`styles/`**: Contiene el archivo principal de TailwindCSS (`styles.css`).
- **`components/`**: Contiene los componentes HTML.
- **`dist/`**: Carpeta de salida para los archivos compilados.
- **`vite.config.js`**: Configuración de Vite para alias y compilación.
- **`package.json`**: Configuración de dependencias y scripts.
```

## Alias de Rutas

En el archivo `vite.config.js`, se configura el alias `@` para simplificar rutas:

```javascript
resolve: {
  alias: {
    '@': '/src'
  }
}
```

## Ejemplo de uso

```bash
import '@/base/typography.html';
```

## Dependencias

El proyecto utiliza las siguientes dependencias principales:

- **TailwindCSS**: Para el diseño de estilos.
- **Vite**: Para el bundling y desarrollo rápido.
- **Plugins de TailwindCSS**:
  - `@tailwindcss/forms`
  - `@tailwindcss/typography`
  - `@tailwindcss/aspect-ratio`

🖇️ **Contribución**

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

## Realiza tus cambios y haz commit

```bash
git commit -m "Agrega nueva funcionalidad"

```

## Haz un push a tu rama:

```bash
    git push origin feature/nueva-funcionalidad
```

```

```
