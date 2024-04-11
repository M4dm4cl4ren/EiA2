var counter =0;
const increase = document.getElementById("increase") as HTMLButtonElement
const decrease = document.getElementById("decrease") as HTMLButtonElement

increase.addEventListener("click",() =>{
    counter++;
    console.log(counter);
});
decrease.addEventListener("click",() =>{
    counter--;
    console.log(counter);
});