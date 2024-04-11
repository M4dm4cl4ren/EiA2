"use strict";
let counter = 1;
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
increase.addEventListener("click", () => {
    counter++;
    console.log(counter);
});
decrease.addEventListener("click", () => {
    counter--;
    console.log(counter);
});
//# sourceMappingURL=script.js.map