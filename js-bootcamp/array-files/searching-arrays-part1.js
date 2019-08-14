let notes = [{},{
    title:'My next trip',
    body:'I would like to go to Spain'
},{
    title:'Habbits to work on',
    body:'Exercise. Eating a bit better'
},{
    title:'Office modification',
    body:'Get a new seat'
}]

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first new note')

// notes.splice(1,0,'this is new second item')

// notes[2] = 'This is now new note 3'

//This foreach is a method which takes in a function and it loops through the array and carries out the function
// for each element in the array
notes.forEach(function(item, index){
    console.log(item, index)
})


console.log(notes.length)
console.log(notes)

// indexOf function uses === equality operator which works for strings, numbers and booleans, but not for objects
// for objects, a better method to get index is -> findIndex() method which takes in a function as an input
// you can use findIndex() by defining a function in it which returns boolean value depending on whether it
// finds what you are looking for -> it also stops the iterations as soon as you find it thus being efficient.

const index = notes.findIndex(function(note,index){
    return note.title === 'Habbits to work on'
})

console.log(index)
