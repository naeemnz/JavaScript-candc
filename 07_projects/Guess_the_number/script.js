let randomNumber = parseInt(Math.random()*100+1);
const submit =document.querySelector('#subt');//submit button
const userInput =document.querySelector('#guessField');
const guessSlot =document.querySelector('.guesses');//previous gusses
const remaining =document.querySelector('.lastResult');//remaing gusses
const lowOrHigh =document.querySelector('.lowOrHi');//para to give a hint
const startOver =document.querySelector('.resultParas');//it is a paragraph shown on remaing gusses, if all the gusses are used then start over will be displayed
const p = document.createElement('p'); //to display messages
let prevGuess = [];//to show the gussed valu lists
let numberOfGuesses = 1; //to show the no. of attempts
let playGame = true;//
if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess); 
        validateGuess(guess);
    });
}
//k user abcd ya 500 na de isliye, mtlb input sahi he ek number he, ya 1 se 100 k bich me he ya nahin
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number');
    } else if(guess < 1){
        alert('Please enter a number greater than 1');
    } else if(guess > 100){
        alert('Please enter a number less 100');
    } else {
        prevGuess.push(guess);
        if (numberOfGuesses === 11 ){
            displayGuess(guess)
             displayMessage(`Game Over. Random No. was ${randomNumber}`)
             endGame()
        } else {
        displayGuess(guess)
        checkGuess(guess)

        }
    }
}
//k number high he ya low he ya phir correct he
function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage(`You guessed it right.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low.`)
    } else if (guess > randomNumber){
        displayMessage(`Number is too high.`);
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, ` //push karte jana he guesses ko 
    numberOfGuesses++;
    remaining.innerHTML = `${11-numberOfGuesses}`


}
//is method me msg pass kardo, user ki input value empty kardenge, inner html men guess no. add karenge aur remining guess ko kam kardenge aur yahan hum dom k sath interact karenge   
function displayMessage(message){ //same messages hen jo uper if else men humne diye hen
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game!</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess = [];
        numberOfGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numberOfGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}