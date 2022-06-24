const computerChoiceDisplay = document.getElementById(`computer-choice`)
const userChoiceDIsplay = document.getElementById(`user-choice`)
const resultDisplay = document.getElementById(`result`)
const possibleChoices = document.querySelectorAll(`button`)
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(`click`, (e) => {
    userChoice = e.target.id
    userChoiceDIsplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = `Rock`
    }
    if (randomNumber === 2) {
        computerChoice = `Scissor`
    }
    if (randomNumber === 3) {
        computerChoice = `Paper`
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === userChoice) {
        result = `It's a Draw`
    }
    if (computerChoice === `Rock` && userChoice === `Paper`) {
        result = `You Won !`
    }
    if (computerChoice === `Rock` && userChoice === `Scissor`) {
        result = `You Lost !`
    }
    if (computerChoice === `Paper` && userChoice === `Scissor`) {
        result = `You Won !`
    }
    if (computerChoice === `Paper` && userChoice === `Rock`) {
        result = `You Lost !`
    }
    if (computerChoice === `Scissor` && userChoice === `Rock`) {
        result = `You Won !`
    }
    if (computerChoice === `Scissor` && userChoice === `Paper`) {
        result = `You Lost !`
    }
    resultDisplay.innerHTML = result
}