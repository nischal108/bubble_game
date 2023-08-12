
// functon to generate coins and random numbers inside them
function generatecoin() {
    var rem = " ";
for (let i = 0; i < 189; i++) {
    var random = Math.floor(Math.random()*10);
    rem += `<div class="coin">${random}</div>`;
}

document.getElementById("pbtm").innerHTML = rem;
console.log(random);
}

//function for timer
let time= 60;
function timer() {
    var timerint = setInterval(function() {
        if (time > 0) { 
            time--;
            console.log(document.querySelector("#timerva").innerHTML = time);
        }
        
        else{
            clearInterval(timerint);
        }
    }, 1000);
    }
generatecoin();
timer();