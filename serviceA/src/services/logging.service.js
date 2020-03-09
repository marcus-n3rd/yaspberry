import flatted from 'flatted';
import env from '../config/env';

class LoggerService {
  constructor() {
    this.envConfig = env;

    // eslint-disable-next-line no-console
    this._output = console.log;

    // Log levels standard defined by Log4j
    this.logLevels = {
      off: 0,
      fatal: 100,
      error: 200,
      warn: 300,
      info: 400,
      debug: 500,
      trace: 600,
      all: 10000,
    };

    this.configSecrets = [];
  }

  maskSecret(secret) {
    this.configSecrets.push(secret);
  }

  // The log() function is an alias to allow our Logger class to be used as a logger for AWS sdk calls
  log(message, data, className, correlationObject) {
    this.writeLog('info', message, data, className, correlationObject);
  }
  fatal(message, data, className, correlationObject) {
    this.writeLog('fatal', message, data, className, correlationObject);
  }
  error(message, data, className, correlationObject) {
    this.writeLog('error', message, data, className, correlationObject);
  }
  warn(message, data, className, correlationObject) {
    this.writeLog('warn', message, data, className, correlationObject);
  }
  info(message, data, className, correlationObject) {
    this.writeLog('info', message, data, className, correlationObject);
  }
  debug(message, data, className, correlationObject) {
    this.writeLog('debug', message, data, className, correlationObject);
  }
  trace(message, data, className, correlationObject) {
    this.writeLog('trace', message, data, className, correlationObject);
  }

  writeLog(messageLevel, message, data, className, correlationObject) {
    const loggerLevel = (this.envConfig && this.envConfig.logLevel) || 'warn';

    // Only output if the messageLevel is lower than the Logger configuration
    if (this.logLevels[messageLevel] <= this.logLevels[loggerLevel]) {
      let dataOutput = data !== undefined ? data : {};
      if (dataOutput instanceof Error) {
        // Improved serialization for Error objects
        dataOutput =
          'Error message: ' +
          dataOutput.message +
          '; Stack: ' +
          dataOutput.stack;
      } else {
        // Use flatted object structure for arbitrary data objects to avoid circular JSON errors
        dataOutput = flatted.stringify(dataOutput);
      }

      // Project-specific convention for Error output structure
      let outObject = {
        level: messageLevel,
        message: message,
        data: dataOutput,
        timestamp: new Date().toISOString(),
        location: className,
        correlationObject: correlationObject,
      };

      let outString;
      try {
        outString = JSON.stringify(outObject);
      } catch (err) {
        outString = `{"level":"error","message":"Error trying to serialize for logs; ${err}"}`;
      }

      // Mask secrets from being written to the logs
      this.configSecrets.forEach(secret => {
        outString = outString && outString.replace(secret, '*****');
      });

      this._output(outString);
    }
  }
}

export default new LoggerService(); // Export new instance for an easy singleton
