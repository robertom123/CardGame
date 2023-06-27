// creating mem for gauge
// create a div
//add number to them 

let memGauge = () => {
    let gauge = document.getElementById("ga")
    
    for(let i = 0; i < 10; i++){
        let mem = document.createElement("div")  
        mem.classList.add("mem")
        mem.innerText = i
        gauge.appendChild(mem)


    }

}

memGauge()

let cards = document.querySelector('.hand-cards');
let w = cards.offsetWidth;
let totalarc = 270;
let numcards = 7;
let angles = Array(numcards).fill('').map((a, i) => (totalarc / numcards * (i + 1)) - (totalarc/2 + (totalarc / numcards) / 2));
let margins = angles.map((a, i) => w / numcards * (i + 1));

angles.forEach((a, i) => {
  let s = `transform:rotate(${angles[i]}deg);margin-left:${margins[i]}px;`
  let c = `<div class='card' style='${s}'></div>`;
  cards.innerHTML += c;
})