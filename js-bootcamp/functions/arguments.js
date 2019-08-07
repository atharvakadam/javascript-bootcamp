let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)


let getScoreText = function( name = 'Anonymous', score = 0){
    // console.log(name)
    // console.log(score)
    return 'Name: ' + name +  ' score: ' + score
}

let result2 = getScoreText(undefined, 99)
console.log(result2)

//Challenge

let getTip = function(amount, tipPercent = .2){
    // percent = tipPercent * 100
    // tip = amount * tipPercent
    return `A ${tipPercent*100}% tip on $${amount} is $${amount*tipPercent}`
}

let result3 = getTip(100,.25)
console.log(result3)

let name = 'Atharva'

console.log(`Hey, My name is ${name}`)