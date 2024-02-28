//Challenge 1: Given an array of strings, write a code to return a new array that only includes the strings that are 5 characters or more in length using filter method.
const strings = ['dog', 'by', 'cat', 'camping', 'large', 'flower', 'rabbit'];
const newarray = strings.filter((value) => value.length >= 5);

//Challenge 2: Given an array of numbers, write a code to return a new array of squares for each item in an array using map method.
const numbers = ['45', '55', '65', '75', '85'];
const squarearray = numbers.map((value) => value * value);

//Challenge 3: Given an array of alphabets, write a code to concatenate all the elements of the array "alphabets" to make it as a string and print the same in console. Hint: Use reduce method.
const alphabets = ['K', 'a', 'l', 'v', 'i', 'u', 'm'];
function stringfunction(total, value) {
  return total + value;
}
console.log(alphabets.reduce(stringfunction));

//Challenge 4: Given an array of numbers, write a code to return a first even number using find method.
const number = [1, 2, 3, 4, 5];
const firstEvenNumber = number.find((num) => num % 2 === 0);

//Challenge 5: Given a list of ranks, write a code to return the index of the first occurrence of the number 7 in the ranks array using findIndex method.
const ranks = [1, 5, 7, 8, 10, 7];
const indexOfSeven = ranks.findIndex((rank) => rank === 7);

//Challenge 6: Given a list of numbers, using forEach loop iterate over each element of the array to print the output as:
// 0:2
//1:4
//2:6
//3:8
const num = [2, 4, 6, 8];

num.forEach((value, index) => {
  console.log(`${index}:${value}`);
});

//Challenge 7: Given an array of marks, using "some method", check if the following array has at least one element less than 45 and print true.
const marks = [35, 66, 25, 85, 75, 45];
const hasElementLessThan45 = marks.some((mark) => mark < 45);

if (hasElementLessThan45) {
  console.log(true);
} else {
  console.log(false);
}

//Challenge 8: Given an array of numbers, write a code to check if all the array elements are positive by using "every method" and print true if all the numbers are positive, else print false.
const positive = [2, 3, 4, -1];

const areAllPositive = positive.every((num) => num > 0);

if (areAllPositive) {
  console.log(true);
} else {
  console.log(false);
}

//Challenge 9: Given an array of objects, using dot and bracket notation print the output as :
//1. "Audi"
//2. "Toyota  red"
//3. "Hyundai black 5"
//4. "Renault silver 6"
const cars = [
  {
    name: 'Audi',
    color: ['black', 'red', 'grey'],
    capacity: 5,
  },
  {
    name: 'Hyundai',
    color: ['white', 'grey', 'black'],
    capacity: 5,
  },
  {
    name: 'Toyota',
    color: ['red', 'white', 'black'],
    capacity: 7,
  },
  {
    name: 'Renault',
    color: ['blue', 'silver', 'red'],
    capacity: 6,
  },
];

console.log(`1. "${cars[0].name}"`);
console.log(`2. "${cars[2].name} ${cars[2].color[0]}"`);
console.log(
  `3. "${cars[1]['name']} ${cars[1]['color'][2]} ${cars[1].capacity}"`
);
console.log(`4. "${cars[3].name} ${cars[3].color[1]} ${cars[3]['capacity']}"`);

//Challenge 10: Given a nested object,
//1. Delete the "phoneno" property from the object person.
//2. Using the hasOwnProperty check whether the person object has the property "bike", "house".
//3. Using dot and bracket notation get the output as "Mr Ajay Kumar travels by plane called Air123".
//4. Change the email property of person object to "ajaykumar@gmail.com".
//5. Generate an array of keys to the object person using object.keys() method.

const person = {
  name: 'Ajay Kumar',
  age: 27,
  vehicles: {
    car: 'limousine',
    bike: 'ktm-duke',
    plane: 'lufthansa',
  },
  email: 'ajay@gmail.com',
  phoneno: 9978425555,
};

delete person.phoneno;

const hasBike =
  person.hasOwnProperty('vehicles') && person.vehicles.hasOwnProperty('bike');
const hasHouse = person.hasOwnProperty('house');

const output = `Mr ${person.name} travels by plane called ${person.vehicles['plane']}`;

person.email = 'ajaykumar@gmail.com';

const keysArray = Object.keys(person);

// Printing the results
console.log(keysArray); // Output: ['name', 'age', 'vehicles', 'email']
console.log(hasBike); // Output: true
console.log(hasHouse); // Output: false
console.log(output); // Output: Mr Ajay Kumar travels by plane called lufthansa
