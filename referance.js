// Input: Any letter
// _ _ _ _ _

// L (input)
// _ _ L L _ (return)

// H (input)

// H _ L L _

// E (input)

// H E L L _

// O (input)

// H E L L O

set a word to figure out - set a variable

ask for guess
    decide if that letter is in the word

        if exist place letter in correct location

        if not mark hang man and ask again

// ******************************************************************************************8


let keyArray = key.split('');
let guess = '';
let correctLetterLocation = 0;
let answerArray = []
let counter = 0;
let placeLetter;

answerArray.length = keyArray.length;

placeLetter =  keyArray.indexOf(guess);


const runIt = (guess) =>{  // call process guess

for(let i = 0; i < keyArray.length; i++){
    if(guess === keyArray[i]){
        // setting the answer array letter in correct place
      answerArray[i] = keyArray[i] // still working on this spot
        
    } else {
        // let user know the guess was incorrect
        // add to counter to end game if reaches 5
            // if(counter === 5){
                // let user know they lost
                // return
            //} else {
                // call for another guess a function()
            //}
    }
  }

}
// call for another guess a function()

// ********************** guess function ********************

const guessFunc = (guess) => {

    rl.question('guess: ', (guess) => {
        runIt(guess);
        if(!continueGame){
          console.log('game over')
          return false;
        } else {

    if(answerArray === keyArray){
        console.log("you win")
        return;

    } else {

    }
}


//  **************************************************************************************
        'use strict';

        const assert = require('assert');
        const readline = require('readline');
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
        
        let board = [];
        let solution = '';
        let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        
        const printBoard = () =>  {
          for (let i = 0; i < board.length; i++) {
            console.log(board[i]);
          }
        }
        
        const generateSolution = () =>  {
          for (let i = 0; i < 4; i++) {
            const randomIndex = getRandomInt(0, letters.length);
            solution += letters[randomIndex];
          }
        }
        
        const getRandomInt = (min, max) => {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        
        const generateHint = (guess) =>  {
          // your code here
          let solutionArray = solution.split('');
          //console.log(`Solution array is: ${solutionArray}`);
          let guessArray = guess.split('');
          //console.log(`Guess array is: ${guessArray}`);
          //console.log(guessArray[1]);
          let correctLetterLocations = 0;
          let correctLetters = 0;
          let correctLocationString = "";
          let correctLetterString = "";
          
         
          
        // ************** checking correct letter and location *******************
        
          for(let i = 0; i < solutionArray.length; i++){
            if(guessArray[i] === solutionArray[i]){
              //console.log('there is a correct location match');
              correctLetterLocations += 1;
              //console.log("correct letter locations: ", correctLetterLocations);
              solutionArray[i] = null;
              //console.log("new solutionArray correct location match: ", solutionArray);
        
            } 
           
          }
         // ********** checking correct letter  *******************   
          for(let i = 0; i < solutionArray.length; i++){
            //console.log('is this running');
            //console.log('solutingArray in check letter: ', solutionArray)
            let targetIndex = solutionArray.indexOf(guessArray[i]);
            //console.log('targetIndex: ', targetIndex);
          if(targetIndex > -1){
            //console.log("There is a letter match");
            
            correctLetters += 1;
            solutionArray[targetIndex] = null;
            //console.log("targetIndex: ", targetIndex);
            //console.log("new solutionArray letter match: ", solutionArray);
            
            }
            
          }
             
          //console.log('correctLocationString: ', correctLocationString);
          //console.log('correctLetterString: ', correctLetterString);
          
          let boardString = (guess+","+correctLetterLocations.toString()+"-"+correctLetters.toString());
          board.push(boardString);
        
          return correctLetterLocations + '-' + correctLetters;
          //console.log('this the the new board: ', board);
        
        }
        
        let continueGame;
        let count = 1;
        
        const mastermind = (guess) => {
          solution = 'abcd'; // Comment this out to generate a random solution
          // your code here
            generateHint(guess);
          if(guess == solution){
            printBoard();
            console.log('you guessed it');
            continueGame = false
            return 'You guessed it!';
          }else if(count >= 10){
            console.log('You ran out of turns! The solution was ', solution)
            continueGame = false;
          } else {
            console.log("Game Board");
            printBoard();
            console.log('Try again')
          }
        
        }
        
        
        const getPrompt = () =>  {
          rl.question('guess: ', (guess) => {
            mastermind(guess);
            if(!continueGame){
              console.log('game over')
              return false;
            } else {
             
              count += 1;
              getPrompt();
            }
            
          });
        
        }
        
        // Tests
        
        if (typeof describe === 'function') {
          solution = 'abcd';
          describe('#mastermind()', () => {
            it('should register a guess and generate hints', () => {
              mastermind('aabb');
              assert.equal(board.length, 1);
            });
            it('should be able to detect a win', () => {
              assert.equal(mastermind(solution), 'You guessed it!');
            });
          });
        
          describe('#generateHint()', () => {
            it('should generate hints', () => {
              assert.equal(generateHint('abdc'), '2-2');
            });
            it('should generate hints if solution has duplicates', () => {
              assert.equal(generateHint('aabb'), '1-1');
            });
        
          });
        
        } else {
        
          generateSolution();
          getPrompt();
        }