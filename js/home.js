let idLupa = document.getElementById("idLupa");
let boxHeader1 = document.getElementById("boxHeader1");
let boxHeader2 = document.getElementById("boxHeader2");

idLupa.addEventListener("click",function(){
    boxHeader1.classList.add("box-header1-hidden");
    boxHeader1.classList.remove("box-header-1");
    boxHeader2.classList.remove("box-header2-hidden");
    boxHeader2.classList.add("box-header-2")
});