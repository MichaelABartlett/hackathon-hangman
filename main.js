
// see the readme file to get information on the game operation

// ******************************************************************************************


    // this code makes the 'rl.question' on line 45 work
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    // this code makes the 'rl.question' on line 45 work



let given = 'happy'  // given is the word we are trying to match
let givenArray = given.split('');  // making a array of the 'given' word
let answerArray = Array(givenArray.length) // making a array called 'answerArray' that is the same length of the given word
answerArray.fill('_') // here we are placing a '_' in every location in the answerArray
let counter = 0; // this is the counter that keeps track of the number of bad guesses


const runIt = (guess) => {  // call process guess
    let matched = false; // sets the mathed variable to false, to keep track of bad guesses
    for (let i = 0; i < givenArray.length; i++) {
        if (guess === givenArray[i]) {
            // setting the answer array letter in correct place
            answerArray[i] = givenArray[i] // adding the letter or letters to the answer array in position
            //console.log(answerArray)
            matched = true; // if there was a guess that had a letter match the 'matched' variable is 
                            // changed to true, the counter will not be added to
                            // if not changed to 'true' line 64 and 65 is where the counter is added to
        }
    }
    // set a flag and set it to false
    // flip it to true only if you find one letter that matches
    if(!matched){   // this is equal to (matched == false)
        counter += 1;

    }
    return matched   // we are returning 'matched' so runIt() can be read as true or false
}

const getPrompt = () => {
    rl.question('guess: ', (guess) => {
        let correct = runIt(guess); // this is where the 'return matched' is used 
        if(correct == true){  
            console.log('you have matched a letter')
        } else {
            console.log('Your letter did not match')
        }
        console.log('the current board is: ', answerArray)
        if (answerArray.toString() === givenArray.toString()) { // we are checking to see if the user won
            console.log('You are a winner!!!!!!!!!!!!!!');
            return
        } else if( counter < 3){ // we are checking the count of misses and deciding if there
                                // is more chances or if the game is over
            getPrompt()
        } else {
            console.log('you have ran out of turns')
            console.log('The correct answer was: ' +givenArray.toString())
            return
        }
    })

}

getPrompt(); // this is the call that gets the game started

