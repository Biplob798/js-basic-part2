const person ={
    name:'kamal uddin',
    age:34,
    profession:'developer',
    salary:25000,
    married:true,
    'fav place':['bandorbon','kuakata']
}
person.salary=35000;
person['age']=45,
person['fav place']=['dhaka','shylet']
console.log(person);
const keyName='profession'
person[keyName]='devops'
console.log(person);
