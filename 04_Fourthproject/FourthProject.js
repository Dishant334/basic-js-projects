let randomNumber=Math.floor((Math.random()*10) + 1)
const userButton=document.querySelector('#submit')
const userInput=document.querySelector('#New')
const previous=document.querySelector('.no')
const remaining=document.querySelector('.no2')
const lowiorhigh=document.querySelector('.loworhigh')
const resultParas=document.querySelector('.lasttext')


const p=document.createElement('p')

let prevGuess=[]
let numGuess=1   //jab 10 hoye to disable krdo 

let playGame=true   //for game it is always there if it end so false
if(playGame){   //here we are checking if the user is allowed or not and if he is allowed than when he submit by putting a number we take it to check if it is a valid guess
    userButton.addEventListener('click',function(event){
        event.preventDefault()
       const guess= parseInt(userInput.value)
       console.log(guess)
       validateGuess(guess)
       
    })
}
function validateGuess(guess){
//check if given value is valid and is between 1 to 10 
if(isNaN(guess) || guess >10 || guess<1){
    alert(`Please enter a valid number`)
} else{
    prevGuess.push(guess)
    if(numGuess === 6){
        CleanupGuess(guess)
        displayMessage(`Game over.Random number was ${randomNumber}`)
        endGame()
    }else{
        checkGuess(guess)
        CleanupGuess(guess)
    }
}

}
function checkGuess(guess){
//chech if the value is equal to guess if low so print low in display and high so display high 
if(guess === randomNumber){
displayMessage(`You guessed it right. You Won`)
endGame()}
else if(guess<randomNumber){
    displayMessage(`Number is too low`)

}else if(guess>randomNumber){
  displayMessage(`Number is too high`) 
}
}
function CleanupGuess(guess){
userInput.value=' '
previous.innerHTML +=`${guess} ,`
numGuess++
remaining.innerHTML=`${6-numGuess}`
}

function displayMessage(message){

lowiorhigh.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
userInput.value= ''
userInput.setAttribute('disabled',' ')
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start newGame</h2>`
resultParas.appendChild(p)
playGame=false
newGame()    
}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(event){
    randomNumber=Math.floor((Math.random()*10) + 1)
    prevGuess=[]
    numGuess=1
    previous.innerHTML=' '
    remaining.innerHTML=`${6-numGuess}`
    userInput.removeAttribute('disabled')    
    resultParas.removeChild(p)
    lowiorhigh=' '
    playGame=true
    
})
}
