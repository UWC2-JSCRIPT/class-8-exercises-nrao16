// exercise using requestAnimationFrame
document.addEventListener("DOMContentLoaded", function () {
    let rgb = -1;
    const animate = function () {
        rgb++;
        if (rgb <= 255) {
            document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
            requestAnimationFrame(animate);
            console.log(rgb);
        }
    }

    requestAnimationFrame(animate);
});