const colors = require('./src/config/colors.json');
// const typography = require('./src/config/typography.json');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ], // Asegurar de que este patrón coincide con tus rutas
  theme: {
    extend: {
      colors: {
        ...colors // Extiende los colores personalizados
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Cambia la fuente predeterminada
      },
      fontSize: {
        // Solo añadimos tamaños específicos que no están en Tailwind
        'big-2xl': ['72px', { lineHeight: '90px', fontWeight: '400' }], // Ejemplo
        'big-xl': ['60px', { lineHeight: '72px', fontWeight: '400' }],
      },
      spacing: {
        '4.5': '1.125rem', // Equivalente a 18px
      },
      width: {
        "aside-lg": "25%", // Define un ancho fijo para el aside
      },
      // Transition
      scrollBehavior: ['smooth'], // Agregamos smooth scroll
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
  ],
};


// console.log('Contenido de typography.json:', typography);