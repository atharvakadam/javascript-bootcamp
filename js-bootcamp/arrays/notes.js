let notes = [{
    title:'My next trip',
    body:'I would like to go to Spain'
},{
    title:'Habbits to work on',
    body:'Exercise. Eating a bit better'
},{
    title:'Office modification',
    body:'Get a new seat'
}]

// const findNote = function(notes, noteTitle){
//     const note = notes.find(function(note){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return note

// }

//                              OR 

const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }
        else if(b.title.toLowerCase() > a.title.toLowerCase()){
            return 1
        }
        else{
            return 0
        }
        
    })
}

sortNotes(notes)
console.log(notes)


const findNote = function(notes, noteTitle){
    return notes.find(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, query){
    return notes.filter(function(note){
        isTitleMatch = note.title.toLowerCase().includes(query)
        isBodyMatch = note.body.toLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes,'eating'))


// const findNote = function(notes, noteTitle){
//     const index = notes.findIndex(function(note){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]

// }
const note = findNote(notes, 'Office modification')
console.log(note)
