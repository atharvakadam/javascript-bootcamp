let num = 103.941

//used to fix Num of digits after the decimal point
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20

// random give 0 to 0.9999
let randomNum = Math.floor(Math.random() * (max-min + 1)) + min
console.log(randomNum)

let makeGuess = function(guess){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max-min + 1)) + min
    return guess === randomNum
}

console.log(makeGuess(5))