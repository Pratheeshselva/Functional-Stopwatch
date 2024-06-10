
let hh =0
let mm=0
let ss=0
let ms=0

let laptime = document.getElementById('lap-time')

let timer = document.getElementById('timer')

let startbutton = document.getElementById('startbutton')

function pad(n){
    return n.toString().padStart(2, '0')
}

let myInterval;

function start(){
    myInterval =  setInterval(() => {
        ms++
        if(ms===100){
            ms=0
            ss++
        }
        if(ss===59){
            ss=0
            mm++
        }
        if(mm==59){
            mm=0
            hh++
        }
       timer.innerHTML=`${pad(hh)}<sub>HH</sub> : ${pad(mm)}<sub>MM</sub> : ${pad(ss)}<sub>SS</sub> <sub> ${pad(ms)}<sub><sub> MS</sub></sub>`
    }, 10);

    startbutton.disabled = true;
}

function stop(){
  clearInterval(myInterval)
  startbutton.disabled = false;
  myInterval= undefined
}

function reset(){
 stop()
 hh =0
mm=0
ss=0
ms=0
timer.innerHTML=`${pad(hh)}<sub>HH</sub> : ${pad(mm)}<sub>MM</sub> : ${pad(ss)}<sub>SS</sub> <sub> ${pad(ms)}<sub><sub> MS</sub></sub>`

laptime.innerHTML=''
}

function lap(){
    if(myInterval){
        let div = document.createElement('div')
    div.innerHTML = `${pad(hh)} : ${pad(mm)} : ${pad(ss)} : ${pad(ms)}`

    laptime.appendChild(div)
    }
    else(alert('Please Start the Timer'))
    
}


