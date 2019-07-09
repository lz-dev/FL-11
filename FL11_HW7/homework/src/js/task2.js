// Your code goes here
let wantPlay = confirm('Do you want to play a game?');
const slotIncrease = 4;
const prizeGrow = 2;
const prizeShrink = 2;

if (wantPlay) {
  let playAgain = false;

  do {

  let slotCount = 8;
  let maxprize = 100;
  let prize = 0;
  let totalattempts = 3;
  let wantContinue = false

    do {

     let correctnumber = Math.ceil(Math.random() * slotCount);
     let currentprize = maxprize;
     let userwon = false;
     wantContinue = false;
    
     for (let i=0;i<totalattempts;i++) {
        let choosen = parseInt(prompt('Choose roulette pocket number: \n Attempts left: ' + (totalattempts - i) 
				+ '\n Total prize: ' + prize 
				+ '\n Possible prize on current attempt: ' + currentprize));
        if (choosen === correctnumber) {
            userwon = true
            break;
        }
        currentprize = currentprize / prizeShrink;
     } 

     if (userwon) {
        prize = prize + currentprize;
        wantContinue = confirm('Congratulation, you won!   Your prize is: ' + prize + ' $. Do you want to continue ?') 	
        if (wantContinue) {
          maxprize = maxprize * prizeGrow;
          slotCount += slotIncrease;
        }
     }

  } while (wantContinue)

  alert('Thank you for your participation. Your prize is: ' + prize + ' $ ')
  playAgain = confirm('Do you want to play again ?');

 } while (playAgain)

} else {
  alert('You did not become a billionaire, but can.');
}

