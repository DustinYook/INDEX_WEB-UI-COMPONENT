var prefix = "img/";
var postfix = ".png";
var names = ["1_ma_2", "2_ma_4", "3_ma_10"];
var attributes = "width=500px height=500px";
var tag = names.map((elem) => "<img src='" + prefix + elem + postfix + "' " + attributes + ">"); // <img> 태그생성

const START = 0; // 시작인덱스
const END = tag.length - 1; // 끝 인덱스
var idx = START; // 인덱스 번호

var target = document.querySelector(".slide_area"); // 컨테이너 요소
target.insertAdjacentHTML("beforeend", tag[idx]); // <img> 태그삽입

var left = document.querySelector("#btn_left");
left.addEventListener("click", () => {
    target.innerHTML = ""; // 컨테이너 비우기
    idx = idx - 1;
    if (idx < START) // 처음에 도달 시
        idx = END; // 마지막으로 설정
    target.insertAdjacentHTML("beforeend", tag[idx]); // <img> 태그삽입
});

var right = document.querySelector("#btn_right");
right.addEventListener("click", () => {
    target.innerHTML = ""; // 컨테이너 비우기
    idx = idx + 1;
    if (idx > END) // 마지막에 도달 시 
        idx = START; // 처음으로 설정
    target.insertAdjacentHTML("beforeend", tag[idx]); // <img> 태그삽입
});