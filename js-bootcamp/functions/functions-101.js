
let greetUser = function () {
    console.log('Welcome User!!')
}

greetUser()

let square = function(num){
    let result =  num * num
    return console.log(result)
    //console.log(num)
} 

//let num = 3
square(3)

let convertFarenheitToCelsius = function(tempInFarenheit){
    celsius =  (tempInFarenheit - 32) * (5/9)
    
    return console.log(celsius)
}

convertFarenheitToCelsius(68)