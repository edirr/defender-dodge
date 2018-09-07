window.onload = function() {
  
  const gameBoard = document.querySelector(".game-board")

  function createDefender(){
    const defender = document.createElement('div');
    defender.className = "defender";
    defender.setAttribute("data-dynamic", "false")
    gameBoard.appendChild(defender);

    function randomPosition(defender){

    let random = ((Math.random() * gameBoard.clientWidth)+ gameBoard.offsetLeft)- 40;

    defender.style.left = random + "px"
  }
  randomPosition(defender);


  // function checkForCollide(){
  // let counter = 0
  // let collide = setInterval(function(){
  //   checkCollision(player, defender);
  //   counter++
  //   if(counter === 1000){
  //     clearInterval(collide)
  //     return 
  //   }

  // }, 100);}


setInterval(function(){
  if(checkCollision(player,defender)){
    alert("hit!")
  }
 },100);
}




  // for( i = 0; i < 2; i++){
  //   setTimeout(createDefender, 1000);
  //  }

  
  // function timeOut(){
  // for( i = 0; i < 2; i++){ 
  // (function(i){setTimeout(function(){createDefender()}, 1000)})(i) 

  // }}

  // timeOut();
  
let counter = 0;
let score = counter + 100;
  function level_1(){
  //let counter = 0
  let level_1 = setInterval(function(){
    createDefender();
    counter++
    if(counter === 30){
      clearInterval(level_1)
      return 
    }
    // console.log(counter)

  }, 500)
  setTimeout(level_2, 20000);}

function level_2(){
  //let counter = 0
  let level_2 = setInterval(function(){
    createDefender();
    counter++
    if(counter === 60){
      clearInterval(level_2)
      return 
    }
    // console.log(counter)

  }, 250);
setTimeout(level_3, 20000)}



  function level_3(){
  let counter = 0
  let level_3 = setInterval(function(){
    createDefender();
    counter++
    if(counter === 90){
      clearInterval(level_3)
      return 
    }

  }, 150);
setTimeout(level_4, 20000)}



function level_4(){
  let counter = 0
  let level_4 = setInterval(function(){
    createDefender();
    counter++
    if(counter === 120){
      clearInterval(level_4)
      return 
    }

  }, 100);}



  level_1();
  // console.log(counter);





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


// function Collide(a, b) {
//     return !(
//         ((a.y + a.height) < (b.y)) ||
//         (a.y > (b.y + b.height)) ||
//         ((a.x + a.width) < b.x) ||
//         (a.x > (b.x + b.width))
//     );
// }

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











}




