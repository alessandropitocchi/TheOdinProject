const buttons = document.querySelectorAll('button')
const container = document.querySelector('#container')
const content = document.createElement('div')
const score= document.createElement('div')
let cCont = 0
let pCont = 0

buttons.forEach((button) => {
  button.addEventListener('click', playRound)
})

let compChoice = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return compChoice[Math.floor(Math.random() * compChoice.length)]
}

function playRound(){ 
  const pSelection = this.id
  const cSelection = getComputerChoice()
  const pSel = pSelection.toLowerCase()
  const cSel = cSelection.toLowerCase()
  
  if(pSel == 'rock' && cSel == 'paper'){
      message = "You Lose, Paper beats Rock!"
      cCont++
  } else if (pSel == 'rock' && cSel == 'scissors'){
      message = "You Win, Rock beats Scissors!"
      pCont++
  } else if (pSel == 'rock' && cSel == 'rock'){
      message = "It's a Draw!"
  } else if (pSel == 'scissors' && cSel == 'paper'){
      message = "You Win, Scissors beats Paper!"
      pCont++
  } else if (pSel == 'scissors' && cSel == 'rock'){
      message = "You Lose, Rocks beats Scissors!"
      cCont++
  } else if (pSel == 'scissors' && cSel == 'scissors'){
      message = "It's a Draw!" 
  } else if (pSel == 'paper' && cSel == 'scissors'){
      message = "You Lose, Scissors beats Paper!"
      cCont++
  } else if (pSel == 'paper' && cSel == 'rock'){
      message = "You Win, Paper beats Rock!"
    pCont++
  } else if (pSel == 'paper' && cSel == 'paper'){
      message = "It's a Draw!"
  }

  content.classList.add('content')
  content.setAttribute('style', 'white-space: pre;')

  content.textContent = "Player: " + pSelection + "\r\n"
  content.textContent += "Computer: "+ cSelection +" \r\n"
  content.textContent += message

  score.classList.add('score')
  score.setAttribute('style', 'white-space: pre;')

  score.textContent = "Player: " + pCont + "\r\n"
  score.textContent += "Computer: " + cCont

  container.appendChild(content)
  container.appendChild(score)

  console.log(pCont)
  console.log(cCont)
  
  if(cCont === 5){
    alert('Computer Wins')
    location.reload()
  }else if(pCont === 5){
    alert('Player Wins')
    location.reload();
  }
}
   
