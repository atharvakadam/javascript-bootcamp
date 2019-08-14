let notes = ['Note 1','Note 2','Note 3']
// pop(): string
// Removes the last element from an array and returns it.
console.log(notes.pop())
//push(item): string
//adds item as the last element in an array
notes.push('My new note')

// shift -> Removes the first element from an array and returns it
console.log(notes.shift())
// unshift -> Inserts new elements at the start of an array.
notes.unshift('My first new note')
console.log(notes)

// the splice function has two or three arguments. First argument is the start index
// second argument is the number of items to delete
// third optional argument is to replace deleted element in its place
notes.splice()
notes.splice(1,0,'this is new second item')
console.log(notes)