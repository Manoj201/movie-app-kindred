import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
    const config = {
        plugins: [tsconfigPaths(), react()],
        envDir: './env',
        base: '/',
    };

    if (command !== 'serve') {
        config.base = '/movie-app-kindred/';
    }

    return config;
});
