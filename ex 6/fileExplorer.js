const fs = require('fs').promises;
const path = require('path');

    async function listarArquivos(diretorio) {
        console.log(`🔍 Explorando: ${diretorio}`);
        
        const arquivos = [];

        try{
            const items = await fs.readdir(diretorio);
            console.log(`📁 Encontrados ${items.length} items em: ${diretorio}`);

            for (const item of items) {
                const fullPath = path.join(diretorio, item); 

                const stats = await fs.stat(fullPath);

                if (stats.isDirectory()) {
                    console.log(`📁 Pasta encontrada: ${item}`);
                    
                    const subArquivos = await listarArquivos (fullPath);

                    arquivos.push(...subArquivos);
                } else {
                    console.log(`📄 Arquivo encontrado: ${item}`);
                    arquivos.push(fullPath);
                }
            }
        } catch (error) {
            console.error(`❌ Error ao explorar ${diretorio}:`, error.message);
        }
        return arquivos;
    }
        function mostrarResultados(arquivos){
            console.log('\n 📊 RELATORIO FINAL: ');
                console.log(`Total de arquivos encontrados: ${arquivos.length}`);
                
                if (arquivos.length > 0 ) {
                    console.log ('\n📋Lista de Arquivos');
                    arquivos.forEach((arquivo, index) => {
                        console.log(`${index + 1 }. ${arquivo}`);
                    });
                }
        }

        module.exports = {
            listarArquivos,
            mostrarResultados
        };