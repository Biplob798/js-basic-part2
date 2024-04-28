
const myAddress = {
    house: '27',
    block: 'b',
    road: '15',
    location: 'badda',
    // postal: {
    //     code: {
    //         number: 1212,
    //     }
    // }
}
console.log(myAddress.postal?.code?.number);

// ternary 
const myPostalCode = myAddress.postal?.code ? myAddress.postal.code : 1207
console.log(myPostalCode);