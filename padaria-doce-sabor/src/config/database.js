// src/config/database.js
const path = require('path');

// Este arquivo centraliza os caminhos para nossos arquivos de dados.
// Usamos path.join para garantir que os caminhos funcionem em qualquer sistema operacional.

// __dirname se refere à pasta atual (src/config)
// '../../data/products.json' volta duas pastas e entra em data/products.json
const databasePaths = {
    products: path.join(__dirname, '../../data/products.json'),
    categories: path.join(__dirname, '../../data/categories.json')
};

module.exports = databasePaths;
