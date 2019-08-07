let name = '  Andrew Mead  '

// Length property
console.log(name.length)
console.log(name.toUpperCase())


let password = 'abc123password'
console.log(password.includes('password'))

// Trim

console.log(name)
console.log(name.trim())


let isValidPassword = function(input){
    if(input.length<=8){
        return false
    }
    else if(input.includes('password')){
        return false
    }
    else{
        return true
    }
}

console.log(isValidPassword('abc123password'))
console.log(isValidPassword('asdabsinca213121'))
console.log(isValidPassword('abc1'))
