// Lexical Scoping (Static Scope)
// Global Scope - defined outside of all code blocks
// Local Scope - defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ ancesstor scope
// Global scope (varOne)
  // Local Scope (varTwo)
    // Local Scope(varFour)
  // Local Scope(varThree)  

let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo  = 'varTwo'
    console.log(varTwo)
    if(true){
        let varFour = 'varFour'
    }
}

if(true){
    let varThree = 'varThree'
}

console.log(varTwo)