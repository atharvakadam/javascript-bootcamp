let notes = ['Note 1','Note 2','Note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first new note')

// notes.splice(1,0,'this is new second item')

notes[2] = 'This is now new note 3'

//This foreach is a method which takes in a function and it loops through the array and carries out the function
// for each element in the array
notes.forEach(function(item, index){
    console.log(item, index)
})


console.log(notes.length)
console.log(notes)

// generic for loop
for(let count = 0;count<=notes.length-1;count++){
    console.log(notes[count], count)
}