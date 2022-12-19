const time_p = document.querySelector('.time');
const set_btn = document.querySelector('.set-btn');
const set_input = document.querySelector('.set-input');
const finaltime_tag = document.querySelector('.final-time');

let d = new Date();
let time = d.getTime();
let current_second = Math.floor(time / 1000);
time_p.innerHTML = current_second;
let final_second = current_second + 10000;

let playing = false;
var audio = new Audio('song2.mp3');

function playhehe() {
    console.log('hehe');
    d = new Date();
     time = d.getTime();
     console.log(time);
     let alpha = Math.floor(time / 1000);
     time_p.innerHTML = alpha;

    if (!playing) {
        if (final_second <= alpha) {
            audio.play();
            playing  = true;
        }
    }
}

set_btn.addEventListener('click', ()=>{
    final_second  = parseInt(set_input.value) + 1671410000;
    finaltime_tag.innerHTML = final_second;

})

setInterval(playhehe, 100);