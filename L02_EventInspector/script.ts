var counter =0;
const increase = document.getElementById("increase") as HTMLButtonElement
const decrease = document.getElementById("decrease") as HTMLButtonElement
const cursor = document.getElementById('cursor') as HTMLElement;
const positionDisplay = document.getElementById('position') as HTMLElement;

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("mousemove",(e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    positionDisplay.style.left = (x) + 'px';
    positionDisplay.style.top = (y) + 'px';
    positionDisplay.innerHTML = `${e.pageX}px, ${e.pageY}px`;
    });
})

increase.addEventListener("click",() =>{
    counter++;
    console.log(counter);
});
decrease.addEventListener("click",() =>{
    counter--;
    console.log(counter);
});