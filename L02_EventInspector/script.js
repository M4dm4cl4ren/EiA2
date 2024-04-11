"use strict";
var counter = 0;
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('cursor');
    const positionDisplay = document.getElementById('position');
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
        positionDisplay.textContent = `${e.pageX}px, ${e.pageY}px`;
    });
});
increase.addEventListener("click", () => {
    counter++;
    console.log(counter);
});
decrease.addEventListener("click", () => {
    counter--;
    console.log(counter);
});
//# sourceMappingURL=script.js.map