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