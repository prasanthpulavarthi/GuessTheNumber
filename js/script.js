let userInput=document.getElementById("userInput");
let gameResult=document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);
function checkGuess(){
    let guessedNumber = parseInt(userInput.value);
    if(guessedNumber>randomNumber){
        gameResult.textContent="Too High! Try Again.";
        gameResult.style.backgroundColor="red";
    }
    else if(guessedNumber<randomNumber){
        gameResult.textContent="Too Low! Try Again.";
        gameResult.style.backgroundColor="red";

    }
    else if(guessedNumber==randomNumber){
        gameResult.textContent="Congratulations! You got it right."
        gameResult.style.backgroundColor="green";

    }
    else{
        gameResult.textContent="Please Provide a Valid Input";
        gameResult.style.backgroundColor="red";
    }
}