var counter =0;
const increase = document.getElementById("increase") as HTMLButtonElement
const decrease = document.getElementById("decrease") as HTMLButtonElement


document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('cursor') as HTMLElement;
    const positionDisplay = document.getElementById('position') as HTMLElement;
    document.addEventListener("mousemove",(e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    positionDisplay.textContent = `${e.pageX}px, ${e.pageY}px`;
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