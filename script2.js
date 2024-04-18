/****************************************************************/

/*Destructuring - > extract values from arrays and objects,
then assign them to variables in a convenient way
*/


/*********************  Example 1***************** */

// let a=15;
// let b=21;

// [a , b] = [b ,a] ;
// console.log(a);
// console.log(b)



/*********************  Example 2***************** */

// const  colors=["red" , "green" , "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4] , colors[0]];

// console.log(colors);



/*********************  Example 3***************** */

// const[firstColor,secondColor,thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);



/*********************  Example 4***************** */

// const student = {
//   firstName: "Shawn",
//   lastName: "Arunjith",
//   age: 28,
// };

// const{firstName,lastName,age}=student;
// console.log(firstName);
// console.log(lastName);
// console.log(age)

// function displayPerson({ firstName, lastName, age }) {
//   console.log(firstName);
//   console.log(lastName);
//   console.log(age);
// }

// displayPerson(student);



/********************************************************** */
/* Nested Objects */

// const person={
//     fullname:"Shawn",
//     age:30,
//     isStudent:true,
//     hobbies: ["Singing","Video Games","Coding"],
//     address: {
//         street : "Old rest house Road",
//         city:"Batticalo",
//         country:"Srilanka",
//         contact:{
//             officeNumber:"+9458658",
//             mobileNumber:"+96587855"
//         }

//     }
// }


// // console.log(person.fullname);
// // console.log(person.hobbies[0]);
// // console.log(person.address.country);
// // console.log(person.address.contact.mobileNumber);


// class Person{
//     constructor(name,age, ...address){
//         this.name=name;
//         this.age=age;
//         this.address= new Address(...address)
//     }
// }

// class Address{
//     constructor(street,city,country){
//         this.street=street;
//         this.city=city;
//         this.country=country;
//     }
// }


// const person1= new Person("Shawn",28,"Main Road","Batticaloa","Sri Lanka");

// console.log(person1.address.city)


/************************************************** */
//Arrays of object

// const fruits = [
//   { name: "apple", color: "red", calories: 95 },
//   { name: "orange", color: "orange", calories: 100 },
//   { name: "banana", color: "yellow", calories: 80 },
//   { name: "coconut", color: "white", calories: 70 },
// ];

// fruits.push({ name: "graphs", color: "purple", calories: 110 });
// fruits.pop(); //Remove last index
// fruits.splice(1, 2); //remove specific index from array

// console.log(fruits);

//display through  forEach()
// fruits.forEach(fruit => console.log(fruit.name));

//display through  map()
// const fruitNames = fruits.map(fruit => fruit.name);

// console.log(fruitNames);

//display through  filter()

// const lowCalories = fruits.filter(fruit => fruit.calories < 100);
// console.log(lowCalories);

//reduce
// const maxFruit = fruits.reduce()




