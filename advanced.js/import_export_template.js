
// template
// const greetNextLevelDevelopers = (name) => {
//     const greetMessage = 'Hello, ' + name + ' ,Welcome to the next level journey!'
//     console.log(greetMessage);
// }
// greetNextLevelDevelopers('Mr.Raki')


const greetNextLevelDevelopers = (name) => {
    const greetMessage = `Hello, ${name} ,Welcome to the next level journey!`
    console.log(greetMessage);
}
// greetNextLevelDevelopers('Mr.Raki')
// same name export 
export const greetNewDevelopers = (name) => {
    const greetMessage = `Hello new developer, ${name} ,Welcome to the next level journey!`
    console.log(greetMessage);
}
const greetSuperDevelopers = (name) => {
    const greetMessage = `Hello super developer, ${name} ,Welcome to the next level journey!`
    console.log(greetMessage);
}
const greetAltaDevelopers = (name) => {
    const greetMessage = `Hello alta developer, ${name} ,Welcome to the next level journey!`
    console.log(greetMessage);
}

export { greetSuperDevelopers, greetAltaDevelopers }
export default greetNextLevelDevelopers;