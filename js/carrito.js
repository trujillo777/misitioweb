let imgBox = document.getElementById("imgBox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

imgMini1.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-1  - copia.jpg")
    boxImgMini1.classlist.add("box-img-mini")
    boxImgMini2.classlist.remove("box-img-mini")
    boxImgMini3.classlist.remove("box-img-mini")
    boxImgMini4.classlist.remove("box-img-mini")
    boxImgMini1.classlist.add("img-mini-act")
    boxImgMini2.classlist.remove("img-mini-act")
})

imgMini2.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-2  - copia.jpg")
})

imgMini3.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-3  - copia.jpg")
})

imgMini4.addEventListener("click", function(){
    imgBox.setAttribute("src", "img/image-product-4  - copia.jpg")
})


