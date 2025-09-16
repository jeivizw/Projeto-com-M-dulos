const fs = require('fs').promises;
const path = require('path');

class fileHelper {
    static async readJSON(filePath) {
        try{
            const data = await fs.readFile(filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('❌ Robô: "Ops! Não consegui ler este arquivo:", error');
            return false;
        }
    }
    static async ensureDirectory(dirPath) {
        try {
            await fs.mkdir(dirPath, {recursive: true});
             return true;
            } catch (error){
            console.error('❌ Robô: "Ops! Não consegui salvar este arquivo:", error');
            return false;
        }
    }
            static async ensureDirectory(dirPath){
        try{
        await FileSystem.mkdir(dirPath, {recursive: true});
        return true;
    } catch (error){
        console.error('❌ Ops! Não consegui criar a pasta:', error);
        return false;
    }
    }
}
module.exports = FileHelper;