const fs = require('fs').promises;

async function verificarArquivo(nomeArquivo){
    try {
        console.log(`🔍 Verificando se "${nomeArquivo}" existe...`);
        await fs.access(nomeArquivo);
        console.log(`✅ O arquivo "${nomeArquivo}" existe!`);
        return true;

    } catch (error){
        console.log(`❌ O arquivo "${nomeArquivo}" NÃO existe.`);
        return false;
    }
}

async function testarArquivos(){
    console.log('=== VERIFICANDO ARQUIVOS ===\n');

    const arquivos = [
        'dados.txt',
        'arquivo-criado.txt',
        'arquivo-inexistente.txt',
        'package.json'
    ];
    for (const arquivo of arquivos){
        await verificarArquivo(arquivo);
        console.log('');
    }
    console.log('=== VERIFICAÇÃO CONCLUÍDA ===');
}
testarArquivos();

async function garantirArquivo(nomeArquivo, conteudoPadrao){
    const existe = await verificarArquivo(nomeArquivo);

    if(!existe){
        console.log(`📝 Criando arquivo "${nomeArquivo}" com conteúdo padrão...`);
        await fs.writeFile(nomeArquivo, conteudoPadrao, 'utf8');
        console.log(`✅ Arquivo"{nomeArquivo}" criado!`);
    }
}
async function exemploAvancado() {
    await garantirArquivo('config.txt', 'configuracao=padrao\nversao=1.0');
}