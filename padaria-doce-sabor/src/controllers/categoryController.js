// src/controllers/categoryController.js

const dbPaths = require('../config/database');
const FileHelper = require('../utils/fileHelper');
const Logger = require('../utils/logger');
const Category = require('../models/Category');

class CategoryController {

    // Método para buscar todas as categorias
    async getAllCategories() {
        Logger.info('Buscando todas as categorias...');
        const categoriesData = await FileHelper.readJSON(dbPaths.categories);
        if (!categoriesData) {
            Logger.error('Não foi possível ler o arquivo de categorias.');
            return [];
        }
        // Transforma os dados crus do JSON em objetos da classe Category
        return categoriesData.map(c => new Category(c.id, c.name, c.description, c.icon));
    }

    // Método para buscar uma categoria pelo seu ID
    async getCategoryById(id) {
        Logger.info(`Buscando categoria com ID: ${id}`);
        const categories = await this.getAllCategories();
        const category = categories.find(c => c.id === id);

        if (category) {
            Logger.info(`Categoria encontrada: ${category.name}`);
        } else {
            Logger.warn(`Categoria com ID ${id} não encontrada.`);
        }
        return category;
    }
}

// Exporta uma única instância do controlador
module.exports = new CategoryController();
