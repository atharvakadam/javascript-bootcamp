
let gradeCalculator = function(studentScore, totalPossibleScore){
    let percentage = studentScore/(totalPossibleScore) * 100
    console.log(percentage)
    let letterGrade = 'I'

    if(percentage<=100 && percentage>=90){
        letterGrade = 'A'
    }
    else if(percentage<=89 && percentage>=80){
        letterGrade = 'B'
    }
    else if(percentage<=79 && percentage>=70){
        letterGrade = 'C'
    }
    else if(percentage<=69 && percentage>=60){
        letterGrade = 'D'
    }
    else{
        letterGrade = 'F'
    }

    return `You got ${percentage}% which is a ${letterGrade} !!!`

}

let result = gradeCalculator(15, 20)
console.log(result)