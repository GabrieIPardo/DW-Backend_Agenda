let express = require('express');
let app = express();
let db = require('./db/conection');
let Contato = require('./model/Contato');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, function(){
    console.log(`Projeto iniciado na PORTa: ${PORT}`);
});

//db connection
db
    .authenticate()
    .then(() => {
        console.log('✅ Sucesso na conexão');
    })
    .catch(err => {
        console.log('❌ Erro na conexão', err);
    });

//db create tables
db.sync()
    .then(() =>{
        console.log('✅ Sucesso na criação de tabelas')
    })
    .catch(err => {
        console.log('❌ Erro na criação de tabelas', err);
    })

//routes principal
app.get('/', function(req,res){
    res.send('Servidor rodando');
});


//routes contato
app.get('/contatos', function(req, res) {

    Contato.findAll()
    
    .then(contatos => {
        if(!contatos){
            return res.status(404).send('Nenhum contato encontrado')
        } 

        res.json(contatos);
    })
    .catch(err => {
        res.status(500).send('Erro ao listar contatos:', err.message);
    })
})

app.get('/contatos/:id', function(req, res) {
    
    const {id} = req.params;

    Contato.findByPk(id)
    
    .then(contato => {
        if(!contato) {
            return res.status(404).send('Contato não encontrado ')
        }
        res.json(contato);
    })
    .catch(err => {
        res.status(500).send('Erro ao buscar contato: ', err.message );
    })
});

app.post('/contatos/criar', function(req, res) {
    
    const{nome, idade, empresa, email} = req.body;

    Contato.create({
        nome: nome,
        idade: idade,
        empresa: empresa,
        email: email,
    })
    
    .then(() => {
        res.send('Contato criado com sucesso!');
    })
    .catch(err => {
        res.send('Falha ao criar contato: ',  err);
    });
});

app.delete('/contatos/:id', function(req, res) {
    
    const {id} = req.params;

    Contato.destroy({
        where: {
            id: id
        }
    })
    
    .then(() => {
        res.send('Contato removido com sucesso!')
    })
    .catch(err => {
        res.send('Erro ao remover contato: ',  err.message);
    })
});

app.put('/contatos/:id', function(req, res) {
    const {id} = req.params;
    const{nome, idade, empresa, email} = req.body;

    Contato.update({
        nome: nome,
        idade: idade,
        empresa: empresa,
        email: email,
    },
    {
        where: {id: id}
    })
    
    .then(() => {
        res.send('Contato atualizado com sucesso!');
    })
    .catch(err => {
        res.send('Erro ao atualizar contato: ',  err.message);
    });
    
});




