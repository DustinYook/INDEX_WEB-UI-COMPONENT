var popup = document.querySelector(".popup-wrap");
var close = document.querySelector(".close");
var btn = document.querySelector(".btn");

btn.addEventListener("click", () => { popup.style.display = "block" });
close.addEventListener("click", () => { popup.style.display = "none" });