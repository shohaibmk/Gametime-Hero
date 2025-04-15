export interface Logger {
    log: (message: string) => void;
    error?: (message: string) => void;
}

export class ConsoleLogger implements Logger {
    log(message: string) {
        console.log(`[LOG] ${message}`);
    }

    error(message: string) {
        console.error(`[ERROR] ${message}`);
    }
}
