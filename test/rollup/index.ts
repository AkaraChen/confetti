import path from 'path';
import { rollup } from 'rollup';
import { rollup as rollupPlugin } from 'unplugin-confetti';

test('rollup', () => {
    expect(() => {
        rollup({
            input: path.resolve(__dirname, './fixture/index.js'),
            plugins: [rollupPlugin()],
        });
    }).not.toThrow();
});
