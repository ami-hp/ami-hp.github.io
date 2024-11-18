import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'app', // Ensure this is correct
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'app/index.html'),
                websites: resolve(__dirname, 'app/websites.html'),
                designs: resolve(__dirname, 'app/designs.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'app/assets'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler', // or "modern", "legacy"
                // importers: [
                // ],
            },
        },
    },
});
