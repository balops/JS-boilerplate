const todo = {
    id: 'wdrctectctxtchcs',
    text: 'Pay the bills',
    completed: false
}

const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)

const { text:todoText, completed, details:otherDetails = 'No Details Provided',  ...others} = todo

console.log(todoText)
console.log(completed)
console.log(otherDetails)
console.log(others)

const age = [65, 0 ,13, 21]
const [firstAge, ...otherAges] = age

console.log(firstAge)
console.log(otherAges)