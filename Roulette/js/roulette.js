var roulette = document.querySelector(".roulette"); // 룰렛판
var btn = document.querySelector(".btn-inner"); // 룰렛 시작버튼
var binded = []; // 템플릿과 데이터가 결합된 결과
var degrees = []; // 룰렛판 회전각도

function bind()
{
    let template = document.getElementById("template").innerHTML; // 템플릿
    let response = [
            { "degree" : "60", "giveaway" : "내공 300점" },
            { "degree" : "120", "giveaway" : "네이버페이 500원" },
            { "degree" : "180", "giveaway" : "내공 100점" },
            { "degree" : "240", "giveaway" : "다음 기회에" },
            { "degree" : "300", "giveaway" : "네이버페이 50,000원" },
            { "degree" : "360", "giveaway" : "네이버페이 5,000원" }
        ]; // 서버에서 응답으로 보낼 데이터

    response.forEach((obj) => { 
        degrees.push(obj.degree);
        if(obj.degree === "240")
        {
            binded.push(
            template.replace("{title}", obj.giveaway)
                    .replace("{content}", "이번에는 당첨되지 않았습니다")
            );
        }
        else
        {
            binded.push(
                template.replace("{title}", obj.giveaway)
                        .replace("{content}", "축하합니다! " + obj.giveaway + "에 당첨되었습니다.")
            );
        }
    });                
}

btn.addEventListener("click", () => {
    bind();
    let rand = Math.floor(Math.random() * 6); // 난수생성
    let transform = "transform: rotate(" + degrees[rand] + "deg);" // 회전각도 설정
    roulette.setAttribute("style", transform); // 설정반영
    setTimeout(() => { showPopUp(binded[rand]) }, 1000);
});