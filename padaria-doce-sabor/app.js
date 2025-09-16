// app.js - Arquivo Principal da Aplicação

// Importa os "cérebros" da nossa aplicação
const productController = require('./src/controllers/productController');
const categoryController = require('./src/controllers/categoryController');
const Logger = require('./src/utils/logger');

// Função principal que orquestra a execução do nosso sistema
async function main() {
    Logger.info('===== INICIANDO SISTEMA DA PADARIA DOCE SABOR =====');

    // --- Cenário 1: Listar todos os produtos e categorias ---
    console.log('\n--- 🥖 LISTANDO PRODUTOS E CATEGORIAS INICIAIS 🎂 ---');
    const allProducts = await productController.getAllProducts();
    const allCategories = await categoryController.getAllCategories();

    console.log('\nCategorias encontradas:');
    console.table(allCategories.map(c => c.toJSON()));

    console.log('\nProdutos encontrados:');
    console.table(allProducts.map(p => p.toJSON()));

    // --- Cenário 2: Adicionar um novo produto ---
    console.log('\n--- ➕ ADICIONANDO UM NOVO PRODUTO ---');
    const novoDoce = {
        name: 'Sonho de Creme',
        description: 'Massa fofinha com recheio de creme de baunilha.',
        price: 4.50,
        categoryId: 3, // ID da categoria "Doces"
        imageUrl: 'sonho.jpg'
    };
    const produtoAdicionado = await productController.addProduct(novoDoce);
    if (produtoAdicionado) {
        console.log('\nProduto adicionado com sucesso!');
        console.log(produtoAdicionado.toJSON());
    }

    // --- Cenário 3: Listar todos os produtos novamente ---
    console.log('\n--- 📋 LISTANDO PRODUTOS APÓS ADIÇÃO ---');
    const produtosAtualizados = await productController.getAllProducts();
    console.log('\nProdutos agora na base de dados:');
    console.table(produtosAtualizados.map(p => p.toJSON()));

    // --- Cenário 4: Buscar um produto específico ---
    console.log('\n--- 🔍 BUSCANDO UM PRODUTO ESPECÍFICO (ID = 2) ---');
    const produtoId2 = await productController.getProductById(2);
    if (produtoId2) {
        console.log('\nProduto com ID 2 encontrado:');
        console.log(produtoId2.toJSON());
        console.log(`Preço formatado: ${produtoId2.getFormattedPrice()}`);
    }

    Logger.info('===== SISTEMA DA PADARIA FINALIZADO =====');
}

// Executa a função principal
main();
