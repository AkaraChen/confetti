import { vite } from 'unplugin-confetti';
import { build } from 'vite';

test('vite', () => {
    expect(async () => {
        build({
            plugins: [vite()],
        });
    }).not.toThrow();
});
