if(10==10){
    var firstName = 'Jen'
    // this var would be accessible everywhere since no function and hence we can access it outside the block
    // let would not be accessible outside the block because it is block scoped 
}
var firstName = 'Andrew'
// var is pretty similar to let
firstName = 'Mike'

var firstName = 'Jen'

console.log(firstName)

// differences between var and let
// with var you can redeclare an existing variable unlike let
// var is function scoped and not block scoped

console.log(age)
var age = 10
// strange behaviour with variable declarement with var instead of let
// above code always gives variable declaration preference and hence the code will always run the declaration first
// and then access the value of age
// this creates confusion regarding variable declarations in programs 

