const game = () => {
  let pScore = 0;
  let cScore = 0;

  let playerName = prompt("Welcome Human! Are you prepared to lose against a Supreme Bot? PLEASE ENTER YOUR NAME:", "Player")
  if(playerName != null) {
    document.getElementById("playername").textContent = playerName;
  };

//Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function(){
        this.style.animation = "";
      });
    });

    //Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener("click", function() {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Where we call CompareHands function
          compareHands(this.textContent, computerChoice);

          //Update Images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;

        }, 2000);

        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update text
    const winner = document.querySelector(".winner");

    //Checking for Tie
    if(playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return;
    }
    //Check for Rock
    if(playerChoice === 'rock') {
      if(computerChoice === 'scissors') {
        winner.textContent = "You Win!"
        pScore++;
        updateScore();
        return;
      }else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for paper
    if(playerChoice === 'paper') {
      if(computerChoice === 'scissors') {
        winner.textContent = "Computer Wins!"
        cScore++;
        updateScore();
        return;
      }else {
        winner.textContent = "You Win!"
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for scissors
    if(playerChoice === 'scissors') {
      if(computerChoice === 'rock') {
        winner.textContent = "Computer Wins!"
        cScore++;
        updateScore();
        return;
      }else {
        winner.textContent = "You Win!"
        pScore++;
        updateScore();
        return;
      }
    }
  }

  // Calling all the inner functions
  startGame();
  playMatch();
};

// Start the game function
game();
