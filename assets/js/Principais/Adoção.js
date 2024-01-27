function adicionarProduto(nome, preco) {
    var produto = {
        nome: nome,
        preco: preco
    };

    var carrinho = JSON.parse(localStorage.getItem('cart')) || [];

    carrinho.push(produto);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    atualizarNumeroItensCarrinho(carrinho.length);
}