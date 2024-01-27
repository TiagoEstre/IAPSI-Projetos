function carregarProdutos() {
    var carrinho = JSON.parse(localStorage.getItem('cart')) || [];

    var listProdutoElement = document.querySelector('.list-product table');
    listProdutoElement.innerHTML = '<tr><th>Produto</th><th>Quantidade</th><th>Valor</th></tr>';

    for (var i = 0; i < carrinho.length; i++) {
        var produto = carrinho[i];

        var newRow = listProdutoElement.insertRow();
        newRow.innerHTML = <td>
                                <div class="cart-info">
                                    <img src="../../img/produtos/produtos/brinquedos/Brinquedo_1.jpg" alt="">
                                    <div>
                                        <p>${produto.nome}</p>
                                        <small>Valor ${produto.preco}€</small>
                                        <br>
                                        <a href="" title="" class="remove">Remover</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <form action="" method="post">
                                    <input type="number" value="1">
                                </form>
                            </td>
                            <td>${produto.preco}€</td>;
    }
}

carregarProdutos();