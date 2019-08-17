/* 팝업 JS */
var popup = document.querySelector(".popup-wrap");
var close = document.querySelector(".close");
var btn = document.querySelector(".btn");
var content = document.querySelector(".popup-content");

function showPopUp(binded) 
{ 
    popup.style.display = "block"; 
    content.innerHTML = binded;
}

close.addEventListener("click", () => { popup.style.display = "none" });