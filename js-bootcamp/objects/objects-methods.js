let restaurant = {
    name:'ASB',
    guestCapacity:75,
    guestCount:0,
    checkAvailability: function(partySize){
        console.log(this.guestCount)
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize < seatsLeft
    },
    seatParty: function(partySize){
        restaurant.guestCount += partySize
    },
    removeParty: function(partySize){
        restaurant.guestCount -= partySize
    }

}


let status = restaurant.checkAvailability(4)
console.log(status)

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))