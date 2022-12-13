document.addEventListener("DOMContentLoaded", function () {

    //second exercise
    let rgb = 255;
    let countdownInterval = setInterval(function () {
        if (rgb > 0) {
            rgb--;
            document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
            console.log(rgb);
        } else {
            clearInterval(countdownInterval);
        }
    }, 500);

});