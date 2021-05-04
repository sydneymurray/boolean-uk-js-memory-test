// DECLARATION SECTION
const randomNumbers = []

let numberQuantity=null
let numbersToRemember=""
let timeHandle=null



function generateNumbers(numberQuantity){
  while (numberQuantity){
      randomNumbers.push((Math.random() * 100 + 1).toFixed())
      numberQuantity--
  }
}
function displayNumbers(){
  let numbersToDisplay =""
  for ( let i = 0; i< randomNumbers.length; i++)
    numbersToDisplay+=`Number ${i+1})  ${randomNumbers[i]}\n`
  return numbersToDisplay
}
function guessNumbers(){
  score = 0
  guess=null
  for (let i = 0; i < randomNumbers.length; i++){
    guess=prompt(`Guess number ${i+1}`)
    if (randomNumbers[i]===guess)
      score++
  }
  return score
}
function wait15SecondsThenQuestion(){
  alert(`You got ${guessNumbers()} out of ${randomNumbers.length} right`)
}


// PROGRAM STARTS HERE
  
nummberQuantity = prompt('This is a memory tester to see how many numbers you can remember.\n\nHow many would you like me to test you with?')

generateNumbers(nummberQuantity)
alert(`Here are your numbers to remember:-\n${displayNumbers()}`)
timeHandle = setTimeout(wait15SecondsThenQuestion,15000)





