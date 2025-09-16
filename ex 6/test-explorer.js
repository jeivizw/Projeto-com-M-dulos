const { listarArquivos, mostrarResultados} = require ('./fileExplorer');
const path = require('path');

async function testarExplorador(){
    console.log('🚀 Iniciando teste do Explorador de Arquivos...');

    const pastaAtual = __dirname;
    console.log(`📂 Pasta a ser explorada: ${pastaAtual}`);

    try{
        const arquivos = await listarArquivos(pastaAtual);
        mostrarResultados(arquivos);
        
        console.log('\n✅ Teste concluído com sucesso!');
    } catch (error){
        console.error('❌ Erro durante o teste:', error.message);
    }
}
testarExplorador(); 