// src/utils/logger.js
const fs = require('fs').promises;
const path = require('path');

const logDirectory = path.join(__dirname, '../../logs');

class Logger {
    constructor(logFile = 'padaria.log') {
        this.logFile = path.join(logDirectory, logFile);
        this.initialize();
    }

    async initialize() {
        try {
            await fs.mkdir(logDirectory, { recursive: true });
        } catch (error) {
            console.error("Erro ao criar diretório de log:", error);
        }
    }

    async log(message, level = 'INFO') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${message}\n`;

        try {
            await fs.appendFile(this.logFile, logEntry);
        } catch (error) {
            console.error('❌ Erro ao escrever no log:', error);
        }
    }

    async info(message) {
        await this.log(message, 'INFO');
    }

    async warn(message) {
        await this.log(message, 'WARN');
    }

    async error(message, errorObj = null) {
        const errorMessage = errorObj ? `${message} | Detalhes: ${errorObj.message}` : message;
        await this.log(errorMessage, 'ERROR');
    }
}

// Exporta uma única instância do logger para ser usada em todo o projeto (Singleton Pattern)
module.exports = new Logger('padaria.log');
