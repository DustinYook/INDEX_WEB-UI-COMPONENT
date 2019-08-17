var loading = document.querySelector(".loading-wrap");
var message = document.getElementById("message");

/* 리소소 로딩 후 처리 */
window.addEventListener("load", () => {
    setTimeout(() => { 
        loading.setAttribute("style", "display:none") 
        message.innerHTML = "<h1>로딩이 완료되었습니다!</h1>";
        } , 5000); // 5초 뒤에 처리
});

/* DOM 트리 생성 후 처리 */
// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => { 
//         loading.setAttribute("style", "display:none") 
//         message.innerHTML = "<h1>로딩이 완료되었습니다!</h1>";
//         } , 2000); // 2초 뒤에 처리
// });