
window.onload = function() {

  //Creating variables 
  const gameBoard = document.querySelector(".game-board")
  const gameOverPrompt = document.querySelector(".heading");
  const endScreen = document.querySelector(".screen");
  const scoreDisplay = document.querySelector(".score");
  const level = document.querySelector("#level");
  const player = document.querySelector('.player');
  const defenderPlayer = document.querySelector('.defender');
  let score = 0;


  //Defenders are created and randomly dropped from the top of the page 
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
  

    //constantly checking for collision until given a true vaule
    //after true value, it runs the GameOver function.
    setInterval(function(){
      if(checkCollision(player,defender)){
      GameOver();
      }
    },100);

  }

  //score is constantly being refreshed and adding to the screen
  setInterval(function(){ scoreDisplay.innerHTML = `Score: ${score}`; }, 500);

  
  //Levels
  //Defenders are created and dropped at increasing intervals as the 
  //levels increase. Once the counter hits the value it clears the interval and starts the next level
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




document.addEventListener('keydown', move);



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
//Identifies where the character is located and 
//compares the two to see if there is any overlap

function checkCollision(player, defender) {
    let runner = player.getBoundingClientRect();
    let tackler = defender.getBoundingClientRect();
    
    return !(
        ((runner.top + runner.height) < (tackler.top)) ||
        (runner.top > (tackler.top + tackler.height)) ||
        ((runner.left + runner.width) < tackler.left) ||
        (runner.left > (tackler.left + tackler.width))

    );
  }

const restartButton = document.createElement('button');
//After collision is detected, the game over screen pops up with player score
//player is then moved off gameboard, to not interfere with score
function GameOver(){
  
gameOverPrompt.innerHTML = `Game Over </br> Score: ${score}`
gameOverPrompt.classList.add("game-over");
endScreen.classList.add("end-screen");
player.style.left = "5000px";

restartButton.classList.add("restart-button");
endScreen.appendChild(restartButton);
restartButton.innerHTML = 'Play Again';


// const backToStart = document.createElement('a')
// backToStart.setAttribute("href", "start-screen.html");




}
restartButton.addEventListener('click', restart)

function restart(){
  window.location.replace("index.html")

}




}




