var menuitems = document.getElementById("menu-items");
menuitems.style.maxHeight = "0px"

function menutoogle(){
    if(menuitems.style.maxHeight == "0px"){
        menuitems.style.maxHeight = "200px";
    }
    else{
        menuitems.style.maxHeight = "0px";
    }
}

// js for product gallary
var productImg = document.getElementById("ProductImg");

function photoShift1(){
    productImg.src = "images/gallery-1.jpg";
}
function photoShift2(){
    productImg.src = "images/gallery-2.jpg";
}
function photoShift3(){
    productImg.src = "images/gallery-3.jpg";
}
function photoShift4(){
    productImg.src = "images/gallery-4.jpg";
}

//js for toggle form

var logform = document.getElementById("logform");
var regform = document.getElementById("regform");
var indicator = document.getElementById("indicator");

function register(){
    regform.style.transform = "translateX(0px)";
    logform.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}
function login(){
    regform.style.transform = "translateX(300px)";
    logform.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}