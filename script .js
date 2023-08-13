
var hit;

var score = document.getElementById("score").innerHTML;
// functon to generate coins and random numbers inside them
function generatecoin() {
    var rem = " ";
for (let i = 0; i < 189; i++) {
    var random = Math.floor(Math.random()*10);
    rem += `<div class="coin">${random}</div>`;
}

document.getElementById("pbtm").innerHTML = rem;
// console.log(random);
}

//function for timer
let time= 60;
function timer() {
    var timerint = setInterval(function() {
        if (time > 0) { 
            time--;
            document.querySelector("#timerva").innerHTML = time;
        }
        
        else{
            clearInterval(timerint);
            document.getElementById("pbtm").innerHTML =`<div id="over"><h1>&#127881; Game Over &#127881;</h1> <p> Refresh the page to play the game again </p></div>`;
        }
    }, 1000);
    }

// generate random number in hit
function hitgenerator() {
    hit = Math.floor(Math.random()*10);
    document.getElementById("hitnumber").innerHTML=hit;
}


//function to increase the score by 10 , that will be called when user hits the hit

function increasescore(){
    score = Number(score);
    score +=10;
    document.getElementById("score").innerHTML = score;
}


//listening to the user click on the button 
//checking if the clicked bubble matches the value in hit

document.getElementById("pbtm").addEventListener("click",function(details){
    var userClick =Number((details.target.innerHTML));
    if(userClick===hit){
        increasescore();
        generatecoin();
        hitgenerator();
   }
})






generatecoin();
timer();
hitgenerator();