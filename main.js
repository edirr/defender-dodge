window.onload = function() {
  
  const gameBoard = document.querySelector(".game-board")

  function createDefender(){
    const defender = document.createElement('div');
    defender.className = "defender";
    gameBoard.appendChild(defender);

    function randomPosition(defender){

    let right = Math.random() * gameBoard.innerWidth;

    defender.style.right += right + "px"
  }
  

  }
  createDefender();
  randomPosition();



const player = document.querySelector('.player');

document.addEventListener('keydown', move);
// .addEventListener('keydown', moveLeft);

function move(e){
  // console.log(e, 'EVENT')
  const keydown = e.key;
  if(keydown === "ArrowRight"){
    player.style.left += 100 + "px";
  }
  else if(keydown === "ArrowLeft"){
    player.style.right += 100 + "px";
  }

   
   
// console.log(e.key, 'CURRENT keydown');
}


// console.log(rightButton);
}


 //  console.log(body);

 // function createDuck(){

 //  const duck = document.createElement("div");
 //  duck.className = "duck";
  
 //  body.appendChild(duck);
  
 //  duck.classList.add("flap");
  
 //  setInterval(function(){ duck.classList.toggle("flap"); }, 250);

 //  function randomPosition(duck){
 //    let left = Math.random() * window.innerWidth;
 //    let top = Math.random() * window.innerHeight;

 //    duck.style.left = left + "px";
 //    duck.style.top = top + "px";


 //  }