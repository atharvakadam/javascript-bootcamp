let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Make sure to offer vegan food only')
}
else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan options')
}
else{
    console.log('Offer up anything on the menu')
}