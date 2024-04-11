"use strict";
var counter = 0;
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const cursor = document.getElementById('cursor');
const positionDisplay = document.getElementById('position');
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
        positionDisplay.style.left = (x) + 'px';
        positionDisplay.style.top = (y) + 'px';
        positionDisplay.innerHTML = `${e.pageX}px, ${e.pageY}px`;
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