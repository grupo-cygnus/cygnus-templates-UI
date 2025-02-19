import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // Asegúrate de que Vite tome tu carpeta raíz
    server: {
        open: true, // Abre automáticamente en el navegador
    },
    build: {
        outDir: 'dist', // Carpeta donde se guardará el proyecto compilado
    },
    resolve: {
        alias: {
            '@': '/src', // Ahora puedes usar @/base/typography.html
        },
    },
});
