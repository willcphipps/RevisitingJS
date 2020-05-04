//practice destructuring variables...

//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //expected => Tesla // Actual => Tesla
console.log(otherRandomCar) //expected => Mercedes, Honda // Actual => Mercedes
// there is only one variable caught in the destructuring of the array.

//2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); //expected => error (name is not defined locally)  //actual => name is not defined
console.log(otherName);//expected => Elon //acutal => Elon

//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);//expected => 12345 //actual => 12345 //creative password phil!
console.log(hashedPassword);//expected => undefined //acutal => undefined //the Var password is defined outside the person object, therefore hashedpassword was never defined.


//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);//expected => false(2 != 5) //actual => false
console.log(first == third);//expected => true(2 = 2) //actual => true
//the , refers to the index values beeing skipped over in the variable assignment.


//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);//expected => value //actual => value
console.log(secondKey); //expected => [1,5,1,8,3,3] //actual => [1,5,1,8,3,3]
console.log(secondKey[0]);//expected => 1 //actual => 1
console.log(willThisWork);//expected => 5 (secondKey[2]) //acutal => 5
//I guess this does work here. The assignment works from right to left.
//we are assigning variables from the obj, that we are then logging as we would any other variable... 
