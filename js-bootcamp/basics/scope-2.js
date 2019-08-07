// Global 
  // Local
    //Local
  // Local   

let name = 'Andrew'
if(true){
    let name = 'Mike'

    if(true){
        name = 'Jen' // if not declared above, and this is its first usage then it declares it global(This is called a Leaked Global)
        console.log(name) // Will print Mike not Andrew. This is called variable shadowing
    }

}
if(true){

}