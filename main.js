window.onload = function() {
  
  const gameBoard = document.querySelector(".game-board")
  const gameOverPrompt = document.querySelector(".heading");
  const endScreen = document.querySelector(".screen");
  const scoreDisplay = document.querySelector(".score");
  const level = document.querySelector("#level");
  let score = 0;


  function createDefender(){
    const defender = document.createElement('div');
    defender.className = "defender";
    gameBoard.appendChild(defender);

    function randomPosition(defender){

    let random = ((Math.random() * gameBoard.clientWidth)+ gameBoard.offsetLeft)- 40;

    defender.style.left = random + "px"
  }
  randomPosition(defender);
  score = score + 100
  


setInterval(function(){
  if(checkCollision(player,defender)){
    GameOver();
  }
 },100);

  let counter = 0;
  function level_1(){
  let level_1 = setInterval(function(){
    createDefender();
    counter++
    if(counter === 31){
      clearInterval(level_1)
      return 
    }
    level.innerHTML = `Level: 1`

  }, 500)
  setTimeout(level_2, 20000);}

function level_2(){
  let counter = 30
  let level_2 = setInterval(function(){
    createDefender();
    counter++
    if(counter === 91){
      clearInterval(level_2)
      return 
    }
    level.innerHTML = `Level: 2`

  }, 300);
setTimeout(level_3, 25000)}


  function level_3(){
  let counter = 90
  let level_3 = setInterval(function(){
    createDefender();
    counter++
    if(counter === 151){
      clearInterval(level_3)
      return 
    }
    level.innerHTML = `Level: 3`

  }, 250);
setTimeout(level_4, 20000)}



function level_4(){
  let counter = 150
  let level_4 = setInterval(function(){
    createDefender();
    counter++
    if(counter === 270){
      clearInterval(level_4)
      return 
    }
    level.innerHTML = `Level: 4`

  }, 200);}



  level_1();





const player = document.querySelector('.player');
const defenderPlayer = document.querySelector('.defender');

document.addEventListener('keydown', move);
// .addEventListener('keydown', moveLeft);

// function move(e){
//   // console.log(e, 'EVENT')
//     const keydown = e.key;
//   if(keydown === "ArrowRight"){
//     player.style.left = (player.style.left + 50)+'px';
//     // player.style.marginRight -= 200 = "px";
//   }
//   else if(keydown === "ArrowLeft"){
//     player.style.right += 50 + "px";
//     // player.style.marginLeft -= 200 = "px";
//   }


// Player movement
let left = 0;
function move(e){
  if(e.keyCode === 39){
    left += 20;
  player.style.left = (parseInt(left) + left) + "px";
}

else if(e.keyCode === 37){
  left -= 20;
  player.style.left = (parseInt(left) + left) + "px";
}
}


//stackoverflow
function checkCollision(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();
    
    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))

    );
  }


// checkCollision(player, defender);


// function checkForCollide(){
//   let counter = 0
//   let Collide = setInterval(function(){
//     checkCollision(player, defender);
//     counter++
//     if(counter === 1000){
//       clearInterval(Collide)
//       return 
//     }

//   }, 10);}

function GameOver(){
  // clearInterval(score);
gameOverPrompt.innerHTML = `Game Over </br> Score: ${score}`
gameOverPrompt.classList.add("game-over");
endScreen.classList.add("end-screen");
player.style.left = "5000px";


}

// console.log(score);
setInterval(function(){ scoreDisplay.innerHTML = `Score: ${score}`; }, 500);








}




