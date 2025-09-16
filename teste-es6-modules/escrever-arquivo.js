const fs = require('fs').promises;

async function escreverMeuArquivo() {
    try {
        console.log('✍️ Criando um novo arquivo...');

        const meuTexto =`Arquivo criado pelo Node.js!
        Data: ${new Date().toLocaleString()}
        este arquivo foi gerado automaticamente.`;

        await fs.writeFile('arquivo-criado.txt', meuTexto, 'utf-8');

        console.log('✅ Arquivo "arquivo-criado.txt" criado com sucesso');
        console.log('📄 Conteúdo escrito:');
        console.log('--'.repeat(40));
        console.log(meuTexto);
        console.log('--'.repeat(40));

    }  catch (error) {
        console.log('❌ Error ao escrever o arquivo:', error.message);
    }
}

escreverMeuArquivo();