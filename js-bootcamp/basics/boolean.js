// === - equality operator
// !== - inequality operator
// < - less than operator
// > - greater than operator
// <= less than equal to poperator
// >= greater than equal to

let temp = 31
let isFreezing = temp <= 32

if (isFreezing) {
    console.log('It is freezing outside')
}

 let age = 67
// let isChild = age <= 7
// let isSenior = age >= 65

if(age<=7){
    console.log('You are going to get the children discount')
}
else if(age> 7 & age<18){
    console.log('You are going to get the teen discount')
}
else if(age> 18 & age<64){
    console.log('You are going to get the adult discount')
}
else{
    console.log('You are going to get the senior citizen discount')
}

// console.log('isChild: ' + isChild)
// console.log('isSenior: ' + isSenior)
