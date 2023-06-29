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

let  handCards = () => {
  let cards = document.querySelector('.cards');
  let w = cards.offsetWidth;
  let totalarc = 30;
  let numcards = 10;
  let angles = Array(numcards).fill('').map((a, i) => (totalarc / numcards * (i + 1)) - (totalarc/2 + (totalarc / numcards) / 2));
  let margins = angles.map((a, i) => w / numcards * (i + 1));

  angles.forEach((a, i) => {
    let s = `transform:rotate(${angles[i]}deg);margin-left:${margins[i]}px;`
    let c = `<div class='card' style='${s}'> <img src ='/Pics/Agumon.png' alt = 'card' width = '100%' height = '100%'/> </div>`;
    cards.innerHTML += c;
  })
}

handCards()