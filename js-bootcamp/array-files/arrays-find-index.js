// indexOf function uses === equality operator which works for strings, numbers and booleans, but not for objects
// for objects, a better method to get index is -> findIndex() method which takes in a function as an input
// you can use findIndex() by defining a function in it which returns boolean value depending on whether it
// finds what you are looking for -> it also stops the iterations as soon as you find it thus being efficient.

const index = notes.findIndex(function(note,index){
    return note.title === 'Habbits to work on'
})

console.log(index)