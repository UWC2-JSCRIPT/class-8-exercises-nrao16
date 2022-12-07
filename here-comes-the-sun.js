// exercise using requestAnimationFrame
document.addEventListener("DOMContentLoaded", function () {
let x = 0;
const imEl = document.getElementById('sun');
const animate = function() {
    x++;
    if (x < window.innerWidth) {
        const transform = `translateX(${x}px)`;
        imEl.style.transform = transform;
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);
});