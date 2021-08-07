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

// set a word to figure out - set a variable

// ask for guess
//     decide if that letter is in the word

//         if exist place letter in correct location

//         if not mark hang man and ask again

// ******************************************************************************************

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



let given = 'happy'  // given is the word we are trying to match
let givenArray = given.split('');
let answerArray = Array(givenArray.length)
answerArray.fill('_')
let counter = 0;


const runIt = (guess) => {  // call process guess
    let matched = false;
    for (let i = 0; i < givenArray.length; i++) {
        if (guess === givenArray[i]) {
            // setting the answer array letter in correct place
            answerArray[i] = givenArray[i] // adding the letter or letters to the answer array in position
            //console.log(answerArray)
            matched = true;

        }


    }
    // set a flag and set it to false
    // flip it to true only if you find one letter that matches
    if(!matched){   // this is equal to (matched == false)
        counter += 1;

    }
    return matched    
}

const getPrompt = () => {
    rl.question('guess: ', (guess) => {
        let correct = runIt(guess);
        if(correct == true){
            console.log('you have matched a letter')
        } else {
            console.log('Your letter did not match')
        }
        console.log('the current board is: ', answerArray)
        if (answerArray.toString() === givenArray.toString()) {
            console.log('you are a winner');
            return
        } else if( counter < 3){
            getPrompt()
        } else {
            console.log('you have ran out of turns')
            console.log(givenArray.toString())
            return
        }
    })

}

getPrompt();
// call for another guess a function()
