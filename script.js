
//Nested Objects
//Arrays of Objects
//Sorting
//Date
//Time interval
//Module

/****************************************************************/
/***Objects -> A Collection of related properties or methods
 can represent real world objects (Animal, Places, People)***/


/*this -> Reference to the object where is used */

// const person={
//     firstName : "Gajanan",
//     lastName:"Silva",
//     age:30,
//     isEmployed:true,
//     sayHello: function(){console.log(`Hi I am ${this.firstName}`)}
// }
// const person2={
//     firstName : "Shawn",
//     lastName:"Arunjith",
//     age:28,
//     isEmployed:false,
// }
// person.sayHello();
// console.log(person.firstName)

/****************************************************************/




/* Constructors -> Special Method for defining the properties
and methods of objects
*/

// function Person(firstName,lastName,age){
//     this.firstName=firstName,
//     this.lastName=lastName,
//     this.age=age,
//     this.sayhello=function(){console.log(`Hi I am ${this.firstName} ${this.lastName}`)}
// }

// const person1 = new Person("Shawn","Arunjith",28);
// person1.sayhello();






/****************************************************************/

//classes
/* (ES6 feature) providea a more structured and cleaner way
 top work with objects compare to traditional constructor 
 functions */


//  class Person{

//     constructor(firstName,lastName,age){
//         this.firstName=firstName,
//             this.lastName=lastName,
//             this.age=age
//     }

//     sayHello(){
//         console.log(`Hi I am ${this.firstName} ${this.lastName}`)}
        

//  }


//  const person1 = new Person("Shawn","Arunjith",28);
//  console.log(person1.firstName);
//  person1.sayHello();


/****************************************************************/


/*static keyword - > keyword that defines properties or methods that
belongs to a classes itself rather than the objects created 
from the class*/

// class MathUtil{
//     static PI =3.145;

//     static getDiamater(radius){
//         return radius *2;
//     }
// }
// const a= new MathUtil();

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiamater(7))

/****************************************************************/

/*inheritance -> allows a new class to inherit propeeties and methods 
fron an existing class(parent -> child)
helps with code reusabilities
*/

/* Super - > keyword is used in classes to call the constructor 
or access the properties and methods of parent
this - > object
super -> parent */

// class Animal{
//     alive=true;

//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     eat(){
//         console.log(`This ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     }
// }

// class Rabit extends Animal{

//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed=runSpeed;
//     }
 
// }

// class Fish extends Animal{
   
//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed=swimSpeed;
//     }

// }

// class Hawk extends Animal{
   
//     constructor(name,age,flySpeed){
//         super(name,age);
//         this.flySpeed=flySpeed;
//     }

// }

// const rabit1 = new Rabit("bunny",2,50.5);
// const fish1 = new Fish();
// const hawk1 = new Hawk();

// console.log(rabit1.age)





/****************************************************************/

/*Getters & Setters*/

// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }

//     set width(newWidth){
//         if(newWidth>0){
//             this._width= newWidth;
//         }
//         else{
//             console.error("Width must be positive number");
//         }
//     }

//     set height(newheight){
//         if(newheight>0){
//             this._height= newheight;
//         }
//         else{
//             console.error("Height must be positive number");
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }
// }

// const r1= new Rectangle(15 , 25);

// console.log(r1.height);
// console.log(r1.width);








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


const student={
    firstName:"Shawn",
    lastName:"Arunjith",
    age:28
}

// const{firstName,lastName,age}=student;
// console.log(firstName);
// console.log(lastName);
// console.log(age)


function displayPerson({firstName,lastName,age}){
        console.log(firstName);
        console.log(lastName);
        console.log(age)
}

displayPerson(student);