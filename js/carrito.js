let imgBox = document.getElementById("imgBox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");
let boxImgMini1 = document.getElementById("BoxImgMini1")
let boxImgMini2 = document.getElementById("BoxImgMini2")
let boxImgMini3 = document.getElementById("boxImgMini3")
let boxImgMini4 = document.getElementById("boxImgMini4")


imgMini1.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-1  - copia.jpg")
    boxImgMini1.classList.add("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgMini1.classList.add("img-mini-act")
    imgMini2.classList.remove("img-mini-act")
    imgMini3.classList.remove("img-mini-act")
    imgMini4.classList.remove("img-mini-act")
})

imgMini2.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-2  - copia.jpg")
    boxImgMini2.classList.add("box-img-mini")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgMini2.classList.add("img-mini-act")
    imgMini1.classList.remove("img-mini-act")
    imgMini3.classList.remove("img-mini-act")
    imgMini4.classList.remove("img-mini-act")
})

imgMini3.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-3  - copia.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.add("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgMini2.classList.remove("img-mini-act")
    imgMini1.classList.remove("img-mini-act")
    imgMini3.classList.add("img-mini-act")
    imgMini4.classList.remove("img-mini-act")

})

imgMini4.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-4  - copia.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.add("box-img-mini")
    imgMini2.classList.remove("img-mini-act")
    imgMini1.classList.remove("img-mini-act")
    imgMini3.classList.remove("img-mini-act")
    imgMini4.classList.add("img-mini-act")
})





let btnRestar = document.getElementById("btnRestar");
let btnSumar = document.getElementById("btnSumar");
let btnCantidad = document.getElementById("btnCantidad")
let cantBox = document.getElementById("cantBox");
let numeroElementos = document.getElementById("numeroElementos");



btnSumar.addEventListener("click",function(){
    // nodeToAdd.appendChild(nodeText);
    // btnCantidad.appendChild(nodeToAdd);
    let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;

    let numeroElementosInt = parseInt(numeroElementosTxt);
    let totalElementosInt = numeroElementosInt + 1 ;
    let totalElementostxt = totalElementosInt.toString();
    numeroElementos.innerHTML = totalElementostxt;

});
btnRestar.addEventListener("click",function(){

    if(numeroElementos.innerHTML > 0){
        let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
        let numeroElementosInt = parseInt(numeroElementosTxt);
        let totalElementosInt = numeroElementosInt - 1 ;
        let totalElementostxt = totalElementosInt.toString();
        numeroElementos.innerHTML = totalElementostxt;
    };
});















      