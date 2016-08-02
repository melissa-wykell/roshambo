let compWins = 0
let humanWins = 0

const init = () => {
  document.querySelector('.output').textContent = 'Let\'s Play!'
  // let userChoice = prompt('Do you choose rock, paper, or scissors?')
  // console.log(userChoice)
  let userRock = document.querySelector('.rock')

  userRock.addEventListener('click', () => {
    const computerChoice = computerThrow()
    let status = compare('rock', computerChoice)

    document.querySelector('.output').textContent = status +
      ' Computer played ' + computerChoice + '.'
  })

  let userScissors = document.querySelector('.scissors')

  userScissors.addEventListener('click', () => {
    const computerChoice = computerThrow()
    let status = compare('scissors', computerChoice)

    document.querySelector('.output').textContent = status +
      ' Computer played ' + computerChoice + '.'
  })

  let userPaper = document.querySelector('.paper')

  userPaper.addEventListener('click', () => {
    const computerChoice = computerThrow()
    let status = compare('paper', computerChoice)

    document.querySelector('.output').textContent = status +
      ' Computer played ' + computerChoice + '.'
  })
}
document.addEventListener('DOMContentLoaded', init)

// console.log('Computer: ' + computerChoice)

let compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return 'The result is a tie!'
    }
    else if(choice1 === 'rock') {
        if(choice2 === 'scissors'){
            return 'Rock wins.'
        }
        else {
            return 'Paper wins.'
        }
    }
    else if(choice1 === 'paper') {
        if (choice2 === 'rock') {
            return 'Paper wins.'
        }
        else {
            return 'Scissors wins.'
        }

    }
    else {
        if(choice2 === 'paper') {
            return 'Scissors wins.'
        }
        else {
            return 'Rock wins.'
        }
    }
}

const computerThrow = () => {
  let computerChoice = Math.random()
  if (computerChoice < 0.34) {
  	return 'rock'
  } else if(computerChoice <= 0.67) {
  	return 'paper'
  } else {
    return'scissors'
  }
}
