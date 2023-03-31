
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
const xwon_p = document.querySelector(".x-won p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizzard_div = document.getElementById("l");
const smock_div = document.getElementById("sp");


function numberToWord(letter){
  if (letter === "r") return "rock";
  if (letter === "p") return "paper";
  if (letter === "s") return "scissors";
  if (letter === "l") return "lizzard";
  if (letter === "sp") return "spock";

}

function getComputerChoice(){
  const choices = ["r", "p", "s", "l", "sp"];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}
function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  opponentScore_span.innerHTML = opponentScore;
  xwon_p.innerHTML = numberToWord(userChoice) + " beats " + numberToWord(computerChoice) + " you win!! 🔥";
  document.getElementById(userChoice).classList.add("green-border");
  setTimeout(function(){document.getElementById(userChoice).classList.remove("green-border")}, 500)
}
function lost(userChoice, computerChoice){
  opponentScore++;
  opponentScore_span.innerHTML = opponentScore;
  userScore_span.innerHTML = userScore;
  xwon_p.innerHTML = numberToWord(userChoice) + " loses to " + numberToWord(computerChoice) + " you lost 💀";
  document.getElementById(userChoice).classList.add("red-border");
  setTimeout(function(){document.getElementById(userChoice).classList.remove("red-border")}, 500)
  
}
function draw(userChoice, computerChoice){
  xwon_p.innerHTML = numberToWord(userChoice) + " equalises " + numberToWord(computerChoice) + " its a draw🤝";
  document.getElementById(userChoice).classList.add("yellow-border");
  setTimeout(function(){document.getElementById(userChoice).classList.remove("yellow-border")}, 500)
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
        win(userChoice, computerChoice);
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
        lost(userChoice, computerChoice);
        break;
      case "rr":
      case "spsp":
      case "ll":
      case "ss":
      case "pp":
        draw(userChoice, computerChoice)
        break;
  }
  

}





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


