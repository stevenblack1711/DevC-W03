const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice, computerChoice) => {
    let result;
  
    if (userChoice === 'ROCK') {
      result = computerChoice === 'SCISSORS' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'PAPER') {
      result = computerChoice === 'ROCK' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'SCISSORS') {
      result = computerChoice === 'PAPER' ? 'Victory!' : 'Defeat!';
    }
  
    if (userChoice === computerChoice) result = 'Tie game!';
    return result;
  };


  export {randomComputerChoice, getRoundOutcome}