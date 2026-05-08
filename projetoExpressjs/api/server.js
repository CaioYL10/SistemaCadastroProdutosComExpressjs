const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());


const db = new sqlite3.Database('Loja.db');

db.run(`
    CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        preco INTEGER,
        categoria TEXT,
        qntd INTEGER
    )     
`);

app.post('/produtos', (req, res) => {
    const { nome, preco, categoria, quantidade } = req.body;

    db.run(`INSERT INTO produtos (nome, preco, categoria, qntd) VALUES (?, ?, ?, ?)`,
        [nome, preco, categoria, quantidade],
        (erro) => {
            if (erro) {
                console.log(erro);
                return res.status(500).send('Erro ao cadastrar o produto.');
            }

            res.send('Produto cadastrado!');
        }
    )
})

app.get('/produtos', (req, res) => {
    db.all(`SELECT * FROM produtos`, (erro, rows) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(rows);
    })
})

app.delete('/produtos/:id', (req, res) => {
    const id = req.params.id;

    db.run('DELETE FROM produtos WHERE id = ?', [id], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }

        res.send('Produto deletado');
    });
});

app.put('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const { nome, preco, categoria, quantidade } = req.body;

    console.log('PUT recebido:', id, nome, preco, categoria, quantidade);

    db.run(
        'UPDATE produtos SET nome = ?, preco = ?, categoria = ?, qntd = ? WHERE id = ?',
        [nome, preco, categoria, quantidade, id],
        function(err) {
            if (err) return res.status(500).send(err.message);
            console.log('Linhas afetadas:', this.changes); 
            res.send('Produto atualizado!');
        }
    );
});

app.get('/produtos/busca', (req, res) => {
    const { nome } = req.query; 

    db.all(
        `SELECT * FROM produtos WHERE nome LIKE ?`,
        [`%${nome}%`], 
        (erro, rows) => {
            if (erro) return res.status(500).json(erro);
            res.json(rows);
        }
    );
});

app.delete('/produtoslimpar', (req, res) => {
    db.run('DELETE FROM produtos', function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }

        res.send('Produto deletado');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});