let compChoice = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return compChoice[Math.floor(Math.random() * compChoice.length)]
}

function playRound(pSelection, cSelection){
    pSelection = pSelection.toLowerCase();
    console.log(`Player: ${(pSelection[0].toUpperCase() + pSelection.slice(1))}`)
    console.log(`Computer: ${cSelection}`)
    pSel = pSelection.toLowerCase()
    cSel = cSelection.toLowerCase()
    let result = ''
    if (pSel == 'rock' && cSel == 'paper'){
        message = "You Lose, Paper beats Rock!"
        return message
    } else if (pSel == 'rock' && cSel == 'scissors'){
        message = "You Win, Rock beats Scissors!"
        return message
    } else if (pSel == 'rock' && cSel == 'rock'){
        message = "It's a Draw!"
        return message
    } else if (pSel == 'scissors' && cSel == 'paper'){
        message = "You Win, Scissors beats Paper!"
        return message
    } else if (pSel == 'scissors' && cSel == 'rock'){
        message = "You Lose, Rocks beats Scissors!"
        return message
    } else if (pSel == 'scissors' && cSel == 'scissors'){
        message = "It's a Draw!" 
        return message
    } else if (pSel == 'paper' && cSel == 'scissors'){
        message = "You Lose, Scissors beats Paper!"
        return message
    } else if (pSel == 'paper' && cSel == 'rock'){
        message = "You Win, Paper beats Rock!"
        return message
    } else if (pSel == 'paper' && cSel == 'paper'){
        message = "It's a Draw!"
        return message
    }
}

function game(){
    let cCount = 0;
    let pCount = 0;

    for(let i = 0; i < 5; i++){
        let cChoice = getComputerChoice()
        let pChoice = prompt("Choose Rock, Paper or Scissors: ")

        console.log(`Round ${i+1}`)
        let score = playRound(pChoice, cChoice)
        console.log(message)

        switch(score) {
            case 'You Lose, Paper beats Rock!':
                cCount += 1;
                console.log("Computer Wins!")
                console.log(`Player: ${pCount}\nComputer: ${cCount}\n\n`)
                break;
            case 'You Win, Rock beats Scissors!':
                pCount += 1;
                console.log("Player Wins!")
                console.log(`Player: ${pCount}\nComputer: ${cCount}\n\n`)
                break;
            case 'You Win, Scissors beats Paper!':
                pCount += 1;
                console.log("Player Wins!")
                console.log(`Player: ${pCount}\nComputer: ${cCount}\n\n`)
                break;
            case 'You Lose, Rocks beats Scissors!':
                cCount += 1;
                console.log("Computer Wins!")
                console.log(`Player: ${pCount}\nComputer: ${cCount}\n\n`)
                break;
            case 'You Lose, Scissors beats Paper!':
                cCount += 1;
                console.log("Computer Wins!")
                console.log(`Player: ${pCount}\nComputer: ${cCount}\n\n`)
                break;
            case 'You Win, Paper beats Rock!':
                pCount += 1;
                console.log("Player Wins!")
                console.log(`Player: ${pCount}\nComputer: ${cCount}\n\n`)
                break;
            default:
                console.log(`Player: ${pCount}\nComputer: ${cCount}\n\n`)
            }
    }
    
    if (cCount > pCount){
        console.log("\n\n\nComputer Wins!")
        alert('Computer Wins!')
    } else if (pCount > cCount) {
        console.log("\n\n\nPlayer Wins!")
        alert('Player Wins')
    } else {
        console.log("\n\n\nIt's a Draw!")
        alert('It\'s a Draw!')
    }
    
}

game()