import { build } from 'esbuild';
import { esbuild } from 'unplugin-confetti';

test('esbuild', () => {
    expect(() => {
        build({
            // @ts-ignore
            plugins: [esbuild()],
        });
    });
});
