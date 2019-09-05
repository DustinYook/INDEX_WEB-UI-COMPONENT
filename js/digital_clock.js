var time;

function getNow() {
    var now = new Date(); // 현재시간을 받아옴
    var hr = now.getHours(); // 시간
    var min = now.getMinutes(); // 분
    var sec = now.getSeconds(); // 초
    var obj = document.getElementById("timer");

    obj.innerHTML = hr + "시 " + (min < 10 ? "0" + min : min) + "분 " + (sec < 10 ? "0" + sec : sec) + "초";
    obj.setAttribute("style", "font-size:30px;color:black;font-weight:bold;");

    requestAnimationFrame(getNow);
}
requestAnimationFrame(getNow);