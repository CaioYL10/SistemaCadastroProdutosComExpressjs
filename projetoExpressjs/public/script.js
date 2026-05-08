const popUp = document.getElementById('popUp');
const popUp2 = document.getElementById('popUp2');
popUp.style.display = 'none';
popUp2.style.display = 'none';
let idAtual = null;

document.getElementById('sair2').onclick = () => {
    popUp2.style.display = 'none';
}

document.getElementById('sair').onclick = () => {
    popUp.style.display = 'none';
}

async function enviarDados() {
    const nome = document.getElementById('nome').value;
    const preco = Number(document.getElementById('preco').value);
    const categoria = document.getElementById('categoria').value;
    const quantidade = Number(document.getElementById('quantidade').value);

    if(nome == '' || preco == '' || categoria == '' || quantidade == '') {
        console.log('Faltam dados!')
    } else {
        // Criando o objeto q vai ser enviado com as propriedades do produto.
        const produto = {
            nome,
            preco,
            categoria,
            quantidade
        };

        const send = await fetch('/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });

        const dados = await send.text();

        console.log(dados);

        carregarDados();
    }
}

async function carregarDados() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    const resposta = await fetch('/produtos');
    const produtos = await resposta.json();
    atualizarResumo(produtos);

    produtos.forEach(produto => {
        let li = document.createElement('li');
        li.innerHTML = `Nome: ${produto.nome} | Preço: ${produto.preco} | Categoria: ${produto.categoria} | Quantidade: ${produto.qntd}`;
        const deletar = document.createElement('button');
        const editar = document.createElement('button');
        deletar.innerHTML = '<i class="fa-solid fa-trash"></i>';
        editar.innerHTML = '<i class="fa-solid fa-pen"></i>';
        li.appendChild(deletar);
        li.appendChild(editar);
        if  (produto.preco >= 1000) {
            li.style.color = 'green';
            li.style.fontWeight = 600;
        }
        lista.appendChild(li);

        deletar.addEventListener('click', () => {
            popUp2.style.display = 'flex';
            const btnConfirm = document.getElementById('btnConfirm');
            btnConfirm.onclick = async () => {
                await fetch(`/produtos/${produto.id}`, {
                    method: 'DELETE'
                });
                popUp2.style.display = 'none';
                carregarDados();
            }; 
        })

        editar.addEventListener('click', () => {
                popUp.style.display = 'flex';

                idAtual = produto.id;

                document.getElementById('novoNome').value = produto.nome;
                document.getElementById('novoPreco').value = produto.preco;
                document.getElementById('novaCategoria').value = produto.categoria;
                document.getElementById('novaQuantidade').value = produto.qntd;
            }); 
        });
}

document.getElementById('btnEditar').addEventListener('click', async () => {

    const novoNome = document.getElementById('novoNome').value;

    const novaCategoria = document.getElementById('novaCategoria').value;

    const novoPreco = Number(document.getElementById('novoPreco').value);

    const novaQuantidade = Number(document.getElementById('novaQuantidade').value);

    const produtoAtualizado = {
        nome: novoNome,
        preco: novoPreco,
        categoria: novaCategoria,
        quantidade: novaQuantidade
    };

    await fetch(`/produtos/${idAtual}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoAtualizado)
    });

    popUp.style.display = 'none';

    carregarDados();
});


function buscarProduto() {
    const termo = document.getElementById('busca').value.toLowerCase();
    const itens = document.querySelectorAll('#lista li');

    itens.forEach(li => {
        const texto = li.textContent.toLowerCase();
        li.style.display = texto.includes(termo) ? '' : 'none';
    });
}

function atualizarResumo(produtos) {
    const total = produtos.length;
    const soma = produtos.reduce((acc, p) => acc + p.preco, 0);

    document.getElementById('totalProdutos').textContent = total;
    document.getElementById('somaPrecos').textContent = `R$ ${soma.toFixed(2)}`;
}

function limpartudo() {
    popUp2.style.display = 'flex';
    const btnConfirm = document.getElementById('btnConfirm');
    btnConfirm.onclick = async () => {
        await fetch(`/produtoslimpar`, {
            method: 'DELETE',
        });
        popUp2.style.display = 'none';
        carregarDados();
    };

    carregarDados();
}

document.getElementById('nome').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
});

document.getElementById('busca').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
});

document.getElementById('categoria').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
});

carregarDados();