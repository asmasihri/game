const computerchoiceDisplay = document.getElementById('computer-choice')
const userchoiceDisplay = document.getElementById('user-choice')
const resultchoice = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userchoice
let computerchoice
let result
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener(
    'click', (e) => {
        userchoice = e.target.id
        userchoiceDisplay.innerHTML = userchoice
        generateComupterChoice()
        getResult()

    }


))

function generateComupterChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber == 1) {
        computerchoice = 'rock'

    }
    if (randomNumber == 2) {
        computerchoice = 'paper'

    }
    if (randomNumber == 3) {
        computerchoice = 'Scissors'

    }
    computerchoiceDisplay.innerHTML = computerchoice


}

function getResult() {
    if (computerchoice == userchoice) {
        result = 'its a draw'

    } else {
        result = 'its good'
    }

    resultchoice.innerHTML = result

}