"use strict";
var counter = 0;
const dispatch = document.getElementById("dispatch");
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
function newCustomEvent(eventName) {
    var event = new Event(eventName);
    document.dispatchEvent(event);
}
dispatch.addEventListener('click', function () {
    newCustomEvent('customEvent');
});
document.addEventListener('customEvent', function (event) {
    console.log('Custom event captured:', event.type);
});
//# sourceMappingURL=EventInstpectorScript.js.map