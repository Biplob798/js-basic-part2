const myFriends = ['lak', 'mak', 'tak']
console.log(myFriends[0]);

// destructuring
// array for importance possition 
const [best, good, normal] = myFriends
console.log(best);
console.log(good);
console.log(normal);


const myAddress = {
    house: '27',
    block: 'b',
    road: '15',
    location: 'badda',
    postal: {
        code: {
            number: 1212,
        }
    }
}
const { house, block, road } = myAddress
console.log(house, block);
// type---1 

console.log(myAddress.block);
console.log(myAddress['road']);

// type----2 
const myRoad = 'road'
console.log(myAddress[myRoad]);

// optional chaining 

console.log(myAddress.postal?.code?.number);