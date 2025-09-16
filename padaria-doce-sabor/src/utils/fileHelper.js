// src/utils/fileHelper.js
const fs = require('fs').promises;

class FileHelper {
    static async readJSON(filePath) {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            // Se o arquivo não existir ou for inválido, retorna um array vazio
            if (error.code === 'ENOENT') return []; 
            console.error(`❌ Erro ao ler o arquivo JSON: ${filePath}`, error);
            return null;
        }
    }

    static async writeJSON(filePath, data) {
        try {
            const jsonData = JSON.stringify(data, null, 2);
            await fs.writeFile(filePath, jsonData, 'utf8');
            return true;
        } catch (error) {
            console.error(`❌ Erro ao escrever o arquivo JSON: ${filePath}`, error);
            return false;
        }
    }
}

module.exports = FileHelper;
