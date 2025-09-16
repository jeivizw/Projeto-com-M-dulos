// src/controllers/productController.js

// Importações necessárias
const dbPaths = require('../config/database');
const FileHelper = require('../utils/fileHelper');
const Logger = require('../utils/logger');
const Product = require('../models/Product');

// O "cérebro" para gerenciar produtos
class ProductController {

    // Método para buscar todos os produtos
    async getAllProducts() {
        Logger.info('Buscando todos os produtos...');
        const productsData = await FileHelper.readJSON(dbPaths.products);
        if (!productsData) {
            Logger.error('Não foi possível ler o arquivo de produtos.');
            return [];
        }
        // Transforma os dados crus do JSON em objetos da classe Product
        return productsData.map(p => new Product(p.id, p.name, p.description, p.price, p.categoryId, p.imageUrl));
    }

    // Método para buscar um produto pelo seu ID
    async getProductById(id) {
        Logger.info(`Buscando produto com ID: ${id}`);
        const products = await this.getAllProducts();
        const product = products.find(p => p.id === id);

        if (product) {
            Logger.info(`Produto encontrado: ${product.name}`);
        } else {
            Logger.warn(`Produto com ID ${id} não encontrado.`);
        }
        return product;
    }

    // Método para adicionar um novo produto
    async addProduct(productData) {
        Logger.info(`Adicionando novo produto: ${productData.name}`);
        const products = await this.getAllProducts();

        // Encontra o maior ID existente para gerar um novo
        const maxId = products.reduce((max, p) => p.id > max ? p.id : max, 0);
        const newId = maxId + 1;

        // Cria uma nova instância da classe Product
        const newProduct = new Product(
            newId,
            productData.name,
            productData.description,
            productData.price,
            productData.categoryId,
            productData.imageUrl
        );

        products.push(newProduct);

        // Salva a lista atualizada de volta no arquivo JSON
        const success = await FileHelper.writeJSON(dbPaths.products, products.map(p => p.toJSON()));
        if (success) {
            Logger.info(`Produto "${newProduct.name}" adicionado com sucesso com o ID ${newId}.`);
            return newProduct;
        } else {
            Logger.error(`Falha ao adicionar o produto "${newProduct.name}".`);
            return null;
        }
    }
}

// Exporta uma única instância do controlador
module.exports = new ProductController();
