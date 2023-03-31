
/* not my code */ 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


let opponentScore = 0
let userScore = 0
const opponentScore_span = document.getElementById("opponent-score");
const userScore_span = document.getElementById("user-score");
const newGame_div = document.getElementById("new-Game");
const score_div = document.querySelector(".score");
const xwon_div = document.querySelector(".x-won")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizzard_div = document.getElementById("l");
const smock_div = document.getElementById("sp");


function getComputerChoice(){
  const choices = ["r", "p", "s", "l", "sp"];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}
function win(){
  userScore++;
  userScore_span.innerHTML = userScore;
}
function lost(){
  opponentScore++;
  opponentScore_span.innerHTML = opponentScore;
}
function draw(){
  console.log("its a draw");
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
      case "rs":
      case "rl":
      case "lp":
      case "ls":
      case "sl":
      case "sp":
      case "pr":
      case "ps":
      case "sps":
      case "rsp":
        win();
    break;
      case "rp":
      case "spr":
      case "rl":
      case "ls":
      case "sps":
      case "rs":
      case "ps":
      case "lp":
      case "lsp":
      case "psp":
        lost();
        break;
      case "rr":
      case "spsp":
      case "ll":
      case "ss":
      case "pp":
        draw()
        break;
  }
  

}

game("c");



function main(){
  rock_div.addEventListener("click", function(){
  game("r")
  })
  paper_div.addEventListener("click", function(){
  game("p")
  })
  scissors_div.addEventListener("click", function(){
  game("s")
  })
  lizzard_div.addEventListener("click", function(){
  game("l")
  })
  smock_div.addEventListener("click", function(){
  game("sp")
  })
}

main();


