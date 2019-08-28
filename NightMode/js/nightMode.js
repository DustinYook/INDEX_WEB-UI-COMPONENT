// 생성자패턴 이용
function ModeControl(){
    this.btnNav = document.querySelector("nav");
    this.nightBtn = document.querySelector("#night-btn");
    this.dayBtn = document.querySelector("#day-btn");
    this.bodyElem = document.querySelector("body");
    this.articles = document.querySelectorAll(".articles");
    this.WHITE_BTN_STYLE = "border:2px solid black;padding:3px;background-color:white;color:black;";
    this.BLACK_BTN_STYLE = "border:2px solid white;padding:3px;background-color:black;color:white;";
}
ModeControl.prototype.changeStyle = function(target){
    if(target.id === "day-btn")
    {
        // 글자색을 검정색으로 전환
        this.articles.forEach((elem) => { elem.style.color = "black" });
        // 배경색을 흰색으로 전환
        this.bodyElem.style.backgroundColor = "white";
        // 버튼스타일을 반전시킴
        this.dayBtn.setAttribute("style", this.WHITE_BTN_STYLE);
    }
    else if(target.id === "night-btn")
    {
        // 글자색을 흰색으로 전환
        this.articles.forEach((elem) => { elem.style.color = "white" });
        // 배경색을 검정색으로 전환
        this.bodyElem.style.backgroundColor = "black";
        // 버튼스타일을 반전시킴
        this.nightBtn.setAttribute("style", this.BLACK_BTN_STYLE);
    }
}
ModeControl.prototype.registerEvents = function(){
    this.btnNav.addEventListener("click", (evt) => { this.changeStyle(evt.target) });
};

document.addEventListener("DOMContentLoaded", () => {
    let modeControl = new ModeControl();
    modeControl.registerEvents();
});