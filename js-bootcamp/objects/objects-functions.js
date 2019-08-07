let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
} 

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
} 

let getSummary = function(book){
    return {
        summary:` ${book.title} by ${book.author}`,
        pageCountSummary:`${book.title} is ${book.pageCount} pages`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

let convertFarenheitToCelsius = function(tempInFarenheit){
    celsius =  (tempInFarenheit - 32) * (5/9)
    kelvin = (tempInFarenheit + 459.67) * 5 / 9
    
    let tempObject = {
        temperatureInFarenheit:tempInFarenheit,
        temperatureInCelsius:celsius,
        temperatureInKelvin:kelvin
    }

    //return `The temperature is ${tempObject.temperatureInFarenheit}F or ${tempObject.temperatureInCelsius}C or ${tempObject.temperatureInKelvin}K`
    return tempObject
}

let tempresult = convertFarenheitToCelsius(32)
console.log(tempresult)
