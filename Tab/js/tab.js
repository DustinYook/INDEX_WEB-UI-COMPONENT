const DATA = [
    {"name" : "crong", "favorites" : ["golf", "facebook"]},
    {"name" : "jk", "favorites" : ["soccer", "apple"]},
    {"name" : "honux", "favorites" : ["game", "orange"]},
    {"name" : "pobi", "favorites" : ["book", "youtube"]}
]; // 서버에서 보낼 JSON 응답

var tab = document.querySelector(".tab");
tab.addEventListener("click", (evt) => {
    document.querySelector(".active").setAttribute("class", "tab-menu"); // 기존 active 탭 메뉴
    let selected = evt.target; // 현재 선택된 탭 메뉴
    selected.setAttribute("class", "tab-menu active"); // 새로 active로 지정
    bind(DATA, selected.innerText); 
});

function bind(json, name)
{
    let template = document.querySelector("#template").innerHTML;
    let binded = ""; // 데이터와 템플릿이 바인딩 된 결과값 저장 변수

    DATA.forEach((obj) => {
        if(obj.name === name){ // join의 인자는 구분자, 값을 한 문자열로 만들어줌
            binded = template.replace("{name}", obj.name)
                             .replace("{favorites}", obj.favorites.join(" ")); 
            render(binded);
            return;
        }
    });
}

function render(binded) 
{ 
    document.querySelector(".content").innerHTML = binded; 
}