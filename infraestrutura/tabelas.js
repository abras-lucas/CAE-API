class Tabelas {

    init(conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, aluno varchar(50)'
            + ' NOT NULL, servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacores text,'
            + ' PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            }else{
                console.log('Tabela atendimentos criada com sucesso')
            }
        })
    }

}

module.exports = new Tabelas