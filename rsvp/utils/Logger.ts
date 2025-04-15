/**
 * Interface defining the structure for a logger.
 */
export interface Logger {
    /**
     * Logs a message to the console.
     * @param message - The message to log.
     */
    log: (message: string) => void;

    /**
     * Optionally logs an error message to the console.
     * @param message - The error message to log.
     */
    error?: (message: string) => void;
}

/**
 * A concrete implementation of the Logger interface that logs to the console.
 */
export class ConsoleLogger implements Logger {
    /**
     * Logs a regular message to the console with a "[LOG]" prefix.
     * @param message - The message to log.
     */
    log(message: string): void {
        console.log(`[LOG] ${message}`);
    }

    /**
     * Logs an error message to the console with a "[ERROR]" prefix.
     * @param message - The error message to log.
     */
    error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }
}
