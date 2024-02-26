import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
    const config = {
        plugins: [tsconfigPaths(), react()],
        envDir: './env',
        base: '/',
        test: {
            environment: 'jsdom',
            globals: true,
            setupFiles: './src/tests/setup.ts',
        },
    };

    if (command !== 'serve') {
        config.base = '/movie-app-kindred/';
    }

    return config;
});
