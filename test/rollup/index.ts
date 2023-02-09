import { rollup } from 'rollup';
import { rollup as rollupPlugin } from 'unplugin-confetti';

test('rollup', () => {
    expect(() => {
        rollup({
            input: './fixture/index.js',
            plugins: [rollupPlugin()],
        });
    }).not.toThrow();
});
