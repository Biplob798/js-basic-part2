
// spread operators
const myArray = [1, 2, 3]
// const myCopyArray=myArray;
// const myCopyArray = [myArray[0], myArray[1], myArray[2]];
const myCopyArray = [...myArray];
myArray.push(4)
myCopyArray.push(5)
// console.log(myArray);
// console.log(myCopyArray);


// rest operators

// const myAddFunction = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(myAddFunction(1, 2));
const myAddFunction = (first, second, ...params) => {
    console.log(params);
    console.log(first);
    console.log(second);
    let sum = 0;
    params.forEach((num) => {
        // num = num + 1;
        sum = sum + num;
        // console.log(num);

    })
    console.log(sum);
    // return num1 + num2;
}
(myAddFunction(1, 2, 3, 4, 5, 6));


// same as Object 
const myObject = {
    name: 'babu',
    age: 23,
}
const myAnotherObject = {
    position: 'instructor',
    location: 'bad',
}
const finalObject = {
    ...myObject,
    ...myAnotherObject
}
console.log(finalObject);
