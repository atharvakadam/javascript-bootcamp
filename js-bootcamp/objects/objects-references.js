let myAccount = {
    name:'Andrew Mead',
    expenses: 0,
    income:0
}

let addExpanse = function(account, amount){
    //console.log(account)
    account.expenses = account.expenses + amount
    //console.log(account)
}

// addExpanse(myAccount, 2.5)
// console.log(myAccount)

//addIncome
let addIncome = function(account, incomeToAdd){
    account.income = account.income + incomeToAdd 
}

//resetAccount
let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account){
    return console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income.
    $${account.expenses} in expenses.`)
}

addIncome(myAccount,2000)
addExpanse(myAccount,2.50)
addExpanse(myAccount,160)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
