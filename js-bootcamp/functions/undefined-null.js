let name

if (name === undefined) {
    console.log('Please provide a value')
}
else{
console.log(name) 
}


// undefined for function arguments 
// undefined as function return default value
let square = function(name){
    let result =  name * name
    //return console.log(result)
    console.log(name)
} 

let age = null

console.log(null)

square()
