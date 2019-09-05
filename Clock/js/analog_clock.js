var canvas = document.getElementById("myCanvas"); // canvas 요소 받아오기
var context = canvas.getContext("2d"); // context 객체 받아오기

var now; // 현재시간

var x = 200;
var y = 150;
var r = 100;

// 1) 시침 설정	            
var hour; // 시간	        
var hourAngle; // 시침의 각도	            
var hourX, hourY; // 시침의 좌표

// 시침을 그리는 함수
function drawHourClockHands() {
    now = new Date(); // 현재시간 담을 변수
    hour = now.getHours(); // 시간을 가져옴
    hourAngle = (hour / 12 * 2.0 * Math.PI) - (Math.PI / 2);
    hourX = x + Math.cos(hourAngle) * r * 0.8;
    hourY = y + Math.sin(hourAngle) * r * 0.8;

    // 시침 그리기
    context.beginPath();
    context.moveTo(x, y); // 원의 중심으로 이동
    context.lineTo(hourX, hourY);
    context.strokeStyle = "black";
    context.stroke(); // 화면출력
}

// 2) 분침 설정
var min; // 분
var minAngle; // 분침의 각도
var minX, minY; // 분침의 좌표

// 분침을 그리는 함수
function drawMinClockHands() {
    now = new Date(); // 현재시간 담을 변수
    min = now.getMinutes(); // 초를 가져옴
    minAngle = (min / 60) * 2.0 * Math.PI - Math.PI / 2;
    minX = x + Math.cos(minAngle) * r;
    minY = y + Math.sin(minAngle) * r;

    // 분침 그리기
    context.beginPath();
    context.moveTo(x, y); // 원의 중심으로 이동
    context.lineTo(minX, minY);
    context.strokeStyle = "black";
    context.stroke(); // 화면출력
}

// 3) 초침 설정
var sec; // 초
var secX, secY; // 초침의 각도
var secAngle; // 초침의 좌표

// 초침을 그리는 함수
function drawSecClockHands() {
    now = new Date(); // 현재시간 담을 변수
    sec = now.getSeconds(); // 초를 가져옴
    secAngle = (sec / 60) * 2.0 * Math.PI - Math.PI / 2;
    secX = x + Math.cos(secAngle) * r;
    secY = y + Math.sin(secAngle) * r;

    // 초침 그리기
    context.beginPath();
    context.moveTo(x, y); // 원의 중심으로 이동
    context.lineTo(secX, secY);
    context.strokeStyle = "red"
    context.lineWidth = "2";
    context.stroke(); // 화면출력
}

// 4) 시계바늘을 그리는 함수
function drawClockHands() {
    drawHourClockHands();
    drawMinClockHands();
    drawSecClockHands();
}

// 5) 시계판을 그리는 함수
function drawCircle() {
    context.beginPath(); // context 초기화
    context.arc(x, y, r, 0, 2.0 * Math.PI, true); // 원을 그림
    context.fillStyle = "white"; // 색깔 채움
    context.strokeStyle = "black"; // 선 색 지정
    context.lineWidth = "2"; // 선 두께 지정
    context.closePath(); // 닫힌 도형 생성 
    context.fill(); // 색칠하기 (먼저 closePath해야 함)
    context.stroke(); // 선 그리기
}

// 6) 시계를 구동하는 함수
function init() {
    context.clearRect(0, 0, 300, 300); // 초기화
    drawCircle(); // 시계판 그림
    drawClockHands(); // 시계바늘 그림
    requestAnimationFrame(init);
}
requestAnimationFrame(init);