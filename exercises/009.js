// https://tech-docs.corndel.com/js/arrow-functions.html

/**
 * Play a game of rock-paper-scissors.
 *
 * @param {'rock' | 'paper' | 'scissors'} choice1 The choice of player 1.
 * @param {'rock' | 'paper' | 'scissors'} choice2 The choice of player 2.
 * @returns {'player1' | 'player2' | 'tie'} The result of the game.
 */
export const rockPaperScissors =
  (player1, player2) => {
    // if player1 wins, return 'player1'
    // if player2 wins, return 'player2'
    // if tie, return 'tie'
    if (player1 === player2) {
      return 'tie';
    }
  
    if (
      (player1 === 'rock' && player2 === 'scissors') ||
      (player1 === 'scissors' && player2 === 'paper') ||
      (player1 === 'paper' && player2 === 'rock')
    ) {
      return 'player1';
    }
  
    return 'player2';
  }
