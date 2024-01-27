var productImg = document.getElementById("product-img");
var miniatureProduct = document.getElementsByClassName("miniature-product");

miniatureProduct[0].onclick = function(){
    productImg.src = miniatureProduct[0].src;
}
miniatureProduct[1].onclick = function(){
    productImg.src = miniatureProduct[1].src;
}
miniatureProduct[2].onclick = function(){
    productImg.src = miniatureProduct[2].src;
}
miniatureProduct[3].onclick = function(){
    productImg.src = miniatureProduct[3].src;
}
miniatureProduct[4].onclick = function(){
    productImg.src = miniatureProduct[4].src;
}

