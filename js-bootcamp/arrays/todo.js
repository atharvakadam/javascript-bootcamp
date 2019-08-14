//const todos = ['eat','draw','study','play','run']

const todos = [{
    title:'eat',
    isCompleted:true
},{
    title:'draw',
    isCompleted:false
},{
    title:'study',
    isCompleted:true
},{
    title:'play',
    isCompleted:false
},{
    title:'run',
    isCompleted:true
}]

const deleteTodo = function(todos,title){
    const index = todos.findIndex(function(todo){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    if(index>-1){
        todos.splice(index-1,1)
    }

}


const getThingsTodo = function(todos){
    return todos.filter(function(todo){
        return !todo.isCompleted
    })
}

console.log(getThingsTodo(todos))


const sortTodo = function(todos){
    todos.sort(function(a,b){
        if(!a.isCompleted && b.isCompleted){
            return -1
        }
        else if(a.isCompleted && !b.isCompleted){
            return 1
        }
        else{
            return 0
        }
        
    })
}

sortTodo(todos)
console.log(todos)

// console.log(todos)
// deleteTodo(todos,'study')
// console.log(todos)


