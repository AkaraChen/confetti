import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['./test/**/*.ts'],
        exclude: ['./test/**/fixture/**', './test/**/node_modules/**'],
        globals: true,
    },
});
