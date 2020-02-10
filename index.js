const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conecatado com sucesso!')
        tabelas.init(conexao)
        const app = customExpress
        app.listen(3001, () => console.log('Servidor rodando na porta 3001'))
    }
})