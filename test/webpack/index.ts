import Webpack from 'webpack';
import { webpack } from 'unplugin-confetti';

const compiler = Webpack({
    plugins: [webpack()],
});

test('webpack', () => {
    expect(() => {
        compiler.run(() => {});
    }).not.toThrow();
});
