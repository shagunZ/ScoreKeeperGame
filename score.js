

const p1={
    score:0,
    button: document.querySelector('#p1button'),
    display:document.querySelector('#p1display')
}



const p2={
    score:0,
    button: document.querySelector('#p2button'),
    display:document.querySelector('#p2display')
}





// const p1button = document.querySelector('#p1button');
// const p2button = document.querySelector('#p2button');
const resetButton = document.querySelector('#reset');
// const p1display = document.querySelector('#p1display')
// const p2display = document.querySelector('#p2display')
const selectwinningscore = document.querySelector('#playto');

let p1score= 0
let p2score= 0
let winningScore = 3;
let isgameover = false;
//generic button
function updateScores(player,opponent){
    if (!isgameover){
        player.score +=1;
        if(player.score===winningScore){
           player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score
    }
}

p1.button.addEventListener('click',function(){
    updateScores(p1,p2)
})

// p1button.addEventListener('click',function(){
//     if(!isgameover){
//         p1score +=1
//    if(p1score === winningScore){
//      isgameover = true;
//      p1display.classList.add('winner')
//      p2display.classList.add('loser')
//      p1button.disabled = true;
//      p2button.disabled = true;
//    }
//    p1display.textContent= p1score
//    }
// })

p2.button.addEventListener('click',function(){
//     if(!isgameover){
//         p2score +=1
//    if(p2score === winningScore){
//      isgameover = true;
//      p2display.classList.add('winner')
//      p1display.classList.add('loser')
//      p1button.disabled = true;
//      p2button.disabled = true;
//    }
//    p2display.textContent= p2score
//    }
updateScores(p2,p1)
})

selectwinningscore.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset);

// function reset(){
//     isgameover = false;
//     p1score=0;
//     p2score=0;
//     p1display.textContent= 0;
//     p2display.textContent= 0;
//     p1display.classList.remove('winner','loser')
//     p2display.classList.remove('loser','winner')
//     p1button.disabled = false;
//     p2button.disabled = false;

//  }
function reset(){
    isgameover = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent =0;
        p.display.classList.remove('winner','loser');
        p.button.disabled = false;
    }
 }
 
