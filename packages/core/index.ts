import { spawnSync } from 'child_process';

const shell = `
    open raycast://confetti;
    exit;
`;

export interface ConfettiOptions {
    checkRaycast?: boolean;
    Logger?: typeof console.Console;
}

export const confetti = (opts: ConfettiOptions = {}) => {
    const { checkRaycast = false, Logger = console.Console } = opts;
    if (process.platform !== 'darwin') {
        return;
    }
    const spawnResult = spawnSync(shell, [], {
        stdio: 'ignore',
        shell: true,
    });
    if (spawnResult.error && checkRaycast) {
        const logger = new Logger(process.stdout, process.stderr);
        logger.error(
            `[confetti] Raycast not found , see https://www.raycast.com`
        );
    }
};

export default confetti;
