import { confetti as core, ConfettiOptions } from '@akrc/confetti';
import { createUnplugin } from 'unplugin';

let triggered = false;

export const confetti = createUnplugin((opts: ConfettiOptions = {}) => {
    return {
        name: 'unplugin-confetti',
        buildEnd() {
            // Only run in first build on dev mode.
            if (!triggered) core(opts);
            triggered = true;
        },
    };
});

export const { vite, esbuild, webpack, rollup } = confetti;

export default confetti;
