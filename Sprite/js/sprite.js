/* 좌측 이미지 처리 */
var left = document.querySelector(".left");
left.setAttribute("style", "background-position: 0px 0px"); // 시작시점

var lxPos = 0; // left x position
function renderLeft() 
{
    if (lxPos <= -15200) // 스프라이트 이미지의 마지막 도달 시 
        lxPos = 0; // 다시 처음 부분으로 이동
    lxPos -= 160; // 왼쪽으로 160px씩 스프라이트 이미지를 이동
    left.setAttribute("style", "background-position: " + lxPos + "px 0px");
    requestAnimationFrame(renderLeft); // 재귀호출
}
requestAnimationFrame(renderLeft); // 동영상 시작


/* 우측 이미지 처리 */
var right = document.querySelector(".right");
right.setAttribute("style", "background-position: 0px 0px"); // 시작시점

var rxPos = 0; // right x position
function renderRight() 
{
    if (rxPos <= -12540) // 스프라이트 이미지의 마지막 도달 시 
        rxPos = 0; // 다시 처음 부분으로 이동
    rxPos -= 132; // 왼쪽으로 132px씩 스프라이트 이미지를 이동
    right.setAttribute("style", "background-position: " + rxPos + "px 0px");
    requestAnimationFrame(renderRight); // 재귀호출
}
requestAnimationFrame(renderRight); // 동영상 시작