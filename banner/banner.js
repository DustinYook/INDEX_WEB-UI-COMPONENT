var count = 0;
var el = document.querySelector(".outside");

function run() {
    if (parseInt(el.style.left) >= 500)
        count = 0;
    else
        count = count + 1;

    el.style.left = 2.5 * count + "px";
    requestAnimationFrame(run);
}

requestAnimationFrame(run);