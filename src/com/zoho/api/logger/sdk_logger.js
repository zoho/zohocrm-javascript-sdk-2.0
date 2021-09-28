/**
 * This class representing the Logger level.
 */
class Logger {
    /**
     * This is a getter method to get logger level.
     * @returns {String} A String representing the logger level.
     */
    getLevel() {
        return this.level;
    }

    /**
     * Creates an Logger class instance with the specified log level
     * @param {Logger} level A class containing the log level.
     */
    static getInstance(level) {
        return new Logger(level)
    }

    constructor(level) {
        this.level = level;
    }
}

/**
 * This class used to give logger levels.
 */
var Levels = {
    ALL: Constants.ALL,

    INFO: Constants.INFO,

    DEBUG: Constants.DEBUG,

    WARN: Constants.WARN,

    ERROR: Constants.ERROR,

    OFF: Constants.OFF
}

/**
 * This class to initialize the SDK logger.
 */
class SDKLogger {
    /**
     * Creates an User SDKLogger instance with the specified Logger class instance.
     * @param {Logger} logger A Logger class instance.
     */
    static initialize(logger) {
        this.logger = logger;
    }

    static log(level, message) {
        let date = new Date();

        if (this.logger.level != Levels.OFF && (level == this.logger.level || this.logger.level == Levels.ALL)) {
            switch (level) {
                case 'debug':
                    console.debug(this.logger.level.toUpperCase() + " - " + date.toString() + " : " + message);
                    break;
                case 'warn':
                    console.warn(this.logger.level.toUpperCase() + " - " + date.toString() + " : " + message);
                    break;
                case 'error':
                    console.error(this.logger.level.toUpperCase() + " - " + date.toString() + " : " + message);
                    break;
                default:
                    console.info(this.logger.level.toUpperCase() + " - " + date.toString() + " : " + message);
            }
        }
    }
}